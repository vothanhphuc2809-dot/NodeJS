## WEBSITE CÁ NHÂN – NODE.JS VÀ EXPRESS
1. Giới thiệu
Bài thực hành xây dựng website cá nhân bằng Node.js và Express Framework. Website có menu điều hướng và 5 trang chức năng:
- Trang chủ: /
- Giới thiệu: /about
- Kỹ năng: /skills
- Sở thích: /hobbies
- Liên hệ: /contact
Website sử dụng HTML được tạo trong app.js, CSS trong thư mục public và có xử lý đường dẫn không tồn tại bằng mã trạng thái HTTP 404.
2. Cấu trúc thư mục
MyProfileExpress/
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
├── public/
      └── styles.css


## PHẦN I. CÀI ĐẶT, CHẠY VÀ KIỂM TRA WEBSITE TRÊN MÁY CÁ NHÂN (LOCALHOST)
1. Môi trường thực hiện:
- Node.js và npm.
- Visual Studio Code hoặc trình soạn thảo mã nguồn tương đương.
- Trình duyệt web (Chrome, Edge, Firefox).
- Express Framework.
  
2. Lệnh chạy chương trình:
Mở Terminal và nhập dòng lệnh:

<img width="494" height="61" alt="image" src="https://github.com/user-attachments/assets/41428d9e-8c94-4f31-b437-4a57a3466f54" />

Khi máy chủ khởi động thành công, Terminal hiển thị thông báo tương tự:

<img width="340" height="22" alt="image" src="https://github.com/user-attachments/assets/ad74e235-40c3-466f-b841-9b8c9a677ddf" />

Mở trình duyệt và truy cập:

http://localhost:3000

3. Mô tả các tập tin mã nguồn
- app.js: Khởi tạo Express, cấu hình thư mục tĩnh public, xây dựng giao diện HTML dùng chung, khai báo 5 route và xử lý lỗi 404. Cổng chạy được lấy từ process.env.PORT hoặc mặc định là 3000.
- public/styles.css: Định dạng giao diện website, gồm header, menu điều hướng, khung nội dung, footer, màu sắc, khoảng cách và hiển thị trên màn hình nhỏ.
- package.json: Lưu thông tin dự án và các thư viện sử dụng; có lệnh npm start để chạy ứng dụng.
- package-lock.json: Ghi nhận phiên bản các gói phụ thuộc đã cài đặt.
- .gitignore: Loại trừ node_modules và các tệp môi trường riêng khỏi Git.

4. Kiểm tra các route và kết quả trên localhost
STT	Chức năng	Địa chỉ kiểm tra	Kết quả mong đợi
1	Trang chủ	http://localhost:3000/	Hiển thị lời chào và menu điều hướng
2	Giới thiệu	http://localhost:3000/about	Hiển thị thông tin giới thiệu
3	Kỹ năng	http://localhost:3000/skills	Hiển thị danh sách kỹ năng
4	Sở thích	http://localhost:3000/hobbies	Hiển thị danh sách sở thích
5	Liên hệ	http://localhost:3000/contact	Hiển thị thông tin liên hệ
6	Đường dẫn không tồn tại	http://localhost:3000/abc	Hiển thị trang 404 và trả về HTTP 404

Các trang có cùng menu điều hướng. Chọn từng mục trên menu để chuyển giữa các trang.

5. Ảnh minh chứng các bước thực hiện trên máy cá nhân

Hình 1. Cấu trúc thư mục dự án

<img width="268" height="158" alt="image" src="https://github.com/user-attachments/assets/33d5389b-b136-49ff-8b89-84befc0fdd77" />

Hình 2. Cài đặt Express và các thư viện

<img width="362" height="105" alt="image" src="https://github.com/user-attachments/assets/0bb70165-9eb9-4640-9dfb-d640db6cc583" />

<img width="384" height="102" alt="image" src="https://github.com/user-attachments/assets/52817a5e-3d4e-486a-aa95-2fd9bda705c7" />


Hình 3. Máy chủ chạy trên localhost

