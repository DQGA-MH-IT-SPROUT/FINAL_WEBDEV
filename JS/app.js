(() => {
  const dictionary = {
    vi: {
      announcement: "Mỗi món đồ tốt đều xứng đáng có vòng đời thứ hai.",
      announcementNote: "Đã kiểm định · Giao hàng toàn quốc",
      serviceBar: "Đồ cũ · Từng món có mô tả riêng · Người đăng minh bạch",
      navShop: "Cửa hàng", navPromise: "Cam kết của chúng tôi", cart: "Giỏ hàng",
      searchPlaceholder: "Tìm điện thoại, laptop, tai nghe...", searchHint: "Tìm theo tên, mô tả hoặc danh mục",
      signIn: "Đăng nhập", signOut: "Đăng xuất", register: "Tạo tài khoản", username: "Tên đăng nhập",
      password: "Mật khẩu", displayName: "Tên hiển thị", role: "Vai trò", customer: "Khách hàng",
      publisher: "Người đăng", admin: "Quản trị viên", chooseRole: "Chọn vai trò",
      demoSecurity: "Bản demo: tài khoản và dữ liệu chỉ lưu trong trình duyệt này; không dùng mật khẩu thật.",
      myListings: "Quản lý", manageSite: "Bảng quản trị", createListing: "Đăng món đồ",
      editListing: "Sửa tin đăng", saveListing: "Lưu tin đăng", cancel: "Hủy",
      listingName: "Tên sản phẩm", description: "Mô tả sản phẩm", categoryField: "Danh mục",
      priceField: "Giá bán (VND)", comparePriceField: "Giá tham khảo (VND)",
      conditionField: "Xếp hạng tình trạng", conditionDetails: "Mô tả tình trạng",
      damageLocation: "Vị trí và chi tiết hư hỏng/xước", warrantyField: "Bảo hành",
      photoFiles: "Ảnh thật của món đồ", choosePhotos: "Chọn ảnh",
      connectImageFolder: "Chọn thư mục dự án để lưu ảnh", imageFolderReady: "Đã kết nối thư mục ảnh dự án",
      imageFolderFallback: "Ảnh lưu trong bộ nhớ của trình duyệt, không nằm trong thư mục dự án.",
      folderSavingHint: "Chọn thư mục gốc FINAL; ảnh sẽ lưu tại product/<mã-tin>/itsresources/.",
      publisherLabel: "Người đăng", publisherReputation: "Uy tín người đăng",
      publisherReviews: "đánh giá người đăng", reviewPublisher: "Đánh giá người đăng",
      comments: "Bình luận", commentPlaceholder: "Chia sẻ nhận xét của bạn...", postComment: "Gửi bình luận",
      reviewPlaceholder: "Chia sẻ trải nghiệm với người đăng...", ratingField: "Số sao",
      submitReview: "Gửi đánh giá", reportListing: "Báo cáo tin đăng",
      reportTitle: "Gửi báo cáo đến quản trị viên", reportReason: "Lý do báo cáo",
      reasonIllegal: "Sản phẩm vi phạm pháp luật", reasonStolen: "Nghi ngờ hàng bị đánh cắp",
      reasonFalse: "Thông tin quảng cáo sai sự thật", reasonScam: "Lừa đảo",
      reportDetails: "Chi tiết (không bắt buộc)", submitReport: "Gửi báo cáo",
      adminQueue: "Hàng đợi báo cáo", reports: "Báo cáo", accounts: "Tài khoản",
      listings: "Tin đăng", categories: "Danh mục", settings: "Cài đặt",
      addCategory: "Thêm danh mục", categoryNameVi: "Tên danh mục (Tiếng Việt)",
      categoryNameEn: "Tên danh mục (Tiếng Anh)", categoryKeywords: "Từ khóa tìm kiếm",
      archive: "Ẩn / lưu trữ", restore: "Khôi phục", makePublisher: "Cấp quyền người đăng",
      makeCustomer: "Chuyển thành khách hàng", currentPassword: "Mật khẩu hiện tại",
      removeListing: "Gỡ tin đăng", removeAccount: "Vô hiệu hóa tài khoản",
      newUsername: "Tên đăng nhập mới", newPassword: "Mật khẩu mới",
      saveSettings: "Lưu cài đặt", statusNew: "Mới", statusReview: "Đang xem xét",
      statusResolved: "Đã xử lý", statusRejected: "Không vi phạm", updateStatus: "Cập nhật trạng thái",
      listingSaved: "Đã lưu tin đăng", reportSent: "Đã lưu báo cáo trong trình duyệt này",
      loginRequired: "Vui lòng đăng nhập bằng tài khoản khách hàng để sử dụng tính năng này.",
      accountCreated: "Đã tạo tài khoản. Bạn đã đăng nhập.", invalidCredentials: "Tên đăng nhập hoặc mật khẩu không đúng.",
      commentSaved: "Đã gửi bình luận", reviewSaved: "Đã gửi đánh giá", fillRequired: "Vui lòng điền các trường bắt buộc.",
      accessDenied: "Tài khoản không có quyền thực hiện thao tác này.",
      noReports: "Chưa có báo cáo.", noListings: "Chưa có tin đăng.",
      adminDemoNote: "Đăng nhập demo ban đầu: admin/admin (có thể đổi trong Cài đặt). Tài khoản và báo cáo chỉ lưu trong trình duyệt này.",
      damageHint: "Ví dụ: xước 4 mm ở cạnh dưới bên trái; không ảnh hưởng màn hình.",
      accountDemoOnly: "Chỉ là tài khoản demo cục bộ", categoryExists: "Danh mục đã tồn tại.",
      confirmArchive: "Lưu trữ tin đăng này? Có thể khôi phục sau.",
      confirmed: "Đã cập nhật.", name: "Tên", created: "Ngày tạo", status: "Trạng thái",
      active: "Đang hiển thị", archived: "Đã lưu trữ", allCategories: "Chọn danh mục",
      guestCart: "Giỏ hàng tạm của khách", loginToReport: "Đăng nhập để báo cáo",
      loginToComment: "Đăng nhập để bình luận", publisherSince: "Tham gia",
      privacySerial: "Không đăng số serial/IMEI đầy đủ công khai.",
      enter: "Nhập nội dung", noComments: "Chưa có bình luận.", samplePublisherReview: "Người đăng này chưa có đánh giá mới.",
      unverifiedReview: "Đánh giá demo, chưa xác minh giao dịch",
      damageNotListed: "Người đăng chưa bổ sung chi tiết hư hỏng.", usernameTaken: "Tên đăng nhập đã được sử dụng.",
      photoLimit: "Mỗi tin được chọn tối đa 6 ảnh, mỗi ảnh không quá 8 MB.",
      photoRequired: "Vui lòng chọn ít nhất một ảnh thật của món đồ.",
      deletePermanently: "Xóa vĩnh viễn", reviewTitle: "Đánh giá người đăng",
      operationFailed: "Không thể hoàn tất thao tác.", itemAlreadyInCart: "Món đồ duy nhất này đã có trong giỏ.",
      browseCategories: "Danh mục",
      shopBanner: "Đồ tốt, giá thật.<br><span>Dùng thêm một vòng đời.</span>",
      shopBannerText: "Xem từng món đồ riêng biệt, đọc kỹ mô tả và đánh giá người đăng trước khi chọn.",
      introProofTitle: "Mỗi tin đăng là một món đồ riêng",
      introProofText: "Ảnh thật · ghi rõ khuyết điểm · đánh giá người đăng",
      catalogAssurance: "Tình trạng minh bạch, giá so sánh rõ ràng", resultHeading: "Mặt hàng đang có",
      promiseShortTitle: "Mua đồ cũ với đủ thông tin để tự tin chọn.",
      promiseShortText: "Xem ảnh người đăng cung cấp, khuyết điểm cụ thể và đánh giá người đăng.",
      heroEyebrow: "MUA THÔNG MINH · SỐNG BỀN VỮNG", heroTitle: "Đồ công nghệ tốt.<br><em>Giá lại tốt hơn.</em>",
      heroDescription: "Sản phẩm đã qua sử dụng, được kiểm định kỹ càng để bạn yên tâm chọn món mình cần.",
      heroCta: "Khám phá sản phẩm", happyBuyers: "khách hàng hài lòng", heroCaption: "Vòng đời mới, chất lượng đã kiểm chứng",
      trustChecked: "Kiểm định 25 bước", trustCheckedSub: "Từng sản phẩm đều được test",
      trustWarranty: "Bảo hành rõ ràng", trustWarrantySub: "An tâm sử dụng mỗi ngày",
      trustSecond: "Thêm một vòng đời", trustSecondSub: "Tốt cho bạn, tốt cho môi trường",
      catalogKicker: "ĐƯỢC CHỌN LỌC CHO BẠN", catalogTitle: "Tìm món đồ tiếp theo",
      favorites: "Sản phẩm yêu thích", filters: "Bộ lọc", reset: "Xóa lọc",
      maxPrice: "Mức giá tối đa", anyPrice: "Tất cả mức giá", under5m: "Dưới 5 triệu",
      under10m: "Dưới 10 triệu", under20m: "Dưới 20 triệu", searchShortcut: "Ctrl K",
      condition: "Tình trạng", allConditions: "Tất cả tình trạng", conditionA: "A — Như mới",
      conditionB: "B — Rất tốt", conditionC: "C — Tốt", filterTip: "Đọc mô tả và xem ảnh người đăng cung cấp trước khi chọn.",
      sortBy: "Sắp xếp:", sortFeatured: "Nổi bật", sortPriceLow: "Giá thấp đến cao",
      sortPriceHigh: "Giá cao đến thấp", sortName: "Tên A–Z",
      emptyTitle: "Chưa tìm thấy sản phẩm phù hợp", emptyText: "Thử đổi từ khóa hoặc nới lỏng bộ lọc nhé.",
      resetAll: "Xóa tất cả bộ lọc", promiseKicker: "KHÔNG CHỈ LÀ MUA ĐỒ CŨ",
      promiseTitle: "Mua món đồ bạn cần.<br>Không mua thêm nỗi lo.",
      promiseText: "Chúng tôi kiểm tra kỹ, mô tả thật và đồng hành cùng bạn sau khi mua. Món đồ tốt xứng đáng được sử dụng lâu hơn.",
      promisePoint1: "Một tin cho từng món đồ thật", promisePoint2: "Khuyết điểm được nêu rõ",
      promisePoint3: "Báo cáo tin đáng ngờ",
      footerLine: "Đồ tốt được dùng lâu hơn. Cảm ơn bạn đã chọn mua có ý thức.",
      demoLabel: "· Bản trình diễn học tập", add: "Thêm vào giỏ", added: "Đã thêm vào giỏ hàng",
      popular: "ĐƯỢC YÊU THÍCH", goodDeal: "GIÁ TỐT", condShortA: "NHƯ MỚI",
      condShortB: "RẤT TỐT", condShortC: "TỐT", categoryAll: "Tất cả",
      categoryPhones: "Điện thoại", categoryLaptops: "Laptop", categoryTablets: "Máy tính bảng",
      categoryAudio: "Âm thanh", categoryCameras: "Máy ảnh", categoryAccessories: "Phụ kiện",
      itemCount: "sản phẩm", sellerInspected: "✓ Đã kiểm định", yourBag: "GIỎ HÀNG CỦA BẠN",
      cartEmpty: "Giỏ hàng đang trống. Chọn món đồ bạn thích nhé!", subtotal: "Tạm tính",
      shipping: "Phí giao hàng", free: "Miễn phí", total: "Tổng cộng",
      checkout: "Tiếp tục đặt hàng", demoDisclaimer: "Bản trình diễn: không thu thập thông tin thanh toán, không tạo đơn hàng thật.",
      remove: "Xóa sản phẩm", decrease: "Giảm số lượng", increase: "Tăng số lượng",
      detailCondition: "Tình trạng thực tế", detailSeller: "Người bán", detailWarranty: "Bảo hành",
      referencePrice: "Giá tham khảo sản phẩm tương tự", similarProducts: "Sản phẩm tương tự",
      customerReviews: "Đánh giá mẫu", reviewWord: "đánh giá", sampleReview: "Sản phẩm đúng mô tả, kiểm tra kỹ và sử dụng rất ổn.",
      checkoutTitle: "Xác nhận đơn hàng demo", checkoutIntro: "Kiểm tra lại giỏ hàng trước khi xác nhận đơn hàng thử nghiệm.",
      confirmDemo: "Xác nhận đơn hàng demo", demoOrderTitle: "Đặt hàng demo thành công!",
      demoOrderText: "Đây chỉ là trạng thái minh họa cho bài tập. Không có đơn hàng hoặc thanh toán thật nào được tạo.",
      continueShopping: "Tiếp tục mua sắm", cartCountLabel: "sản phẩm trong giỏ",
      themeLight: "Bật giao diện sáng", themeDark: "Bật giao diện tối",
      languageLabel: "Switch to English", itemAdded: "Đã thêm sản phẩm vào giỏ",
      itemRemoved: "Đã xóa sản phẩm khỏi giỏ", favoriteAdded: "Đã thêm vào yêu thích",
      favoriteRemoved: "Đã bỏ khỏi yêu thích", favoritesOnly: "Đang xem sản phẩm yêu thích",
      categoryLabel: "Danh mục", noSimilar: "Giá tham khảo dựa trên sản phẩm mới cùng phân khúc.",
      stock: "Còn", stockUnit: "sản phẩm", saved: "Tiết kiệm", compared: "so với giá tham khảo",
      mainNavLabel: "Điều hướng chính", categoryNavigation: "Danh mục sản phẩm",
      productFilters: "Bộ lọc sản phẩm", close: "Đóng", sortLabel: "Sắp xếp sản phẩm",
      homeLabel: "NotStolen — Trang chủ", promiseLabel: "Cam kết của NotStolen"
    },
    en: {
      announcement: "Every good thing deserves a second life.",
      announcementNote: "Inspected products · Nationwide delivery",
      serviceBar: "Second-hand items · Individual descriptions · Transparent publishers",
      navShop: "Shop", navPromise: "Our promise", cart: "Cart",
      searchPlaceholder: "Search phones, laptops, headphones...", searchHint: "Search by name, description, or category",
      signIn: "Sign in", signOut: "Sign out", register: "Create account", username: "Username",
      password: "Password", displayName: "Display name", role: "Role", customer: "Customer",
      publisher: "Publisher", admin: "Administrator", chooseRole: "Choose a role",
      demoSecurity: "Demo only: accounts and data stay in this browser; do not use a real password.",
      myListings: "Manage", manageSite: "Admin panel", createListing: "Create listing",
      editListing: "Edit listing", saveListing: "Save listing", cancel: "Cancel",
      listingName: "Product name", description: "Description", categoryField: "Category",
      priceField: "Price (VND)", comparePriceField: "Reference price (VND)",
      conditionField: "Condition grade", conditionDetails: "Condition details",
      damageLocation: "Damage/scratch location and details", warrantyField: "Warranty",
      photoFiles: "Photos of this exact item", choosePhotos: "Choose photos",
      connectImageFolder: "Choose project folder for photos", imageFolderReady: "Project image folder connected",
      imageFolderFallback: "Photos are stored in this browser, not in the project folder.",
      folderSavingHint: "Choose the FINAL project root; photos go to product/<listing-id>/itsresources/.",
      publisherLabel: "Publisher", publisherReputation: "Publisher reputation",
      publisherReviews: "publisher reviews", reviewPublisher: "Review publisher",
      comments: "Comments", commentPlaceholder: "Share a comment...", postComment: "Post comment",
      reviewPlaceholder: "Share your experience with this publisher...", ratingField: "Rating",
      submitReview: "Submit review", reportListing: "Report listing",
      reportTitle: "Send a report to the admin", reportReason: "Reason for report",
      reasonIllegal: "Illegal product", reasonStolen: "Suspected stolen goods",
      reasonFalse: "False advertising", reasonScam: "Scam",
      reportDetails: "Details (optional)", submitReport: "Submit report",
      adminQueue: "Report queue", reports: "Reports", accounts: "Accounts",
      listings: "Listings", categories: "Categories", settings: "Settings",
      addCategory: "Add category", categoryNameVi: "Category name (Vietnamese)",
      categoryNameEn: "Category name (English)", categoryKeywords: "Search keywords",
      archive: "Archive", restore: "Restore", makePublisher: "Promote to publisher",
      makeCustomer: "Change to customer", currentPassword: "Current password",
      removeListing: "Remove listing", removeAccount: "Deactivate account",
      newUsername: "New username", newPassword: "New password",
      saveSettings: "Save settings", statusNew: "New", statusReview: "Under review",
      statusResolved: "Resolved", statusRejected: "No violation", updateStatus: "Update status",
      listingSaved: "Listing saved", reportSent: "Report saved in this browser",
      loginRequired: "Please sign in as a customer to use this feature.",
      accountCreated: "Account created. You are signed in.", invalidCredentials: "Username or password is incorrect.",
      commentSaved: "Comment posted", reviewSaved: "Review submitted", fillRequired: "Please complete the required fields.",
      accessDenied: "This account cannot perform that action.",
      noReports: "No reports yet.", noListings: "No listings yet.",
      adminDemoNote: "Initial demo login: admin/admin (change it in Settings). Accounts and reports stay in this browser.",
      damageHint: "Example: a 4 mm scratch on the lower-left edge; display unaffected.",
      accountDemoOnly: "Local demo account only", categoryExists: "That category already exists.",
      confirmArchive: "Archive this listing? You can restore it later.",
      confirmed: "Updated.", name: "Name", created: "Created", status: "Status",
      active: "Active", archived: "Archived", allCategories: "Choose a category",
      guestCart: "Guest temporary cart", loginToReport: "Sign in to report",
      loginToComment: "Sign in to comment", publisherSince: "Joined",
      privacySerial: "Do not publicly share a full serial/IMEI number.",
      enter: "Enter details", noComments: "No comments yet.", samplePublisherReview: "This publisher has no new reviews yet.",
      unverifiedReview: "Demo review; transaction not verified",
      damageNotListed: "The publisher has not provided damage details.", usernameTaken: "That username is already taken.",
      photoLimit: "Choose up to 6 photos per listing, with a maximum of 8 MB each.",
      photoRequired: "Select at least one real photo of the item.",
      deletePermanently: "Delete permanently", reviewTitle: "Publisher review",
      operationFailed: "The action could not be completed.", itemAlreadyInCart: "This unique item is already in your cart.",
      browseCategories: "Browse",
      shopBanner: "Good gear, honest prices.<br><span>Ready for another life.</span>",
      shopBannerText: "Browse each individual item and read its description and publisher reviews before choosing.",
      introProofTitle: "One listing for each physical item",
      introProofText: "Photos · specific flaws · publisher reviews",
      catalogAssurance: "Honest condition details and comparable pricing", resultHeading: "Available items",
      promiseShortTitle: "Make informed choices when buying second-hand.",
      promiseShortText: "Review publisher-provided photos, specific flaws, and publisher reviews.",
      heroEyebrow: "SHOP SMART · LIVE SUSTAINABLY", heroTitle: "Good tech.<br><em>Better prices.</em>",
      heroDescription: "Pre-owned products, carefully inspected so you can shop with confidence.",
      heroCta: "Explore products", happyBuyers: "happy customers", heroCaption: "A new life, quality you can trust",
      trustChecked: "25-point inspection", trustCheckedSub: "Every product is tested",
      trustWarranty: "Clear warranty", trustWarrantySub: "Shop with peace of mind",
      trustSecond: "Give it another life", trustSecondSub: "Better for you and the planet",
      catalogKicker: "PICKED JUST FOR YOU", catalogTitle: "Find your next favorite",
      favorites: "Saved favorites", filters: "Filters", reset: "Clear",
      maxPrice: "Maximum price", anyPrice: "Any price", under5m: "Under ₫5m",
      under10m: "Under ₫10m", under20m: "Under ₫20m", searchShortcut: "Ctrl K",
      condition: "Condition", allConditions: "Any condition", conditionA: "A — Like new",
      conditionB: "B — Great", conditionC: "C — Good", filterTip: "Read the description and review the publisher-provided photos before choosing.",
      sortBy: "Sort:", sortFeatured: "Featured", sortPriceLow: "Price: low to high",
      sortPriceHigh: "Price: high to low", sortName: "Name A–Z",
      emptyTitle: "No matching products", emptyText: "Try a different search or loosen your filters.",
      resetAll: "Clear all filters", promiseKicker: "MORE THAN SECOND-HAND",
      promiseTitle: "Buy what you need.<br>Not another worry.",
      promiseText: "We inspect carefully, describe honestly, and stand by you after purchase. Good things deserve to be used longer.",
      promisePoint1: "One listing per physical item", promisePoint2: "Specific flaws are disclosed",
      promisePoint3: "Report suspicious listings",
      footerLine: "Good things last longer. Thanks for choosing a more thoughtful way to shop.",
      demoLabel: "· Learning demo", add: "Add to cart", added: "Added to cart",
      popular: "POPULAR", goodDeal: "GREAT VALUE", condShortA: "LIKE NEW",
      condShortB: "GREAT", condShortC: "GOOD", categoryAll: "All",
      categoryPhones: "Phones", categoryLaptops: "Laptops", categoryTablets: "Tablets",
      categoryAudio: "Audio", categoryCameras: "Cameras", categoryAccessories: "Accessories",
      itemCount: "products", sellerInspected: "✓ Inspected", yourBag: "YOUR BAG",
      cartEmpty: "Your cart is empty. Find something you love!", subtotal: "Subtotal",
      shipping: "Shipping", free: "Free", total: "Total",
      checkout: "Continue to checkout", demoDisclaimer: "Demo only: no payment details are collected and no real order is placed.",
      remove: "Remove item", decrease: "Decrease quantity", increase: "Increase quantity",
      detailCondition: "Condition details", detailSeller: "Seller", detailWarranty: "Warranty",
      referencePrice: "Similar product reference", similarProducts: "Similar products",
      customerReviews: "Sample reviews", reviewWord: "reviews", sampleReview: "As described, carefully checked, and working great.",
      checkoutTitle: "Review demo order", checkoutIntro: "Review your cart before confirming this demo checkout.",
      confirmDemo: "Confirm demo order", demoOrderTitle: "Demo checkout complete!",
      demoOrderText: "This is a sample confirmation for the assignment. No real order or payment has been created.",
      continueShopping: "Continue shopping", cartCountLabel: "items in cart",
      themeLight: "Switch to light mode", themeDark: "Switch to dark mode",
      languageLabel: "Chuyển sang tiếng Việt", itemAdded: "Product added to cart",
      itemRemoved: "Product removed from cart", favoriteAdded: "Added to favorites",
      favoriteRemoved: "Removed from favorites", favoritesOnly: "Showing saved favorites",
      categoryLabel: "Category", noSimilar: "Reference price based on a new product in this segment.",
      stock: "Only", stockUnit: "left", saved: "Save", compared: "vs. reference price",
      mainNavLabel: "Main navigation", categoryNavigation: "Product categories",
      productFilters: "Product filters", close: "Close", sortLabel: "Sort products",
      homeLabel: "NotStolen — Home", promiseLabel: "NotStolen's promise"
    }
  };
  const allCategory = { id: "all", name: { vi: "Tất cả", en: "All" }, keywords: "" };
  const visualBackground = {
    coral: "#f2ded4", lilac: "#e5e2ef", blue: "#dce9ec", mint: "#dcece3",
    sand: "#ebe3d5", cream: "#e9e7dc", slate: "#dce1e2", rose: "#f0e2df"
  };
  const visualGlyph = { phone: "▯", laptop: "▱", headphones: "◖", tablet: "▯", camera: "●", earbuds: "♪", monitor: "▱", watch: "◉" };
  const categoryGlyph = { all: "▦", phones: "▯", laptops: "▱", tablets: "▯", audio: "◖", cameras: "◉", accessories: "⌚" };
  const ui = {
    categoryList: document.getElementById("categoryList"),
    productGrid: document.getElementById("productGrid"),
    resultCount: document.getElementById("resultCount"),
    emptyState: document.getElementById("emptyState"),
    search: document.getElementById("searchInput"),
    price: document.getElementById("priceFilter"),
    condition: document.getElementById("conditionFilter"),
    sort: document.getElementById("sortFilter"),
    favoritesFilter: document.getElementById("favoritesFilter"),
    accountButton: document.getElementById("accountButton"),
    manageButton: document.getElementById("manageButton"),
    detailDialog: document.getElementById("detailDialog"),
    detailContent: document.getElementById("detailContent"),
    cartDialog: document.getElementById("cartDialog"),
    cartItems: document.getElementById("cartItems"),
    cartSummary: document.getElementById("cartSummary"),
    cartCount: document.getElementById("cartCount"),
    checkoutButton: document.getElementById("startCheckout"),
    checkoutDialog: document.getElementById("checkoutDialog"),
    checkoutContent: document.getElementById("checkoutContent"),
    workflowDialog: document.getElementById("workflowDialog"),
    workflowKicker: document.getElementById("workflowKicker"),
    workflowTitle: document.getElementById("workflowTitle"),
    workflowContent: document.getElementById("workflowContent"),
    toast: document.getElementById("toast")
  };
  const state = {
    locale: loadSaved("notstolen-locale", loadSaved("dungtot-locale", "vi")),
    theme: loadSaved("notstolen-theme", loadSaved("dungtot-theme", "light")),
    guestCart: loadSaved("notstolen-cart", loadSaved("dungtot-cart", {})),
    cart: {},
    category: "all",
    favoritesOnly: false,
    selectedProduct: null,
    toastTimer: null,
    categories: loadSaved("notstolen-categories", window.STORE_CATEGORIES),
    listings: loadSaved("notstolen-listings", window.STORE_PRODUCTS),
    users: loadSaved("notstolen-users", []),
    reports: loadSaved("notstolen-reports", []),
    publisherReviews: loadSaved("notstolen-publisher-reviews", []),
    userCarts: loadSaved("notstolen-user-carts", {}),
    favorites: loadSaved("notstolen-favorites", loadSaved("dungtot-favorites", [])),
    currentUserId: loadSaved("notstolen-session", null),
    imageFolderConnected: false,
    imageUrls: {},
    loadingImageIds: new Set(),
    editingListingId: null,
    temporaryImageUrls: []
  };
  const products = state.listings;
  state.cart = state.guestCart;
  if (!dictionary[state.locale]) state.locale = "vi";
  if (!["light", "dark"].includes(state.theme)) state.theme = "light";
  if (!state.cart || Array.isArray(state.cart) || typeof state.cart !== "object") state.cart = {};
  if (!Array.isArray(state.favorites)) state.favorites = [];
  if (!Array.isArray(state.categories)) state.categories = window.STORE_CATEGORIES;
  if (!Array.isArray(state.listings)) state.listings = window.STORE_PRODUCTS;
  if (!Array.isArray(state.users)) state.users = [];
  if (!Array.isArray(state.reports)) state.reports = [];
  if (!Array.isArray(state.publisherReviews)) state.publisherReviews = [];
  if (!state.userCarts || typeof state.userCarts !== "object") state.userCarts = {};

  function loadSaved(key, fallback) {
    try {
      const saved = localStorage.getItem(key);
      return saved === null ? fallback : JSON.parse(saved);
    } catch (error) {
      console.error(`Unable to read saved setting "${key}".`, error);
      return fallback;
    }
  }

  function save(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Unable to save setting "${key}".`, error);
      showToast(state.locale === "vi" ? "Không thể lưu cài đặt trên trình duyệt này." : "This browser could not save your setting.");
    }
  }

  function t(key) {
    return dictionary[state.locale][key] || dictionary.vi[key] || key;
  }

  function money(amount) {
    return new Intl.NumberFormat(state.locale === "vi" ? "vi-VN" : "en-US", {
      style: "currency", currency: "VND", maximumFractionDigits: 0
    }).format(amount);
  }

  function productText(product, field) {
    return product[field][state.locale] || product[field].vi;
  }

  function currentUser() {
    return state.users.find((user) => user.id === state.currentUserId && !user.archived) || null;
  }

  function isCustomer() {
    const user = currentUser();
    return Boolean(user && user.role === "customer");
  }

  function isPublisher() {
    const user = currentUser();
    return Boolean(user && (user.role === "publisher" || user.role === "admin"));
  }

  function isAdmin() {
    return Boolean(currentUser() && currentUser().role === "admin");
  }

  function categoryName(id) {
    const category = state.categories.find((entry) => entry.id === id);
    if (!category) return state.locale === "vi" ? "Khác" : "Other";
    return category.name[state.locale] || category.name.vi;
  }

  function saveState(key, value) {
    state[key] = value;
    save(`notstolen-${key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`, value);
  }

  function safeText(value) {
    const text = value === null || typeof value === "undefined" ? "" : String(value);
    return text.replace(/[&<>"']/g, (character) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;"
    })[character]);
  }

  function makeId(prefix) {
    const suffix = window.crypto && typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    return `${prefix}-${suffix}`;
  }

  function slugify(value) {
    const slug = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/gi, "d").toLocaleLowerCase().replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    return slug || `item-${Date.now()}`;
  }

  function publisherInfo(product) {
    const publisher = product.publisher || { id: "unknown", rating: product.rating || 0, reviews: product.reviews || 0 };
    const reviews = state.publisherReviews.filter((review) =>
      review.publisherId === publisher.id && !state.users.some((user) => user.id === review.userId && user.archived)
    );
    if (!reviews.length) return { rating: publisher.rating || 0, count: publisher.reviews || 0 };
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return {
      rating: Number((total / reviews.length).toFixed(1)),
      count: reviews.length + (publisher.reviews || 0)
    };
  }

  async function passwordDigest(password, saltBytes) {
    if (!window.crypto || !crypto.subtle) throw new Error("Secure browser password hashing is unavailable. Open the demo through localhost in a modern browser.");
    const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveBits"]);
    const bits = await crypto.subtle.deriveBits({
      name: "PBKDF2", salt: saltBytes, iterations: 120000, hash: "SHA-256"
    }, key, 256);
    return Array.from(new Uint8Array(bits), (byte) => byte.toString(16).padStart(2, "0")).join("");
  }

  function randomSalt() {
    const bytes = crypto.getRandomValues(new Uint8Array(16));
    return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
  }

  function saltToBytes(salt) {
    return new Uint8Array(salt.match(/.{2}/g).map((hex) => parseInt(hex, 16)));
  }

  async function ensureAdminAccount() {
    const admin = state.users.find((user) => user.role === "admin");
    if (admin) {
      admin.archived = false;
      return;
    }
    const salt = randomSalt();
    state.users.push({
      id: "admin", username: "admin", displayName: "NotStolen Admin", role: "admin",
      passwordSalt: salt, passwordHash: await passwordDigest("admin", saltToBytes(salt)),
      createdAt: new Date().toISOString(), archived: false
    });
    saveState("users", state.users);
  }

  function openWorkflow(title, kicker, content) {
    ui.workflowKicker.textContent = kicker;
    ui.workflowTitle.textContent = title;
    ui.workflowContent.innerHTML = content;
    if (!ui.workflowDialog.open) ui.workflowDialog.showModal();
  }

  function normalizeSearch(value) {
    return value.toLocaleLowerCase().normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d");
  }

  function renderArt(product, detail = false) {
    const image = (product.photoRefs || []).map((reference) => state.imageUrls[reference.id]).find(Boolean);
    if (image) return `<img class="listing-photo${detail ? " listing-photo-large" : ""}" src="${image}" alt="${safeText(product.name[state.locale] || product.name.vi)}">`;
    return `<div class="product-art ${product.visual || "phone"}${detail ? " product-art-large" : ""}" aria-hidden="true" style="--product-bg:${visualBackground[product.color] || "#e3e7df"}"><span>${visualGlyph[product.visual] || "◈"}</span></div>`;
  }

  function applyPreferences() {
    document.documentElement.dataset.theme = state.theme;
    document.documentElement.lang = state.locale;
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const text = t(node.dataset.i18n);
      if (text.includes("<br>") || text.includes("<em>")) node.innerHTML = text;
      else node.textContent = text;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      node.placeholder = t(node.dataset.i18nPlaceholder);
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
      node.setAttribute("aria-label", t(node.dataset.i18nAriaLabel));
    });
    document.getElementById("languageToggle").textContent = state.locale === "vi" ? "EN" : "VI";
    document.getElementById("languageToggle").setAttribute("aria-label", t("languageLabel"));
    document.getElementById("themeToggle").setAttribute("aria-label", state.theme === "light" ? t("themeDark") : t("themeLight"));
    document.getElementById("openCart").setAttribute("aria-label", `${t("cart")}: ${cartQuantity()} ${t("cartCountLabel")}`);
    document.querySelector('meta[name="description"]').content = state.locale === "vi"
      ? "NotStolen — mua bán đồ đã qua sử dụng, tình trạng và người đăng minh bạch."
      : "NotStolen — a second-hand marketplace with transparent item condition and publishers.";
    document.title = "NotStolen — " + (state.locale === "vi" ? "Mua bán minh bạch" : "Transparent marketplace");
    document.querySelector('meta[name="theme-color"]').content = state.theme === "dark" ? "#171d1a" : "#f3f4f4";
    const user = currentUser();
    ui.accountButton.innerHTML = user
      ? `<span>${safeText(user.displayName)}</span>`
      : `<span>${t("signIn")}</span>`;
    ui.accountButton.setAttribute("aria-label", user ? `${user.displayName} · ${t(user.role)}` : t("signIn"));
    ui.manageButton.hidden = !user || user.role === "customer";
    if (user && user.role !== "customer") {
      ui.manageButton.innerHTML = `<span>${t(user.role === "admin" ? "manageSite" : "myListings")}</span>`;
    }
  }

  function renderCategories() {
    ui.categoryList.innerHTML = [allCategory, ...state.categories.filter((category) => !category.archived)].map((category) => {
      const id = category.id;
      const active = state.category === id;
      const glyph = categoryGlyph[id] || "◈";
      const name = id === "all" ? category.name[state.locale] : categoryName(id);
      return `<button class="category-chip${active ? " active" : ""}" type="button" data-category="${safeText(id)}" aria-pressed="${active}"><span class="category-glyph" aria-hidden="true">${glyph}</span>${safeText(name)}</button>`;
    }).join("");
  }

  function getVisibleProducts() {
    const query = normalizeSearch(ui.search.value.trim());
    const maxPrice = Number(ui.price.value);
    const condition = ui.condition.value;
    const visible = products.filter((product) => {
      if (product.archived || product.active === false) return false;
      if (state.users.some((user) => user.id === product.publisher.id && user.archived)) return false;
      if (state.category !== "all" && product.category !== state.category) return false;
      if (state.favoritesOnly && !state.favorites.includes(product.id)) return false;
      if (product.price > maxPrice || (condition !== "all" && product.condition !== condition)) return false;
      if (!query) return true;
      const productCategory = state.categories.find((item) => item.id === product.category);
      const searchable = [
        ...Object.values(product.name), ...Object.values(product.description),
        ...Object.values(product.conditionText || {}), ...Object.values(product.damageNotes || {}),
        ...Object.values(productCategory ? productCategory.name : {}),
        product.category, productCategory ? productCategory.keywords : ""
      ].join(" ");
      return normalizeSearch(searchable).includes(query);
    });
    switch (ui.sort.value) {
      case "price-low": visible.sort((a, b) => a.price - b.price); break;
      case "price-high": visible.sort((a, b) => b.price - a.price); break;
      case "name": visible.sort((a, b) => productText(a, "name").localeCompare(productText(b, "name"), state.locale)); break;
      default: visible.sort((a, b) => a.featured - b.featured);
    }
    return visible;
  }

  function discountPercent(product) {
    return Math.max(0, Math.round((1 - product.price / product.comparePrice) * 100));
  }

  function productCard(product) {
    const favorited = state.favorites.includes(product.id);
    const publisher = product.publisher || { id: "unknown", name: product.seller && product.seller.vi ? product.seller.vi : "Publisher", rating: product.rating || 0, reviews: product.reviews || 0 };
    const reputation = publisherInfo(product);
    const condition = product.conditionText && (product.conditionText[state.locale] || product.conditionText.vi);
    return `<article class="product-card">
      <div class="product-visual" style="--product-bg:${visualBackground[product.color]}" data-open-product="${product.id}">
        <span class="product-tag">${t(`condShort${product.condition}`)}</span>${renderArt(product)}
        <span class="condition-tag">${safeText(condition || "")}</span>
        <button class="favorite-button${favorited ? " active" : ""}" type="button" data-favorite="${product.id}" aria-label="${favorited ? t("favoriteRemoved") : t("favoriteAdded")}" aria-pressed="${favorited}">${favorited ? "♥" : "♡"}</button>
      </div>
      <div class="product-info">
        <div class="product-meta"><span>${safeText(categoryName(product.category))}</span><span class="rating">★ ${reputation.rating} (${reputation.count})</span></div>
        <h3 class="product-name"><button type="button" data-open-product="${product.id}">${safeText(productText(product, "name"))}</button></h3>
        <p class="product-description">${safeText(productText(product, "description"))}</p>
        <div class="product-price-row"><strong class="product-price">${money(product.price)}</strong><span class="product-compare">${money(product.comparePrice)}</span><span class="product-saving">-${discountPercent(product)}%</span></div>
        <div class="product-card-footer"><span class="seller-label">${t("publisherLabel")}: ${safeText(publisher.name || publisher.username || "")}</span><div class="card-action"><span class="stock-label">★ ${reputation.rating}</span><button class="add-button" type="button" data-add="${product.id}" aria-label="${t("add")}: ${safeText(productText(product, "name"))}">+</button></div></div>
      </div>
    </article>`;
  }

  function renderProducts() {
    const visible = getVisibleProducts();
    ui.productGrid.innerHTML = visible.map(productCard).join("");
    ui.emptyState.hidden = visible.length > 0;
    ui.productGrid.hidden = visible.length === 0;
    const extra = state.favoritesOnly ? ` · ${t("favoritesOnly")}` : "";
    ui.resultCount.textContent = `${visible.length} ${t("itemCount")}${extra}`;
    ui.favoritesFilter.setAttribute("aria-pressed", String(state.favoritesOnly));
    renderCategories();
    loadVisibleImages(visible);
  }

  async function loadVisibleImages(visible) {
    if (!window.NotStolenImages) return;
    for (const product of visible) {
      for (const reference of product.photoRefs || []) {
        if (state.imageUrls[reference.id] || state.loadingImageIds.has(reference.id)) continue;
        state.loadingImageIds.add(reference.id);
        try {
          const url = await window.NotStolenImages.getImageUrl(reference.id);
          if (url) {
            state.imageUrls[reference.id] = url;
            if (state.editingListingId === product.id) {
              const preview = document.getElementById("photoPreview");
              if (preview && !preview.querySelector(`[data-photo-ref="${reference.id}"]`)) {
                preview.insertAdjacentHTML("beforeend", `<img data-photo-ref="${safeText(reference.id)}" src="${url}" alt="${safeText(reference.name)}">`);
              }
            }
            renderProducts();
            if (state.selectedProduct === product.id && ui.detailDialog.open) openProduct(product.id);
            return;
          }
        } catch (error) {
          console.error(`Could not load listing image ${reference.id}.`, error);
          showToast(error.message);
        } finally {
          state.loadingImageIds.delete(reference.id);
        }
      }
    }
  }

  function showToast(message) {
    window.clearTimeout(state.toastTimer);
    ui.toast.textContent = message;
    ui.toast.classList.add("visible");
    state.toastTimer = window.setTimeout(() => ui.toast.classList.remove("visible"), 2300);
  }

  function cartQuantity() {
    return Object.values(state.cart).reduce((sum, quantity) => sum + quantity, 0);
  }

  function cartTotal() {
    return Object.entries(state.cart).reduce((sum, [id, quantity]) => {
      const product = products.find((item) => item.id === id);
      return sum + (product ? product.price * quantity : 0);
    }, 0);
  }

  function addToCart(id) {
    const product = products.find((item) => item.id === id);
    if (!product) return;
    if (product.archived || product.active === false) return;
    if (currentUser() && !isCustomer()) {
      showToast(t("accessDenied"));
      return;
    }
    if ((state.cart[id] || 0) >= product.stock) {
      showToast(t("itemAlreadyInCart"));
      return;
    }
    state.cart[id] = Math.min(product.stock, (state.cart[id] || 0) + 1);
    if (currentUser()) {
      state.userCarts[currentUser().id] = state.cart;
      saveState("userCarts", state.userCarts);
    } else {
      save("notstolen-cart", state.cart);
    }
    renderCart();
    applyPreferences();
    showToast(t("itemAdded"));
  }

  function renderCart() {
    ui.cartCount.textContent = String(cartQuantity());
    ui.checkoutButton.disabled = cartQuantity() === 0;
    const entries = Object.entries(state.cart).filter(([, quantity]) => quantity > 0);
    if (!entries.length) {
      ui.cartItems.innerHTML = `<p class="cart-empty">${t("cartEmpty")}</p>`;
      ui.cartSummary.innerHTML = "";
      return;
    }
    ui.cartItems.innerHTML = entries.map(([id, quantity]) => {
      const product = products.find((item) => item.id === id);
      if (!product) return "";
      return `<div class="cart-item">
        <div class="cart-thumb" style="--product-bg:${visualBackground[product.color]}">${renderArt(product)}</div>
        <div><p class="cart-item-name">${safeText(productText(product, "name"))}</p><span class="cart-item-price">${money(product.price)}</span>
          <div class="quantity-control"><button type="button" data-quantity="-1" data-id="${id}" aria-label="${t("decrease")}">−</button><span>${quantity}</span><button type="button" data-quantity="1" data-id="${id}" aria-label="${t("increase")}" ${quantity >= product.stock ? "disabled" : ""}>+</button></div>
        </div>
        <button class="remove-item" type="button" data-remove="${id}" aria-label="${t("remove")}">×</button>
      </div>`;
    }).join("");
    ui.cartSummary.innerHTML = `<div class="summary-row"><span>${t("subtotal")}</span><span>${money(cartTotal())}</span></div>
      <div class="summary-row"><span>${t("shipping")}</span><span>${t("free")}</span></div>
      <div class="summary-row total"><span>${t("total")}</span><span>${money(cartTotal())}</span></div>`;
  }

  function comparisonBlock(product) {
    const similar = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 2);
    const related = similar.length ? similar.map((item) =>
      `<div class="comparison-item"><span>${productText(item, "name")}</span><strong>${money(item.price)}</strong></div>`
    ).join("") : `<p class="comparison-note">${t("noSimilar")}</p>`;
    return `<div class="comparison-box"><strong>${t("referencePrice")}: ${money(product.comparePrice)}</strong>${related}</div>`;
  }

  function showAccount() {
    const user = currentUser();
    if (!user) {
      openSignIn();
      return;
    }
    openWorkflow(user.displayName, t("accountDemoOnly"), `<div class="account-summary">
      <strong>${safeText(user.username)}</strong><span>${t(user.role)}</span>
      <small>${t("publisherSince")}: ${new Date(user.createdAt).toLocaleDateString(state.locale === "vi" ? "vi-VN" : "en-US")}</small>
      <button class="secondary-button" type="button" data-action="sign-out">${t("signOut")}</button>
    </div><p class="demo-notice">${t("demoSecurity")}</p>`);
  }

  function openSignIn() {
    openWorkflow(t("signIn"), t("accountDemoOnly"), `<form data-form="sign-in" class="stack-form">
      <label>${t("username")}<input name="username" required autocomplete="username"></label>
      <label>${t("password")}<input name="password" type="password" required autocomplete="current-password"></label>
      <p class="form-message" data-form-message></p><button class="primary-button" type="submit">${t("signIn")}</button>
      <button class="text-button" type="button" data-action="register">${t("register")}</button>
      <p class="demo-notice">${t("demoSecurity")}<br>${t("adminDemoNote")}</p>
    </form>`);
  }

  function openRegistration() {
    openWorkflow(t("register"), t("accountDemoOnly"), `<form data-form="register" class="stack-form">
      <label>${t("displayName")}<input name="displayName" required maxlength="60" autocomplete="name"></label>
      <label>${t("username")}<input name="username" required minlength="3" maxlength="24" autocomplete="username"></label>
      <label>${t("password")}<input name="password" type="password" required minlength="6" autocomplete="new-password"></label>
      <label>${t("role")}<select name="role" required><option value="customer">${t("customer")}</option><option value="publisher">${t("publisher")}</option></select></label>
      <p class="form-message" data-form-message></p><button class="primary-button" type="submit">${t("register")}</button>
      <button class="text-button" type="button" data-action="sign-in">${t("signIn")}</button>
      <p class="demo-notice">${t("demoSecurity")}</p>
    </form>`);
  }

  function openListingEditor(listingId) {
    if (!isPublisher()) return showToast(t("accessDenied"));
    const product = listingId ? products.find((item) => item.id === listingId) : null;
    if (product && !isAdmin() && product.publisher.id !== currentUser().id) return showToast(t("accessDenied"));
    state.editingListingId = listingId || null;
    state.pendingFiles = [];
    const fieldValue = (field, language) => {
      if (!product) return "";
      const source = field === "damage" ? product.damageNotes : field === "condition" ? product.conditionText : product[field];
      return source && source[language] ? source[language] : "";
    };
    const langFields = (key, label, multiline) => {
      const input = (code, lang) => multiline
        ? `<textarea name="${key}${code}" maxlength="${key === "description" ? 1200 : 500}" ${["description", "condition", "damage"].includes(key) ? "required" : ""} placeholder="${t("enter")} (${lang})">${safeText(fieldValue(key, code))}</textarea>`
        : `<input name="${key}${code}" required maxlength="100" placeholder="${lang}" value="${safeText(fieldValue(key, code))}">`;
      return `<fieldset><legend>${label}</legend><div class="language-fields">${input("vi", "Tiếng Việt")}${input("en", "English")}</div></fieldset>`;
    };
    const categoryOptions = state.categories.filter((category) => !category.archived).map((category) =>
      `<option value="${safeText(category.id)}" ${product && product.category === category.id ? "selected" : ""}>${safeText(categoryName(category.id))}</option>`
    ).join("");
    const existingPhotos = (product ? product.photoRefs || [] : []).map((reference) => state.imageUrls[reference.id]
      ? `<img src="${state.imageUrls[reference.id]}" alt="${safeText(reference.name)}">` : ""
    ).join("");
    openWorkflow(product ? t("editListing") : t("createListing"), `${t("publisherLabel")}: ${safeText(currentUser().displayName)}`, `<form data-form="listing" class="stack-form listing-form">
      ${langFields("name", t("listingName"), false)}
      ${langFields("description", t("description"), true)}
      <label>${t("categoryField")}<select name="category" required>${categoryOptions}</select></label>
      <div class="form-columns"><label>${t("priceField")}<input name="price" type="number" min="1" step="1000" required value="${product ? product.price : ""}"></label>
        <label>${t("comparePriceField")}<input name="comparePrice" type="number" min="1" step="1000" required value="${product ? product.comparePrice : ""}"></label></div>
      <label>${t("conditionField")}<select name="condition" required>
        <option value="A" ${product && product.condition === "A" ? "selected" : ""}>${t("conditionA")}</option>
        <option value="B" ${product && product.condition === "B" ? "selected" : ""}>${t("conditionB")}</option>
        <option value="C" ${product && product.condition === "C" ? "selected" : ""}>${t("conditionC")}</option>
      </select></label>
      ${langFields("condition", t("conditionDetails"), true)}
      ${langFields("damage", t("damageLocation"), true)}
      <label>${t("warrantyField")}<div class="language-fields"><input name="warrantyvi" placeholder="Tiếng Việt" value="${safeText(product && product.warranty ? product.warranty.vi : "")}"><input name="warrantyen" placeholder="English" value="${safeText(product && product.warranty ? product.warranty.en : "")}"></div></label>
      <label>${t("photoFiles")}<input name="photos" type="file" accept="image/*" multiple ${product ? "" : "required"}></label>
      <div class="photo-preview" id="photoPreview">${existingPhotos}</div>
      <div class="photo-preview" id="newPhotoPreview"></div>
      <button class="secondary-button" type="button" data-action="connect-image-folder">${t(state.imageFolderConnected ? "imageFolderReady" : "connectImageFolder")}</button>
      <p class="demo-notice">${t("folderSavingHint")} ${t("damageHint")} ${t("privacySerial")}</p>
      <p class="form-message" data-form-message></p>
      <div class="form-actions"><button class="primary-button" type="submit">${t("saveListing")}</button><button class="secondary-button" type="button" data-close-dialog>${t("cancel")}</button></div>
    </form>`);
    const fileInput = ui.workflowContent.querySelector('input[name="photos"]');
    fileInput.addEventListener("change", () => {
      state.temporaryImageUrls.forEach((url) => URL.revokeObjectURL(url));
      state.temporaryImageUrls = [];
      state.pendingFiles = Array.from(fileInput.files || []).filter((file) => file.type.startsWith("image/"));
      const previews = state.pendingFiles.map((file) => {
        const url = URL.createObjectURL(file);
        state.temporaryImageUrls.push(url);
        return `<img src="${url}" alt="${safeText(file.name)}">`;
      }).join("");
      document.getElementById("newPhotoPreview").innerHTML = previews;
    });
    if (product) loadVisibleImages([product]);
  }

  function setFormMessage(form, message) {
    const container = form.querySelector("[data-form-message]");
    if (container) container.textContent = message;
  }

  function showReportForm(listingId) {
    if (!isCustomer()) return showToast(t("loginRequired"));
    const listing = products.find((item) => item.id === listingId);
    if (!listing) return showToast(t("accessDenied"));
    openWorkflow(t("reportTitle"), safeText(productText(listing, "name")), `<form data-form="report" data-listing-id="${listing.id}" class="stack-form">
      <label>${t("reportReason")}<select name="reason" required>
        <option value="">${t("reportReason")}</option>
        <option value="illegal">${t("reasonIllegal")}</option>
        <option value="stolen">${t("reasonStolen")}</option>
        <option value="false-advertising">${t("reasonFalse")}</option>
        <option value="scam">${t("reasonScam")}</option>
      </select></label>
      <label>${t("reportDetails")}<textarea name="details" maxlength="1000"></textarea></label>
      <p class="demo-notice">${t("adminDemoNote")}</p>
      <p class="form-message" data-form-message></p><button class="primary-button" type="submit">${t("submitReport")}</button>
    </form>`);
  }

  function renderManagement() {
    const user = currentUser();
    if (!user || (user.role !== "admin" && user.role !== "publisher")) return showToast(t("accessDenied"));
    const ownListings = products.filter((product) => user.role === "admin" || product.publisher.id === user.id);
    if (user.role !== "admin") {
      ui.workflowContent.innerHTML = `<p class="demo-notice">${t("demoSecurity")}</p>
        <button class="primary-button" type="button" data-action="new-listing">${t("createListing")}</button>
        <h3>${t("myListings")}</h3>${renderListingTable(ownListings, false)}`;
      return;
    }

    const categoryRows = state.categories.map((category) => `<div class="manage-row">
      <div><strong>${safeText(categoryName(category.id))}</strong><small>${safeText(category.id)} · ${safeText(category.keywords)}</small></div>
      <button class="secondary-button" type="button" data-action="toggle-category" data-category-id="${safeText(category.id)}">${category.archived ? t("restore") : t("archive")}</button>
    </div>`).join("");
    const accountRows = state.users.map((account) => `<div class="manage-row">
      <div><strong>${safeText(account.displayName)}</strong><small>${safeText(account.username)} · ${t(account.role)} · ${account.archived ? t("archived") : t("active")}</small></div>
      <div class="manage-actions">${account.id === user.id ? "" : `<button class="secondary-button" type="button" data-action="${account.role === "publisher" ? "demote-user" : "promote-user"}" data-user-id="${safeText(account.id)}">${t(account.role === "publisher" ? "makeCustomer" : "makePublisher")}</button><button class="secondary-button" type="button" data-action="toggle-user" data-user-id="${safeText(account.id)}">${account.archived ? t("restore") : t("removeAccount")}</button>`}</div>
    </div>`).join("");
    const reportRows = state.reports.length ? state.reports.slice().reverse().map((report) => {
      const listing = products.find((item) => item.id === report.listingId);
      const reporter = state.users.find((item) => item.id === report.reporterId);
      return `<div class="report-card"><div class="report-card-heading"><strong>${t(`reason${report.reasonKey}`)}</strong><span>${safeText(reporter ? reporter.username : "—")} · ${new Date(report.createdAt).toLocaleDateString()}</span></div>
        <p>${safeText(listing ? productText(listing, "name") : report.listingName)}</p><p>${safeText(report.details || "")}</p>
        <label>${t("status")}<select data-report-status="${safeText(report.id)}">
          ${["new", "review", "resolved", "rejected"].map((status) => `<option value="${status}" ${report.status === status ? "selected" : ""}>${t(`status${status[0].toUpperCase()}${status.slice(1)}`)}</option>`).join("")}
        </select></label><button class="secondary-button" type="button" data-action="save-report-status" data-report-id="${safeText(report.id)}">${t("updateStatus")}</button>
      </div>`;
    }).join("") : `<p class="empty-review">${t("noReports")}</p>`;
    ui.workflowContent.innerHTML = `<div class="admin-demo-notice">${t("adminDemoNote")} ${t("demoSecurity")}</div>
      <div class="manager-section"><h3>${t("settings")}</h3><button class="secondary-button" type="button" data-action="admin-settings">${t("saveSettings")}</button></div>
      <div class="manager-section"><h3>${t("categories")}</h3><form data-form="category" class="category-form">
        <input name="nameVi" required placeholder="${t("categoryNameVi")}"><input name="nameEn" required placeholder="${t("categoryNameEn")}">
        <input name="keywords" placeholder="${t("categoryKeywords")}"><button class="primary-button" type="submit">${t("addCategory")}</button>
      </form>${categoryRows}</div>
      <div class="manager-section"><h3>${t("accounts")}</h3>${accountRows || `<p>${t("noListings")}</p>`}</div>
      <div class="manager-section"><div class="manage-section-heading"><h3>${t("listings")}</h3><button class="primary-button" type="button" data-action="new-listing">${t("createListing")}</button></div>${renderListingTable(ownListings, true)}</div>
      <div class="manager-section"><h3>${t("adminQueue")}</h3>${reportRows}</div>`;
  }

  function renderListingTable(listings, adminMode) {
    if (!listings.length) return `<p class="empty-review">${t("noListings")}</p>`;
    return listings.slice().reverse().map((product) => `<div class="manage-row">
      <div><strong>${safeText(productText(product, "name"))}</strong><small>${safeText(categoryName(product.category))} · ${money(product.price)} · ${safeText(product.publisher.name)} · ${product.archived ? t("archived") : t("active")}</small></div>
      <div class="manage-actions"><button class="secondary-button" type="button" data-action="edit-listing" data-listing-id="${safeText(product.id)}">${t("editListing")}</button><button class="secondary-button" type="button" data-action="toggle-listing" data-listing-id="${safeText(product.id)}">${product.archived ? t("restore") : t("removeListing")}</button></div>
    </div>`).join("");
  }

  function openManagement() {
    const user = currentUser();
    if (!user || (user.role !== "admin" && user.role !== "publisher")) return showToast(t("accessDenied"));
    openWorkflow(t(user.role === "admin" ? "manageSite" : "myListings"), t("accountDemoOnly"), "");
    renderManagement();
  }

  function openAdminSettings() {
    if (!isAdmin()) return showToast(t("accessDenied"));
    const admin = currentUser();
    openWorkflow(t("settings"), t("adminDemoNote"), `<form data-form="admin-settings" class="stack-form">
      <label>${t("currentPassword")}<input name="currentPassword" type="password" required autocomplete="current-password"></label>
      <label>${t("newUsername")}<input name="username" required value="${safeText(admin.username)}" autocomplete="username"></label>
      <label>${t("newPassword")}<input name="password" type="password" minlength="6" autocomplete="new-password"></label>
      <p class="demo-notice">${t("adminDemoNote")}</p><p class="form-message" data-form-message></p>
      <button class="primary-button" type="submit">${t("saveSettings")}</button>
    </form>`);
  }

  function persistCart() {
    if (isCustomer()) {
      state.userCarts[currentUser().id] = state.cart;
      saveState("userCarts", state.userCarts);
    } else {
      state.guestCart = state.cart;
      save("notstolen-cart", state.cart);
    }
  }

  async function createAccount(form) {
    const data = new FormData(form);
    const username = String(data.get("username") || "").trim();
    const displayName = String(data.get("displayName") || "").trim();
    const password = String(data.get("password") || "");
    const role = String(data.get("role") || "customer");
    if (!/^[a-zA-Z0-9_-]{3,24}$/.test(username) || !displayName || password.length < 6 || !["customer", "publisher"].includes(role)) {
      setFormMessage(form, t("fillRequired"));
      return;
    }
    if (state.users.some((user) => user.username.toLowerCase() === username.toLowerCase())) {
      setFormMessage(form, t("usernameTaken"));
      return;
    }
    const salt = randomSalt();
    const account = {
      id: makeId("user"), username, displayName, role, passwordSalt: salt,
      passwordHash: await passwordDigest(password, saltToBytes(salt)),
      createdAt: new Date().toISOString(), archived: false
    };
    state.users.push(account);
    saveState("users", state.users);
    await signInAccount(account);
    ui.workflowDialog.close();
    showToast(t("accountCreated"));
  }

  async function authenticateAccount(form) {
    const data = new FormData(form);
    const username = String(data.get("username") || "").trim().toLowerCase();
    const account = state.users.find((user) => user.username.toLowerCase() === username && !user.archived);
    if (!account) {
      setFormMessage(form, t("invalidCredentials"));
      return;
    }
    const digest = await passwordDigest(String(data.get("password") || ""), saltToBytes(account.passwordSalt));
    if (digest !== account.passwordHash) {
      setFormMessage(form, t("invalidCredentials"));
      return;
    }
    await signInAccount(account);
    ui.workflowDialog.close();
  }

  async function signInAccount(account) {
    state.currentUserId = account.id;
    save("notstolen-session", account.id);
    if (account.role === "customer") {
      state.guestCart = state.cart;
      save("notstolen-cart", state.guestCart);
      state.cart = state.userCarts[account.id] || {};
      state.userCarts[account.id] = state.cart;
      saveState("userCarts", state.userCarts);
    }
    applyPreferences();
    renderCart();
  }

  function signOutAccount() {
    if (isCustomer()) {
      state.userCarts[currentUser().id] = state.cart;
      saveState("userCarts", state.userCarts);
    } else {
      state.guestCart = state.cart;
      save("notstolen-cart", state.guestCart);
    }
    state.currentUserId = null;
    save("notstolen-session", null);
    state.cart = state.guestCart;
    ui.workflowDialog.close();
    applyPreferences();
    renderCart();
  }

  async function saveListing(form) {
    if (!isPublisher()) throw new Error(t("accessDenied"));
    const data = new FormData(form);
    const id = state.editingListingId || makeId("item");
    const existing = products.find((item) => item.id === state.editingListingId);
    if (existing && !isAdmin() && existing.publisher.id !== currentUser().id) throw new Error(t("accessDenied"));
    const photos = state.pendingFiles || [];
    if (photos.length + (existing && existing.photoRefs ? existing.photoRefs.length : 0) > 6 ||
        photos.some((file) => !file.type.startsWith("image/") || file.size > 8 * 1024 * 1024)) {
      throw new Error(t("photoLimit"));
    }
    if (!existing && photos.length === 0) throw new Error(t("photoRequired"));
    const user = currentUser();
    const name = { vi: String(data.get("namevi") || "").trim(), en: String(data.get("nameen") || "").trim() };
    const description = { vi: String(data.get("descriptionvi") || "").trim(), en: String(data.get("descriptionen") || "").trim() };
    const conditionText = { vi: String(data.get("conditionvi") || "").trim(), en: String(data.get("conditionen") || "").trim() };
    const damageNotes = { vi: String(data.get("damagevi") || "").trim(), en: String(data.get("damageen") || "").trim() };
    const category = String(data.get("category") || "");
    const price = Number(data.get("price"));
    const comparePrice = Number(data.get("comparePrice"));
    if (!name.vi || !name.en || !description.vi || !description.en || !damageNotes.vi || !damageNotes.en ||
        !state.categories.some((item) => item.id === category && !item.archived) ||
        !Number.isSafeInteger(price) || price <= 0 || !Number.isSafeInteger(comparePrice) || comparePrice <= 0) {
      throw new Error(t("fillRequired"));
    }
    const slug = `${slugify(name.vi)}-${slugify(id).slice(-12)}`;
    const photoRefs = existing ? (existing.photoRefs || []).slice() : [];
    const warnings = [];
    for (let index = 0; index < photos.length; index += 1) {
      const saved = await window.NotStolenImages.saveImage(photos[index], slug, index);
      photoRefs.push(saved);
      if (saved.warning) warnings.push(saved.warning);
      const url = await window.NotStolenImages.getImageUrl(saved.id);
      if (url) state.imageUrls[saved.id] = url;
    }
    const categoryVisuals = { phones: "phone", laptops: "laptop", tablets: "tablet", audio: "headphones", cameras: "camera", accessories: "monitor" };
    const record = {
      ...(existing || {}),
      id,
      category,
      name,
      description,
      condition: String(data.get("condition")),
      conditionText,
      damageNotes,
      price,
      comparePrice,
      rating: existing ? existing.rating : 0,
      reviews: existing ? existing.reviews : 0,
      stock: 1,
      badge: "",
      color: existing ? existing.color : "slate",
      visual: existing ? existing.visual : (categoryVisuals[category] || "phone"),
      seller: { vi: user.displayName, en: user.displayName },
      warranty: {
        vi: String(data.get("warrantyvi") || "").trim(),
        en: String(data.get("warrantyen") || "").trim()
      },
      publisher: existing && !isAdmin() ? existing.publisher : {
        id: existing && isAdmin() ? existing.publisher.id : user.id,
        name: existing && isAdmin() ? existing.publisher.name : user.displayName,
        rating: existing ? existing.publisher.rating : 0,
        reviews: existing ? existing.publisher.reviews : 0
      },
      photoRefs,
      comments: existing ? (existing.comments || []) : [],
      createdAt: existing ? existing.createdAt : new Date().toISOString(),
      featured: existing ? existing.featured : products.length + 1,
      archived: false,
      active: true
    };
    if (existing) Object.assign(existing, record);
    else products.push(record);
    saveState("listings", products);
    state.pendingFiles = [];
    state.temporaryImageUrls.forEach((url) => URL.revokeObjectURL(url));
    state.temporaryImageUrls = [];
    state.editingListingId = null;
    ui.workflowDialog.close();
    renderProducts();
    showToast(t("listingSaved"));
    if (warnings.length) window.alert(warnings.join("\n"));
  }

  function submitReport(form) {
    if (!isCustomer()) throw new Error(t("loginRequired"));
    const user = currentUser();
    const listingId = form.dataset.listingId;
    const listing = products.find((item) => item.id === listingId);
    const data = new FormData(form);
    const reason = String(data.get("reason") || "");
    const reasonKeys = { illegal: "Illegal", stolen: "Stolen", "false-advertising": "False", scam: "Scam" };
    if (!listing || !reasonKeys[reason]) throw new Error(t("fillRequired"));
    state.reports.push({
      id: makeId("report"),
      listingId,
      listingName: productText(listing, "name"),
      reporterId: user.id,
      reasonKey: reasonKeys[reason],
      details: String(data.get("details") || "").trim(),
      status: "new",
      createdAt: new Date().toISOString(),
      history: [{ action: "reported", actorId: user.id, createdAt: new Date().toISOString() }]
    });
    saveState("reports", state.reports);
    ui.workflowDialog.close();
    showToast(t("reportSent"));
  }

  function submitComment(form) {
    if (!isCustomer()) throw new Error(t("loginRequired"));
    const user = currentUser();
    const listing = products.find((item) => item.id === form.dataset.listingId);
    const text = String(new FormData(form).get("text") || "").trim();
    if (!listing || !text) throw new Error(t("fillRequired"));
    listing.comments = listing.comments || [];
    listing.comments.push({
      id: makeId("comment"), userId: user.id, displayName: user.displayName,
      text, createdAt: new Date().toISOString(), archived: false
    });
    saveState("listings", products);
    openProduct(listing.id);
    showToast(t("commentSaved"));
  }

  function submitPublisherReview(form) {
    if (!isCustomer()) throw new Error(t("loginRequired"));
    const user = currentUser();
    const data = new FormData(form);
    const publisherId = form.dataset.publisherId;
    const rating = Number(data.get("rating"));
    const text = String(data.get("text") || "").trim();
    if (!publisherId || rating < 1 || rating > 5 || !text) throw new Error(t("fillRequired"));
    const previous = state.publisherReviews.find((review) => review.publisherId === publisherId && review.userId === user.id);
    if (previous) {
      previous.rating = rating;
      previous.text = text;
      previous.updatedAt = new Date().toISOString();
    } else {
      state.publisherReviews.push({
        id: makeId("review"), publisherId, userId: user.id, displayName: user.displayName,
        rating, text, createdAt: new Date().toISOString()
      });
    }
    saveState("publisherReviews", state.publisherReviews);
    openProduct(state.selectedProduct);
    showToast(t("reviewSaved"));
  }

  function addCategory(form) {
    if (!isAdmin()) throw new Error(t("accessDenied"));
    const data = new FormData(form);
    const nameVi = String(data.get("nameVi") || "").trim();
    const nameEn = String(data.get("nameEn") || "").trim();
    const keywords = String(data.get("keywords") || "").trim();
    const id = slugify(nameEn);
    if (!nameVi || !nameEn) throw new Error(t("fillRequired"));
    if (state.categories.some((item) => item.id === id)) throw new Error(t("categoryExists"));
    state.categories.push({ id, name: { vi: nameVi, en: nameEn }, keywords, archived: false });
    saveState("categories", state.categories);
    renderManagement();
    renderCategories();
    showToast(t("confirmed"));
  }

  async function changeAdminSettings(form) {
    if (!isAdmin()) throw new Error(t("accessDenied"));
    const data = new FormData(form);
    const admin = currentUser();
    const digest = await passwordDigest(String(data.get("currentPassword") || ""), saltToBytes(admin.passwordSalt));
    if (digest !== admin.passwordHash) throw new Error(t("invalidCredentials"));
    const username = String(data.get("username") || "").trim();
    const nextPassword = String(data.get("password") || "");
    if (!/^[a-zA-Z0-9_-]{3,24}$/.test(username) || (nextPassword && nextPassword.length < 6)) throw new Error(t("fillRequired"));
    if (state.users.some((user) => user.id !== admin.id && user.username.toLowerCase() === username.toLowerCase())) {
      throw new Error(t("usernameTaken"));
    }
    admin.username = username;
    if (nextPassword) {
      admin.passwordSalt = randomSalt();
      admin.passwordHash = await passwordDigest(nextPassword, saltToBytes(admin.passwordSalt));
    }
    saveState("users", state.users);
    ui.workflowDialog.close();
    applyPreferences();
    showToast(t("confirmed"));
  }

  async function performAction(target) {
    const action = target.dataset.action;
    if (action === "register") return openRegistration();
    if (action === "sign-in") return openSignIn();
    if (action === "sign-out") return signOutAccount();
    if (action === "new-listing") {
      ui.workflowDialog.close();
      return openListingEditor(null);
    }
    if (action === "edit-listing") {
      ui.workflowDialog.close();
      return openListingEditor(target.dataset.listingId);
    }
    if (action === "admin-settings") return openAdminSettings();
    if (action === "connect-image-folder") {
      try {
        const result = await window.NotStolenImages.selectProjectFolder();
        state.imageFolderConnected = result.saved;
        if (!result.supported) window.alert(`${result.message} ${t("imageFolderFallback")}`);
        else showToast(t("imageFolderReady"));
        target.textContent = t(state.imageFolderConnected ? "imageFolderReady" : "connectImageFolder");
      } catch (error) {
        console.error("Could not connect the project image folder.", error);
        window.alert(error.message);
      }
      return;
    }
    if (action === "toggle-listing") {
      const listing = products.find((item) => item.id === target.dataset.listingId);
      if (!listing || (!isAdmin() && listing.publisher.id !== currentUser().id)) return showToast(t("accessDenied"));
      if (!listing.archived && !window.confirm(t("confirmArchive"))) return;
      listing.archived = !listing.archived;
      listing.active = !listing.archived;
      listing.history = listing.history || [];
      listing.history.push({ action: listing.archived ? "archived" : "restored", actorId: currentUser().id, createdAt: new Date().toISOString() });
      saveState("listings", products);
      renderManagement();
      renderProducts();
      return;
    }
    if (action === "toggle-user") {
      if (!isAdmin()) return showToast(t("accessDenied"));
      const account = state.users.find((item) => item.id === target.dataset.userId);
      if (!account || account.id === currentUser().id || account.role === "admin") return;
      account.archived = !account.archived;
      account.history = account.history || [];
      account.history.push({ action: account.archived ? "archived" : "restored", actorId: currentUser().id, createdAt: new Date().toISOString() });
      saveState("users", state.users);
      renderManagement();
      return;
    }
    if (action === "promote-user" || action === "demote-user") {
      if (!isAdmin()) return showToast(t("accessDenied"));
      const account = state.users.find((item) => item.id === target.dataset.userId);
      if (!account || account.role === "admin" || account.archived) return;
      account.role = action === "promote-user" ? "publisher" : "customer";
      saveState("users", state.users);
      renderManagement();
      return;
    }
    if (action === "toggle-category") {
      if (!isAdmin()) return showToast(t("accessDenied"));
      const category = state.categories.find((item) => item.id === target.dataset.categoryId);
      if (!category) return;
      category.archived = !category.archived;
      saveState("categories", state.categories);
      renderManagement();
      renderCategories();
      return;
    }
    if (action === "save-report-status") {
      if (!isAdmin()) return showToast(t("accessDenied"));
      const report = state.reports.find((item) => item.id === target.dataset.reportId);
      const select = ui.workflowContent.querySelector(`[data-report-status="${target.dataset.reportId}"]`);
      if (!report || !select) return;
      const actor = currentUser();
      report.status = select.value;
      report.history = report.history || [];
      report.history.push({ action: select.value, actorId: actor.id, createdAt: new Date().toISOString() });
      saveState("reports", state.reports);
      renderManagement();
      showToast(t("confirmed"));
    }
  }

  async function handleFormSubmit(event) {
    const form = event.target.closest("form[data-form]");
    if (!form) return;
    event.preventDefault();
    try {
      switch (form.dataset.form) {
        case "sign-in": await authenticateAccount(form); break;
        case "register": await createAccount(form); break;
        case "listing": await saveListing(form); break;
        case "report": submitReport(form); break;
        case "comment": submitComment(form); break;
        case "publisher-review": submitPublisherReview(form); break;
        case "category": addCategory(form); break;
        case "admin-settings": await changeAdminSettings(form); break;
        default: throw new Error("Unsupported form action.");
      }
    } catch (error) {
      console.error(`NotStolen ${form.dataset.form} action failed.`, error);
      setFormMessage(form, error.message || t("operationFailed"));
    }
  }

  function productGallery(product) {
    const images = (product.photoRefs || []).map((reference) => ({
      url: state.imageUrls[reference.id], name: reference.name
    })).filter((item) => item.url);
    if (!images.length) return renderArt(product, true);
    return `<div class="detail-gallery">${images.map((image) =>
      `<img class="listing-photo listing-photo-large" src="${image.url}" alt="${safeText(productText(product, "name"))} — ${safeText(image.name)}">`
    ).join("")}</div>`;
  }

  function renderComments(product) {
    const comments = (product.comments || []).filter((comment) => !comment.archived && !state.users.some((user) => user.id === comment.userId && user.archived));
    const content = comments.length
      ? comments.map((comment) => `<div class="user-review"><strong>${safeText(comment.displayName)}</strong><small>${new Date(comment.createdAt).toLocaleDateString(state.locale === "vi" ? "vi-VN" : "en-US")}</small><p>${safeText(comment.text)}</p></div>`).join("")
      : `<p class="empty-review">${t("noComments")}</p>`;
    const form = isCustomer()
      ? `<form data-form="comment" data-listing-id="${product.id}" class="inline-form"><label for="commentText">${t("comments")}</label><textarea id="commentText" name="text" required maxlength="600" placeholder="${t("commentPlaceholder")}"></textarea><button class="primary-button" type="submit">${t("postComment")}</button></form>`
      : `<button class="text-button" type="button" data-sign-in-required="comment">${t("loginToComment")}</button>`;
    return `${content}${form}`;
  }

  function renderPublisherReviews(product) {
    const reviews = state.publisherReviews.filter((review) =>
      review.publisherId === product.publisher.id && !state.users.some((user) => user.id === review.userId && user.archived)
    );
    const display = reviews.length
      ? reviews.slice(-3).reverse().map((review) => `<div class="user-review"><strong>★ ${review.rating} · ${safeText(review.displayName)}</strong><p>${safeText(review.text)}</p></div>`).join("")
      : `<p class="empty-review">${t("samplePublisherReview")} · ${t("unverifiedReview")}</p>`;
    const form = isCustomer()
      ? `<form data-form="publisher-review" data-publisher-id="${safeText(product.publisher.id)}" class="inline-form"><label for="publisherReviewText">${t("reviewPublisher")}</label><select name="rating" required aria-label="${t("ratingField")}"><option value="">${t("ratingField")}</option><option value="5">5 ★</option><option value="4">4 ★</option><option value="3">3 ★</option><option value="2">2 ★</option><option value="1">1 ★</option></select><textarea id="publisherReviewText" name="text" required maxlength="600" placeholder="${t("reviewPlaceholder")}"></textarea><button class="primary-button" type="submit">${t("submitReview")}</button></form>`
      : `<button class="text-button" type="button" data-sign-in-required="review">${t("loginToComment")}</button>`;
    return `${display}${form}`;
  }

  function openProduct(id) {
    const product = products.find((item) => item.id === id);
    if (!product || product.archived || state.users.some((user) => user.id === product.publisher.id && user.archived)) return;
    state.selectedProduct = id;
    const publisher = product.publisher || { id: "unknown", name: product.seller && product.seller.vi ? product.seller.vi : "Publisher", rating: product.rating || 0, reviews: product.reviews || 0 };
    const reputation = publisherInfo(product);
    ui.detailContent.innerHTML = `<div class="detail-layout">
      <div class="detail-visual" style="--product-bg:${visualBackground[product.color] || "#e3e7df"}">${productGallery(product)}<span class="condition-tag">${t(`condShort${product.condition}`)}</span></div>
      <div class="detail-copy">
        <span class="section-kicker">${safeText(categoryName(product.category))} · ${t("condShort" + product.condition)}</span>
        <h2 id="detailTitle">${safeText(productText(product, "name"))}</h2>
        <p>${safeText(productText(product, "description"))}</p>
        <div class="detail-condition"><strong>${t("detailCondition")}</strong><span>${safeText(productText(product, "conditionText"))}</span><strong>${t("damageLocation")}</strong><span>${safeText(productText(product, "damageNotes") || t("damageNotListed"))}</span></div>
        <div class="detail-trust"><span>${t("publisherLabel")}: ${safeText(publisher.name || publisher.username)}</span><span>${t("publisherReputation")}: ★ ${reputation.rating} (${reputation.count} ${t("publisherReviews")})</span><span>${t("detailWarranty")}: ${safeText(product.warranty && (product.warranty[state.locale] || product.warranty.vi) || "")}</span></div>
        <div class="detail-price"><strong>${money(product.price)}</strong><del>${money(product.comparePrice)}</del></div>
        ${comparisonBlock(product)}
        <div class="detail-reviews"><strong>${t("comments")}</strong>${renderComments(product)}</div>
        <div class="detail-reviews"><strong>${t("publisherReviews")} · ★ ${reputation.rating}</strong>${renderPublisherReviews(product)}</div>
        <div class="detail-actions"><button class="primary-button" type="button" data-add="${product.id}"><span>${t("add")}</span><span aria-hidden="true">+</span></button>${isCustomer() ? `<button class="secondary-button" type="button" data-report="${product.id}">${t("reportListing")}</button>` : ""}</div>
      </div>
    </div>`;
    if (!ui.detailDialog.open) ui.detailDialog.showModal();
    loadVisibleImages([product]);
  }

  function beginCheckout() {
    if (!cartQuantity()) return;
    const quantity = cartQuantity();
    const total = money(cartTotal());
    ui.cartDialog.close();
    ui.checkoutContent.innerHTML = `<div class="checkout-icon">✓</div>
      <span class="section-kicker">${t("demoLabel")}</span>
      <h2 id="checkoutTitle">${t("checkoutTitle")}</h2>
      <p>${t("checkoutIntro")}<br><strong>${quantity} ${t("cartCountLabel")} · ${total}</strong></p>
      <p class="demo-disclaimer">${t("demoDisclaimer")}</p>
      <button class="primary-button" id="confirmDemo" type="button">${t("confirmDemo")}</button>`;
    ui.checkoutDialog.showModal();
  }

  function confirmCheckout() {
    state.cart = {};
    persistCart();
    renderCart();
    ui.checkoutContent.innerHTML = `<div class="checkout-icon">✓</div>
      <span class="section-kicker">${t("demoLabel")}</span>
      <h2 id="checkoutTitle">${t("demoOrderTitle")}</h2>
      <p>${t("demoOrderText")}</p>
      <button class="primary-button" id="continueShopping" type="button">${t("continueShopping")}</button>`;
  }

  function resetFilters() {
    state.category = "all";
    state.favoritesOnly = false;
    ui.search.value = "";
    ui.price.value = "50000000";
    ui.condition.value = "all";
    ui.sort.value = "featured";
    renderProducts();
  }

  document.addEventListener("click", (event) => {
    const target = event.target.closest("button, [data-open-product], [data-sign-in-required]");
    if (!target) return;
    if (target.matches("[data-category]")) {
      state.category = target.dataset.category;
      state.favoritesOnly = false;
      renderProducts();
    } else if (target.matches("[data-add]")) {
      addToCart(target.dataset.add);
    } else if (target.matches("[data-open-product]")) {
      openProduct(target.dataset.openProduct);
    } else if (target.matches("[data-favorite]")) {
      const id = target.dataset.favorite;
      state.favorites = state.favorites.includes(id)
        ? state.favorites.filter((favorite) => favorite !== id)
        : [...state.favorites, id];
      save("notstolen-favorites", state.favorites);
      renderProducts();
      showToast(state.favorites.includes(id) ? t("favoriteAdded") : t("favoriteRemoved"));
    } else if (target.matches("[data-sign-in-required]")) {
      openSignIn();
    } else if (target.matches("[data-report]")) {
      showReportForm(target.dataset.report);
    } else if (target.matches("[data-action]")) {
      performAction(target).catch((error) => {
        console.error("NotStolen action failed.", error);
        showToast(error.message || t("operationFailed"));
      });
    } else if (target.matches("[data-close-dialog]")) {
      target.closest("dialog").close();
    } else if (target.matches("[data-quantity]")) {
      const id = target.dataset.id;
      const product = products.find((item) => item.id === id);
      if (!product) return;
      const next = (state.cart[id] || 0) + Number(target.dataset.quantity);
      if (next <= 0) delete state.cart[id];
      else state.cart[id] = Math.min(product.stock, next);
      persistCart();
      renderCart();
      applyPreferences();
    } else if (target.matches("[data-remove]")) {
      delete state.cart[target.dataset.remove];
      persistCart();
      renderCart();
      applyPreferences();
      showToast(t("itemRemoved"));
    } else if (target.id === "accountButton") {
      showAccount();
    } else if (target.id === "manageButton") {
      openManagement();
    } else if (target.id === "openCart") {
      renderCart();
      ui.cartDialog.showModal();
    } else if (target.id === "favoritesFilter") {
      state.favoritesOnly = !state.favoritesOnly;
      renderProducts();
    } else if (target.id === "resetFilters" || target.id === "emptyReset") {
      resetFilters();
    } else if (target.id === "startCheckout") {
      beginCheckout();
    } else if (target.id === "confirmDemo") {
      confirmCheckout();
    } else if (target.id === "continueShopping") {
      ui.checkoutDialog.close();
      document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
    } else if (target.id === "languageToggle") {
      state.locale = state.locale === "vi" ? "en" : "vi";
      save("notstolen-locale", state.locale);
      applyPreferences();
      renderProducts();
      renderCart();
      if (state.selectedProduct && ui.detailDialog.open) openProduct(state.selectedProduct);
    } else if (target.id === "themeToggle") {
      state.theme = state.theme === "light" ? "dark" : "light";
      save("notstolen-theme", state.theme);
      applyPreferences();
    }
  });

  document.addEventListener("submit", (event) => {
    handleFormSubmit(event);
  });

  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      ui.search.focus();
    }
  });

  ui.search.addEventListener("input", renderProducts);
  ui.price.addEventListener("change", renderProducts);
  ui.condition.addEventListener("change", renderProducts);
  ui.sort.addEventListener("change", renderProducts);
  ui.detailDialog.addEventListener("click", (event) => {
    if (event.target === ui.detailDialog) ui.detailDialog.close();
  });
  ui.cartDialog.addEventListener("click", (event) => {
    if (event.target === ui.cartDialog) ui.cartDialog.close();
  });
  ui.checkoutDialog.addEventListener("click", (event) => {
    if (event.target === ui.checkoutDialog) ui.checkoutDialog.close();
  });

  async function initialize() {
    try {
      await ensureAdminAccount();
    } catch (error) {
      console.error("Could not initialize the demo administrator account.", error);
      showToast(error.message);
    }
    if (!currentUser() && state.currentUserId) {
      state.currentUserId = null;
      save("notstolen-session", null);
    }
    const normalizeCart = (cart) => Object.entries(cart || {}).reduce((normalized, [id, quantity]) => {
      const listing = products.find((item) => item.id === id && !item.archived);
      if (listing && Number(quantity) > 0) normalized[id] = Math.min(listing.stock, Number(quantity));
      return normalized;
    }, {});
    products.forEach((product, index) => {
      product.stock = 1;
      product.comments = product.comments || [];
      product.photoRefs = product.photoRefs || [];
      if (!product.publisher) {
        product.publisher = {
          id: `sample-${slugify(product.seller && product.seller.vi ? product.seller.vi : "publisher")}-${index}`,
          name: product.seller && product.seller.vi ? product.seller.vi : "Publisher",
          rating: product.rating || 0,
          reviews: product.reviews || 0
        };
      }
      if (!product.damageNotes) product.damageNotes = { vi: "", en: "" };
    });
    state.guestCart = normalizeCart(state.guestCart);
    state.userCarts = Object.keys(state.userCarts).reduce((carts, userId) => {
      carts[userId] = normalizeCart(state.userCarts[userId]);
      return carts;
    }, {});
    if (isCustomer()) state.cart = state.userCarts[currentUser().id] || {};
    else state.cart = state.guestCart;
    try {
      state.imageFolderConnected = await window.NotStolenImages.hasProjectFolder();
    } catch (error) {
      console.error("Could not check the saved project-folder permission.", error);
      showToast(error.message);
    }
    save("notstolen-locale", state.locale);
    save("notstolen-theme", state.theme);
    save("notstolen-favorites", state.favorites);
    save("notstolen-cart", state.guestCart);
    saveState("userCarts", state.userCarts);
    saveState("listings", products);
    applyPreferences();
    renderProducts();
    renderCart();
  }

  initialize();
})();
