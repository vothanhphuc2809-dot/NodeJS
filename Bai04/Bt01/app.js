const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Kiểm tra file đang chạy
console.log('Dang chay file:', __filename);

// Kiểm tra xem thư mục public nằm ở đâu so với app.js (ví dụ ./public hoặc ../public)
app.use(express.static(path.join(__dirname, 'public')));

// Hàm tạo giao diện chung cho tất cả các trang
function renderPage(title, content) {
    return `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title} - Website cá nhân</title>
        <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
        <header>
            <h1>WEBSITE CÁ NHÂN</h1>
            <p>Chào mừng bạn đến với trang web của tôi</p>
        </header>

        <nav>
            <a href="/">Trang chủ</a>
            <a href="/about">Giới thiệu</a>
            <a href="/skills">Kỹ năng</a>
            <a href="/hobbies">Sở thích</a>
            <a href="/contact">Liên hệ</a>
        </nav>

        <main>
            ${content}
        </main>

        <footer>
            <p>© 2026 - Website cá nhân | Node.js & Express</p>
        </footer>
    </body>
    </html>
    `;
}

// ROUTE 1: TRANG CHỦ
app.get('/', (req, res) => {
    res.send(renderPage('Trang chủ', `
        <section class="card">
            <h2>Xin chào!</h2>
            <h3>Chào mừng đến với website cá nhân của tôi</h3>
            <p>Đây là website giới thiệu thông tin cá nhân,
            kỹ năng, sở thích và thông tin liên hệ.</p>
            <p>Hãy chọn menu phía trên để tìm hiểu thêm.</p>
        </section>
    `));
});

// ROUTE 2: GIỚI THIỆU
app.get('/about', (req, res) => {
    res.send(renderPage('Giới thiệu', `
        <section class="card">
            <h2>GIỚI THIỆU BẢN THÂN</h2>
            <p><strong>Họ và tên:</strong> VÕ THÀNH PHÚC</p>
            <p><strong>Nghề nghiệp:</strong> Sinh viên</p>
            <p><strong>Trường:</strong> Cao đẳng kỹ thuật công nghệ nha trang</p>
            <p>Tôi yêu thích công nghệ và lập trình,
            luôn mong muốn học hỏi kiến thức mới.</p>
        </section>
    `));
});

// ROUTE 3: KỸ NĂNG
app.get('/skills', (req, res) => {
    res.send(renderPage('Kỹ năng', `
        <section class="card">
            <h2>CÁC KỸ NĂNG</h2>
            <ul>
                <li>HTML và CSS</li>
                <li>JavaScript</li>
                <li>Node.js và Express</li>
                <li>Cơ sở dữ liệu</li>
                <li>Làm việc nhóm</li>
            </ul>
        </section>
    `));
});

// ROUTE 4: SỞ THÍCH
app.get('/hobbies', (req, res) => {
    res.send(renderPage('Sở thích', `
        <section class="card">
            <h2>SỞ THÍCH CỦA TÔI</h2>
            <ul>
                <li>Nghe nhạc</li>
                <li>Xem phim</li>
                <li>Chơi thể thao</li>
                <li>Khám phá công nghệ</li>
                <li>Lập trình website</li>
            </ul>
        </section>
    `));
});

// ROUTE 5: LIÊN HỆ
app.get('/contact', (req, res) => {
    res.send(renderPage('Liên hệ', `
        <section class="card">
            <h2>THÔNG TIN LIÊN HỆ</h2>
            <p><strong>Họ tên:</strong> VÕ THÀNH PHÚC</p>
            <p><strong>Email:</strong> vothanhphuc2809@gmail.com</p>
            <p><strong>Điện thoại:</strong> 0706372521</p>
            <p><strong>Địa chỉ:</strong> Việt Nam</p>
        </section>
    `));
});

// XỬ LÝ ĐƯỜNG DẪN KHÔNG TỒN TẠI - HTTP 404
app.use((req, res) => {
    res.status(404).send(renderPage('Lỗi 404', `
        <section class="card not-found">
            <h2>404 - KHÔNG TÌM THẤY TRANG</h2>
            <p>Đường dẫn bạn truy cập không tồn tại!</p>
            <a class="home-button" href="/">Quay về trang chủ</a>
        </section>
    `));
});

// KHỞI ĐỘNG SERVER
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
