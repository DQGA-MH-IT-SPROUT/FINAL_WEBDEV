(() => {
  const databaseName = "notstolen-media";
  let databasePromise;
  const imageUrls = new Map();

  function openDatabase() {
    if (!window.indexedDB) throw new Error("IndexedDB is unavailable in this browser.");
    if (!databasePromise) {
      databasePromise = new Promise((resolve, reject) => {
        const request = indexedDB.open(databaseName, 1);
        request.onupgradeneeded = () => {
          const database = request.result;
          if (!database.objectStoreNames.contains("images")) database.createObjectStore("images", { keyPath: "id" });
          if (!database.objectStoreNames.contains("settings")) database.createObjectStore("settings", { keyPath: "key" });
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error || new Error("Could not open image storage."));
      });
    }
    return databasePromise;
  }

  async function storeRecord(storeName, record) {
    const database = await openDatabase();
    return new Promise((resolve, reject) => {
      const transaction = database.transaction(storeName, "readwrite");
      transaction.objectStore(storeName).put(record);
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error || new Error("Could not save image data."));
    });
  }

  async function readRecord(storeName, key) {
    const database = await openDatabase();
    return new Promise((resolve, reject) => {
      const request = database.transaction(storeName, "readonly").objectStore(storeName).get(key);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error || new Error("Could not load image data."));
    });
  }

  function safeFileName(name) {
    return name.replace(/[<>:"/\\|?*\u0000-\u001f]/g, "-").replace(/\s+/g, "-").slice(0, 100) || "photo";
  }

  async function requestWritePermission(handle) {
    const options = { mode: "readwrite" };
    if ((await handle.queryPermission(options)) === "granted") return true;
    return (await handle.requestPermission(options)) === "granted";
  }

  async function selectProjectFolder() {
    if (typeof window.showDirectoryPicker !== "function") {
      return { supported: false, saved: false, message: "Folder access is not supported in this browser." };
    }
    const handle = await window.showDirectoryPicker({ mode: "readwrite" });
    if (!(await requestWritePermission(handle))) throw new Error("Folder write permission was not granted.");
    await storeRecord("settings", { key: "project-folder", handle });
    return { supported: true, saved: true, message: "Project image folder connected." };
  }

  async function hasProjectFolder() {
    const record = await readRecord("settings", "project-folder");
    return Boolean(record && record.handle);
  }

  async function getProjectFolder() {
    const record = await readRecord("settings", "project-folder");
    if (!record || !record.handle || !(await requestWritePermission(record.handle))) return null;
    return record.handle;
  }

  async function directory(parent, name) {
    return parent.getDirectoryHandle(name, { create: true });
  }

  async function saveImage(file, listingSlug, index) {
    const unique = window.crypto && typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    const id = `${listingSlug}-${unique}`;
    const record = { id, blob: file, name: file.name, path: "", storage: "indexeddb" };
    let warning = "";
    try {
      const root = await getProjectFolder();
      if (root) {
        const productFolder = await directory(root, "product");
        const listingFolder = await directory(productFolder, listingSlug);
        const resourcesFolder = await directory(listingFolder, "itsresources");
        const name = `${String(index + 1).padStart(2, "0")}-${unique.slice(0, 8)}-${safeFileName(file.name)}`;
        const target = await resourcesFolder.getFileHandle(name, { create: true });
        const writable = await target.createWritable();
        await writable.write(file);
        await writable.close();
        record.path = `product/${listingSlug}/itsresources/${name}`;
        record.storage = "project";
      } else {
        warning = "No project-folder permission; photo saved to this browser instead.";
      }
    } catch (error) {
      warning = `Could not write ${file.name} into the project folder (${error.message}); saved it to this browser instead.`;
    }
    await storeRecord("images", record);
    return { id, name: file.name, path: record.path, storage: record.storage, warning };
  }

  async function getImageUrl(id) {
    if (imageUrls.has(id)) return imageUrls.get(id);
    const record = await readRecord("images", id);
    if (!record || !record.blob) return "";
    const url = URL.createObjectURL(record.blob);
    imageUrls.set(id, url);
    return url;
  }

  async function removeImage(id) {
    const database = await openDatabase();
    return new Promise((resolve, reject) => {
      const transaction = database.transaction("images", "readwrite");
      transaction.objectStore("images").delete(id);
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error || new Error("Could not remove image data."));
    });
  }

  window.NotStolenImages = { selectProjectFolder, hasProjectFolder, saveImage, getImageUrl, removeImage };
})();
