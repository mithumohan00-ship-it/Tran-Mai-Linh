// Dữ liệu Dự án cho Hồ sơ Năng lực của Trần Mai Linh (Linh)
const PROJECTS_DATA = [
  {
    id: "animal-care-branding",
    title: "Chăm sóc Thú cưng An An",
    subtitle: "Phòng khám Thú y & Trung tâm Phục hồi Thân thiện",
    category: "graphic",
    categoryLabel: "Thiết kế Đồ họa & Thương hiệu",
    tags: ["Nhận diện Thương hiệu", "Thiết kế Bao bì", "Minh họa Độc bản", "Ấn phẩm In ấn"],
    year: "2024",
    client: "Phòng khám Thú y & Chăm sóc An An (Hà Nội)",
    role: "Thiết kế Thương hiệu & Họa sĩ Minh họa",
    timeline: "8 Tuần",
    coverImg: "assets/project-animal-care.svg",
    summary: "Hệ thống nhận diện thương hiệu và bao bì giàu cảm xúc dành cho phòng khám thú y kết hợp trạm cứu trợ tại Hà Nội. Thiết kế giúp xua tan cảm giác lo âu nơi phòng khám nhờ gam màu đất ấm áp và những nét vẽ minh họa động vật dung dị, gần gũi.",
    challenge: "Các phòng khám thú y truyền thống thường mang lại cảm giác lạnh lẽo, vô trùng và tạo áp lực tâm lý cho cả thú cưng lẫn người chăm sóc. Dự án đòi hỏi một ngôn ngữ hình ảnh vừa thể hiện sự chuẩn xác, chuyên môn y khoa hiện đại, vừa toát lên sự thấu cảm, dịu dàng và yêu thương.",
    solution: "Xây dựng hệ thống hình ảnh lấy cảm hứng từ biểu tượng mầm cây kết hợp dấu chân thú cưng hữu cơ, phối hợp cùng tông màu xanh xô thơm (sage green) và đất nung (terracotta). Bộ sản phẩm gồm biển hiệu chỉ dẫn, bao bì thảo dược thân thiện môi trường, sổ sức khỏe thú cưng và bộ quà tặng đón nhận thú cưng cứu trợ.",
    deliverables: [
      "Bộ Quy chuẩn Thương hiệu (Brand Guidelines) & Logo Suite",
      "Bộ Nhân vật Minh họa Độc bản vẽ tay",
      "Hệ thống Bao bì Bền vững cho Dược liệu & Đồ ăn Thú cưng",
      "Hệ thống Biển hiệu & Chỉ dẫn Không gian Phòng khám",
      "Sổ Sức khỏe Thú cưng & Bộ Quà tặng Nhận nuôi"
    ],
    tools: ["Adobe Illustrator", "Photoshop", "Procreate", "InDesign"],
    palette: [
      { hex: "#C85A32", name: "Đất nung ấm (Terracotta)" },
      { hex: "#6B7F5E", name: "Xanh xô thơm (Olive Sage)" },
      { hex: "#FAF6F0", name: "Kem ấm (Warm Cream)" },
      { hex: "#2C3529", name: "Xanh rừng đậm (Forest Charcoal)" }
    ],
    typography: "Fraunces Serif (Sang trọng, ấm áp) kết hợp cùng Plus Jakarta Sans (Gọn gàng, dễ đọc)",
    stats: [
      { label: "Bộ Sổ sức khỏe phát hành", value: "1,200+" },
      { label: "Tăng mức độ nhận biết thương hiệu", value: "+85%" },
      { label: "Lượt tiếp cận cộng đồng mạng xã hội", value: "45K+" }
    ],
    quote: "Linh đã biến phòng khám của chúng tôi từ một nơi đầy căng thẳng y tế thành một không gian ấm áp, thân tình mà mọi người nuôi thú cưng đều yêu thích ghé thăm."
  },
  {
    id: "cinema-mobile-app",
    title: "Ứng dụng Điện ảnh CinéLumière",
    subtitle: "Trải nghiệm Đặt vé & Khám phá Điện ảnh Nghệ thuật",
    category: "uiux",
    categoryLabel: "Thiết kế UI/UX & Web",
    tags: ["Ứng dụng Di động", "Nghiên cứu UI/UX", "Hệ thống Thiết kế", "Nguyên mẫu Tương tác"],
    year: "2024",
    client: "Câu lạc bộ Điện ảnh Độc lập CinéLumière (Việt Nam)",
    role: "Thiết kế Sản phẩm & Nghiên cứu Trải nghiệm Người dùng",
    timeline: "10 Tuần",
    coverImg: "assets/project-cinema-app.svg",
    summary: "Ứng dụng di động mang đậm chất điện ảnh dành riêng cho những khán giả yêu thích phim độc lập, kinh điển và tác phẩm dự liên hoan phim, giúp dễ dàng tìm kiếm suất chiếu đặc biệt, chọn chỗ ngồi theo góc nhìn âm thanh và lưu giữ vé kỷ niệm số.",
    challenge: "Các ứng dụng đặt vé rạp chiếu phổ thông thường có quy trình thanh toán rườm rà, giao diện chọn ghế chật chội, nhiều quảng cáo gây xao nhãng và thiếu hẳn không gian truyền tải chiều sâu văn hóa điện ảnh hay tiếng nói của đạo diễn.",
    solution: "Thiết kế giao diện biên tập điện ảnh với chế độ nền tối sang trọng, sơ đồ chọn ghế cong mô phỏng góc nhìn thực tế và hiệu ứng âm thanh vòm, quy trình đặt vé nhanh chỉ trong 3 bước và tính năng sưu tập vé xem phim kỹ thuật số có hình minh họa độc quyền.",
    deliverables: [
      "Nghiên cứu Người dùng & Hồ sơ Chân dung Khán giả",
      "Hệ thống Khung dây (Wireframe) & Nguyên mẫu Độ trung thực cao (Figma)",
      "Sơ đồ Ghế ngồi Tương tác hiển thị chất lượng tầm nhìn",
      "Hệ thống Design System Chế độ Tối (Đạt chuẩn Tiếp cận WCAG AAA)",
      "Mô-đun Bình luận & Bộ sưu tập Cuống vé Điện tử"
    ],
    tools: ["Figma", "FigJam", "ProtoPie", "Adobe After Effects"],
    palette: [
      { hex: "#121316", name: "Đêm huyền bí (Obsidian)" },
      { hex: "#DDA74F", name: "Ánh đèn sân khấu (Amber)" },
      { hex: "#C85A32", name: "Nhung đỏ rạp chiếu (Velvet)" },
      { hex: "#E8E6E1", name: "Màn bạc cổ điển (Silver)" }
    ],
    typography: "Clash Display / Fraunces (Tiêu đề nổi bật) & Inter Grotesque (Giao diện ứng dụng)",
    stats: [
      { label: "Giảm thời gian thao tác đặt vé", value: "-42%" },
      { label: "Tỷ lệ hoàn tất thanh toán", value: "94.8%" },
      { label: "Điểm đánh giá trải nghiệm người dùng", value: "4.9/5" }
    ],
    quote: "Giao diện biến việc mua vé xem phim thành một khúc dạo đầu nghệ thuật đầy háo hức trước giờ phim bấm máy."
  },
  {
    id: "wedding-website",
    title: "L’Amour Éternel: Minh & An",
    subtitle: "Trải nghiệm Số Thiệp Cưới & Hành trình Hạnh phúc",
    category: "uiux",
    categoryLabel: "Thiết kế UI/UX & Web",
    tags: ["Thiết kế Web", "Trải nghiệm Frontend", "Vi tương tác", "Kể chuyện Hình ảnh"],
    year: "2023",
    client: "Cặp đôi Minh & An (Hà Nội & Đà Lạt)",
    role: "Giám đốc Nghệ thuật & Thiết kế Giao diện",
    timeline: "4 Tuần",
    coverImg: "assets/project-wedding.svg",
    summary: "Website thiệp cưới độc bản, lịch trình sự kiện tương tác và sổ lưu bút đa phương tiện tái hiện câu chuyện tình yêu lãng mạn giữa làn sương Đà Lạt và nét cổ kính của phố phường Hà Nội.",
    challenge: "Cặp đôi mong muốn tránh xa các mẫu thiệp cưới đại trà trên mạng. Họ cần một không gian trực tuyến ấm cúng, tinh tế dành cho 250 khách mời tại Việt Nam, Pháp và Canada với khả năng xác nhận tham dự (RSVP) song ngữ, hướng dẫn di chuyển và chia sẻ khoảnh khắc kỷ niệm.",
    solution: "Sáng tạo giao diện biên tập thơ mộng kết hợp nét vẽ minh họa thực vật khắc gỗ, hiệu ứng cuộn mượt mà (parallax), âm nhạc tích hợp và hệ thống đăng ký tham dự trực tiếp giúp phân loại thực đơn cũng như sắp xếp chỗ ở thuận tiện.",
    deliverables: [
      "Thiết kế Giao diện Web Độc bản (Tương thích Di động & Máy tính)",
      "Kiến trúc Nội dung Song ngữ (Việt - Anh)",
      "Bản đồ & Lịch trình Sự kiện Đà Lạt Tương tác",
      "Hệ thống Xác nhận Tham dự (RSVP) Kết nối Cơ sở Dữ liệu Trực tiếp",
      "Sổ Lưu bút Lời chúc & Danh sách Nhạc Kỷ niệm"
    ],
    tools: ["Figma", "HTML5/CSS3", "JavaScript", "Adobe Illustrator"],
    palette: [
      { hex: "#F7F3EE", name: "Lụa ngà (Ivory Silk)" },
      { hex: "#8A5A44", name: "Gỗ óc chó (Warm Walnut)" },
      { hex: "#6B7F5E", name: "Cành ô liu (Olive Branch)" },
      { hex: "#D6B485", name: "Vàng Champagne (Gilded Gold)" }
    ],
    typography: "Italiana / Playfair Display kết hợp cùng Plus Jakarta Sans",
    stats: [
      { label: "Tỷ lệ phản hồi xác nhận tham dự", value: "98%" },
      { label: "Lời chúc ý nghĩa được gửi về", value: "190+" },
      { label: "Thời gian trung bình khách xem trang", value: "3p 40s" }
    ],
    quote: "Bạn bè và người thân hai bên ai cũng khen ngợi website vừa trang nhã, dễ sử dụng lại đong đầy cảm xúc chân thành."
  },
  {
    id: "hospital-brand-design",
    title: "Trung tâm Sức khỏe Sen Bạch Mai",
    subtitle: "Nhận diện Thương hiệu & Hệ thống Chỉ dẫn Y tế Nhân văn",
    category: "graphic",
    categoryLabel: "Thiết kế Đồ họa & Thương hiệu",
    tags: ["Nhận diện Thị giác", "Biển hiệu & Chỉ dẫn", "Tiếp cận Nhân văn", "Hệ thống Thiết kế"],
    year: "2023",
    client: "Trung tâm Trị liệu & Phục hồi Chức năng Hoa Sen (Hà Nội)",
    role: "Trưởng nhóm Thiết kế Nhận diện",
    timeline: "12 Tuần",
    coverImg: "assets/project-hospital.svg",
    summary: "Hệ thống nhận diện thương hiệu và biển bảng định vị không gian song ngữ hướng đến sự bình an, xoa dịu tâm lý và mang lại sự rõ ràng, dễ định hướng trong môi trường chăm sóc y tế hiện đại.",
    challenge: "Không gian bệnh viện tại các đô thị lớn thường gây cảm giác ngột ngạt, căng thẳng và rất khó định hướng đối với người cao tuổi, trẻ nhỏ hoặc bệnh nhân đang trong tâm trạng bối rối, mệt mỏi.",
    solution: "Lấy cảm hứng từ sức sống bền bỉ và sự thanh khiết của hoa sen, xây dựng hệ thống biển hiệu phân vùng theo mã màu trực quan, bộ biểu tượng hình học dễ hiểu cho mọi lứa tuổi, tranh tường thực vật chữa lành và sổ tay hướng dẫn chăm sóc người bệnh rõ ràng.",
    deliverables: [
      "Quy chuẩn Nhận diện Thương hiệu & Bộ Biểu tượng Y tế Song ngữ",
      "Cẩm nang Thiết kế Biển hiệu & Chỉ dẫn Phân luồng Bệnh viện",
      "Bộ Hồ sơ Bệnh án, Sổ Khám bệnh & Túi đựng Đơn thuốc",
      "Hệ thống Thẻ tên & Đồng phục Nhân viên Phân theo Chuyên khoa",
      "Giao diện Mẫu cho Kiosk Tra cứu Thông tin Tự động"
    ],
    tools: ["Adobe Illustrator", "InDesign", "Figma", "SketchUp"],
    palette: [
      { hex: "#38545A", name: "Xanh ngọc trị liệu (Healing Teal)" },
      { hex: "#7B9B88", name: "Sương bạch đàn (Eucalyptus)" },
      { hex: "#E89B7B", name: "Cánh sen ấm áp (Coral Lotus)" },
      { hex: "#FAF8F5", name: "Trắng ngà dịu mắt (Alabaster)" }
    ],
    typography: "Plus Jakarta Sans & Bricolage Grotesque (Tối ưu hóa khả năng đọc lướt)",
    stats: [
      { label: "Giảm thắc mắc hỏi đường tại sảnh", value: "-60%" },
      { label: "Đánh giá mức độ dễ định vị", value: "96%" },
      { label: "Đồng bộ hóa khoa phòng", value: "14 Khu" }
    ],
    quote: "Hệ thống chỉ dẫn và hình ảnh của Linh đã biến không gian bệnh viện phức tạp thành một môi trường chữa lành trật tự và an tâm."
  },
  {
    id: "art-classroom-showcase",
    title: "Atelier Linh: Đôi Mắt Sáng Tạo",
    subtitle: "Giáo dục Mỹ thuật, Hướng dẫn Học viên & Triển lãm",
    category: "teaching",
    categoryLabel: "Giáo dục & Tác phẩm Học viên",
    tags: ["Thiết kế Giáo án", "Workshop Nghệ thuật", "Triển lãm Học viên", "Phương pháp Sư phạm"],
    year: "2021 – Hiện tại",
    client: "Xưởng vẽ Atelier Linh & Không gian Sáng tạo Trẻ Hà Nội",
    role: "Người sáng lập, Giảng viên & Giám tuyển Triển lãm",
    timeline: "Hoạt động Thực hành Bền bỉ",
    coverImg: "assets/project-art-classroom.svg",
    summary: "Chương trình mỹ thuật thị giác và chuỗi workshop thực hành tại Hà Nội dành cho học viên thanh thiếu niên và người lớn mới bắt đầu, hướng dẫn vượt qua nỗi sợ vẽ sai để tự tin nhìn ngắm và biểu đạt thế giới qua ngôn ngữ hội họa.",
    challenge: "Cách dạy vẽ truyền thống thường quá chú trọng vào việc sao chép mẫu vật gò bó và chấm điểm kỹ thuật cứng nhắc, vô tình dập tắt niềm vui nguyên bản, trí tưởng tượng và sự tự tin sáng tạo của người học.",
    solution: "Xây dựng phương pháp sư phạm 4 giai đoạn ('Quan sát - Cảm thụ - Định hình - Biểu đạt') kết hợp nền tảng mỹ thuật hàn lâm (hình họa, sắc độ, hòa sắc, chất liệu) với việc khơi gợi câu chuyện cá nhân, kết thúc mỗi khóa học bằng một triển lãm cộng đồng ấm cúng.",
    deliverables: [
      "Bộ Giáo án Xưởng vẽ 16 Tuần & Sách Bài tập Minh họa",
      "Chuỗi Buổi Hướng dẫn Trực tiếp Màu Gouache, Màu nước & Than chì",
      "Chương trình Hướng dẫn Xây dựng Portfolio Mỹ thuật (100% Đỗ Đại học)",
      "Triển lãm Thường niên Tác phẩm Học viên 'Hà Nội trong Mắt Em'",
      "Workshop Trải nghiệm Vẽ thư giãn dành cho Người đi làm"
    ],
    tools: ["Màu nước (Watercolor)", "Màu Gouache", "Than chì & Phấn màu", "Figma (Thiết kế Giáo án)"],
    palette: [
      { hex: "#C85A32", name: "Đất nung ấm áp (Terracotta)" },
      { hex: "#DDA74F", name: "Bột khoáng vàng (Ochre)" },
      { hex: "#6B7F5E", name: "Xanh lá xưởng vẽ (Studio Olive)" },
      { hex: "#3B4A6B", name: "Màu chàm loang (Indigo Wash)" }
    ],
    typography: "Fraunces Serif & Nét chữ viết tay thân thương Caveat",
    stats: [
      { label: "Học viên được đồng hành", value: "350+" },
      { label: "Tỷ lệ đỗ ngành Mỹ thuật / Thiết kế", value: "100%" },
      { label: "Triển lãm & Trưng bày đã tổ chức", value: "8 Buổi" }
    ],
    quote: "Cô giáo Mai Linh không chỉ dạy em cách pha màu gouache, mà còn dạy em cách tin tưởng vào đôi mắt và trí tưởng tượng của chính mình."
  },
  {
    id: "hanoi-heritage-coffee",
    title: "Cà phê Di sản Sông Hồng",
    subtitle: "Nhận diện Xưởng rang Thủ công & Trải nghiệm Đặt hàng Trực tuyến",
    category: "graphic",
    categoryLabel: "Thiết kế Đồ họa & Thương hiệu",
    tags: ["Nhận diện Thương hiệu", "Bao bì Sản phẩm", "Giao diện Web Di động", "Thủ công In ấn"],
    year: "2024",
    client: "Xưởng rang Cà phê Sông Hồng (Hà Nội)",
    role: "Thiết kế Thương hiệu & Sản phẩm Số",
    timeline: "6 Tuần",
    coverImg: "assets/project-hanoi-coffee.svg",
    summary: "Giao thoa giữa nét văn hóa cà phê vỉa hè lâu đời của Hà Nội và kỹ nghệ rang xay đặc sản hiện đại thông qua bao bì giấy kraft xúc giác và ứng dụng web đặt hàng nhanh tiện lợi.",
    challenge: "Văn hóa cà phê Việt Nam vốn đậm đà bản sắc, nhưng thế hệ trẻ ngày nay vừa muốn thưởng thức cà phê hạt rang chất lượng cao có nguồn gốc minh bạch, vừa mong muốn trải nghiệm đặt món mang đi nhanh chóng mà không phải xếp hàng chờ đợi.",
    solution: "Sáng tạo bộ nhận diện mang âm hưởng gạch hoa cổ thời Pháp và chất liệu gốm sông Hồng mộc mạc, song hành cùng giao diện web đặt món tinh gọn hiển thị chi tiết hương vị và thời gian lấy đồ chuẩn xác.",
    deliverables: [
      "Bộ Logo Con dấu Di sản & Quy chuẩn Chữ Song ngữ",
      "Thiết kế Túi Cà phê Giấy Kraft với Thẻ Hương vị Thủ công",
      "Ứng dụng Web Đặt hàng Nhanh & Tích điểm Thân thiết",
      "Hệ thống Bảng Thực đơn Quầy pha chế & Cốc mang đi",
      "Bộ Ấn phẩm Truyền thông Mạng xã hội cho Hạt Đặc sản"
    ],
    tools: ["Adobe Illustrator", "Figma", "Photoshop", "CSS3"],
    palette: [
      { hex: "#874127", name: "Robusta rang mộc (Roasted Robusta)" },
      { hex: "#D9A454", name: "Sữa đặc béo ngậy (Condensed Cream)" },
      { hex: "#2E3B32", name: "Xanh lá cà phê (Leaf Green)" },
      { hex: "#F7F2E7", name: "Giấy da mộc (Parchment Tan)" }
    ],
    typography: "Chữ Serif Tiêu đề Cổ điển kết hợp Chữ Không chân Hiện đại",
    stats: [
      { label: "Lượng đơn đặt trước trực tuyến", value: "+140%" },
      { label: "Giải thưởng Thiết kế Bao bì", value: "Chung khảo DesignVN" },
      { label: "Doanh số bán lẻ gói hạt", value: "+65%" }
    ],
    quote: "Một sự kết hợp tuyệt vời giữa hoài niệm Hà Nội và sự thanh thoát của công nghệ số. Linh đã nắm bắt trọn vẹn tinh thần của xưởng rang."
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { PROJECTS_DATA };
}