<img width="598" height="39" alt="image" src="https://github.com/user-attachments/assets/cca476db-c411-4c29-8577-c69defa8a94f" />

Hình 4. Giao diện trang chủ

<img width="1581" height="818" alt="image" src="https://github.com/user-attachments/assets/2f2770f3-a4a2-4e6a-8874-fc8536878658" />

Hình 5. Trang giới thiệu

<img width="1579" height="819" alt="image" src="https://github.com/user-attachments/assets/a2022a68-5071-4b62-a7a4-09978eedab5c" />

Hình 6. Trang kỹ năng

<img width="1582" height="818" alt="image" src="https://github.com/user-attachments/assets/0a9d5411-ea57-4407-89a9-d66f21beb567" />

Hình 7. Trang sở thích

<img width="1579" height="856" alt="image" src="https://github.com/user-attachments/assets/8b6b3912-e9f4-45a5-8faf-5d5d73735a8b" />

Hình 8. Trang liên hệ

<img width="1582" height="820" alt="image" src="https://github.com/user-attachments/assets/8a335008-c522-4e79-b8c2-2fab63776923" />

Hình 9. Kiểm tra đường dẫn không tồn tại – HTTP 404

<img width="1592" height="814" alt="image" src="https://github.com/user-attachments/assets/263b38f2-d38e-4575-99f1-06d448b8b931" />

7. Kết quả phần I
Ứng dụng chạy trên máy cá nhân tại http://localhost:3000. Các route /, /about, /skills, /hobbies, /contact được xây dựng; giao diện có menu điều hướng và CSS; đường dẫn không tồn tại được xử lý bằng trang lỗi HTTP 404.

## PHẦN II. KHẢO SÁT HOSTING MIỄN PHÍ VÀ TRIỂN KHAI WEBSITE
### 1. Render
- Website: https://render.com/
- Hỗ trợ Node.js và Express.
- Có gói Web Service miễn phí.
- Kết nối GitHub để triển khai ứng dụng.
- Có đường dẫn website riêng.

### 2. Vercel
- Website: https://vercel.com/
- Có gói Hobby miễn phí.
- Hỗ trợ Node.js và Express.
- Triển khai ứng dụng Express dưới dạng Function.
- Hỗ trợ kết nối GitHub.

### 3. Koyeb
- Website: https://www.koyeb.com/
- Có Free Instance.
- Hỗ trợ Node.js và Express.
- Có thể triển khai từ GitHub.
- Có giới hạn tài nguyên ở gói miễn phí.

### 4. Lựa chọn hosting

Em lựa chọn Render để triển khai website vì Render hỗ trợ trực tiếp Node.js và Express, có gói miễn phí và dễ dàng kết nối với GitHub.

## 5. TRIỂN KHAI WEBSITE TRÊN RENDER

### Bước 1: Chuẩn bị dự án
Kiểm tra file app.js, package.json và cấu hình lệnh start.

### Bước 2: Đưa dự án lên GitHub
Sử dụng các lệnh git init, git add, git commit và git push để tải mã nguồn lên GitHub.

### Bước 3: Tạo Web Service
Đăng nhập Render bằng GitHub, chọn New Web Service và kết nối repository MyProfileExpress.

### Bước 4: Cấu hình
- Build Command: npm install
- Start Command: npm start
- Instance Type: Free

### Bước 5: Triển khai
Nhấn Create Web Service và theo dõi trạng thái triển khai trong mục Logs.

### Bước 6: Kết quả
Sau khi Render hiển thị trạng thái Live, truy cập website để kiểm tra các chức năng.

**Đường link website đã triển khai:**

DÁN URL RENDER THỰC TẾ CỦA BẠN VÀO ĐÂY.

### Hình ảnh minh chứng
- Hình 12: Khảo sát Render.
- Hình 13: Khảo sát Vercel.
- Hình 14: Khảo sát Koyeb.
- Hình 15: Cấu hình triển khai Render.
- Hình 16: Website triển khai thành công trên Render.
