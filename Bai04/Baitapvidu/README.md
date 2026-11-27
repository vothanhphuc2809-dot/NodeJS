# BÀI THỰC HÀNH: XÂY DỰNG ỨNG DỤNG MÁY TÍNH BẰNG EXPRESS FRAMEWORK

## 1. Giới thiệu
Xây dựng ứng dụng máy tính đơn giản sử dụng Node.js và Express Framework.

Ứng dụng sử dụng Express để xử lý các yêu cầu HTTP, Pug làm template engine và Controller để quản lý chức năng tính toán.

## 2. Công nghệ sử dụng
- Node.js
- Express Framework
- Body-parser
- Pug Template Engine
- JavaScript
- Visual Studio Code

## 3. Cấu trúc thư mục

```text
my-express-app/
│
├── app.js
├── package.json
├── controllers/
│   └── calculatorController.js
├── views/
│   └── index.pug
├── public/
└── node_modules/
```

## 4. Các bước thực hiện

### Bước 1: Tạo thư mục dự án

Mở Terminal và thực hiện các lệnh:

```powershell
cd C:\CD-CNTT18A22TP\MyNodeJS
cd EXPRESS
mkdir my-express-app
cd my-express-app
```

### Bước 2: Khởi tạo dự án Node.js

```powershell
npm init -y
```

### Bước 3: Cài đặt thư viện

```powershell
npm install express body-parser pug
```

### Bước 4: Tạo các thư mục và tập tin

Tạo các thư mục:
- controllers
- models
- views
- public

Tạo các tập tin:
- app.js
- controllers/calculatorController.js
- models/calculatorModel.js
- views/calculator.pug
- public/styles.css

### Bước 5: Viết chương trình

- File `app.js`: Khởi tạo Express, cấu hình middleware, Pug và đăng ký router.
- File `calculatorController.js`: Xử lý các yêu cầu liên quan đến chức năng máy tính, nhận dữ liệu từ giao diện và trả kết quả.
- File `calculatorModel.js`: Xây dựng các hàm xử lý phép tính như cộng, trừ, nhân và chia.
- File `calculator.pug`: Thiết kế giao diện trang máy tính, hiển thị các ô nhập dữ liệu và nút thực hiện phép tính.
- File `styles.css`: Định dạng giao diện bằng CSS, thiết lập màu sắc, kích thước, bố cục và kiểu dáng các thành phần trên trang web.

### Bước 6: Chạy chương trình

Mở Terminal tại thư mục `my-express-app` và chạy lệnh:

<img width="480" height="56" alt="image" src="https://github.com/user-attachments/assets/61c29019-ebac-4707-8876-58ce35c81f2b" />


Khi chạy thành công, Terminal hiển thị:

<img width="237" height="22" alt="image" src="https://github.com/user-attachments/assets/5509c2e5-4cdb-4629-a43a-68bed1fe7819" />


### Bước 7: Truy cập ứng dụng

Mở trình duyệt và nhập địa chỉ:

- Trang chủ: http://localhost:3000
- Chức năng máy tính: http://localhost:3000/calculator

## 5. Kết quả đạt được

- Khởi chạy thành công máy chủ Express trên cổng 3000.
- Tạo và cấu hình ứng dụng Express.
- Sử dụng middleware body-parser để xử lý dữ liệu biểu mẫu.
- Sử dụng Pug để xây dựng giao diện.
- Sử dụng Controller để xử lý các chức năng máy tính.
- Truy cập ứng dụng thông qua trình duyệt.

## 6. Hình ảnh minh họa

### Hình 1: Cấu trúc thư mục dự án

<img width="292" height="254" alt="image" src="https://github.com/user-attachments/assets/41e9d441-b0f9-4722-947d-331881f8e456" />


### Hình 2: Chạy chương trình trong Terminal
Chèn ảnh Terminal hiển thị:

<img width="231" height="20" alt="image" src="https://github.com/user-attachments/assets/b789a10f-7630-4b61-9cf6-c029bdbeaef3" />


### Hình 3: Giao diện ứng dụng trên trình duyệt

<img width="335" height="225" alt="image" src="https://github.com/user-attachments/assets/a93e7ef9-6f8c-486c-a819-509c7608a7d3" />


### Hình 4: Kết quả thực hiện phép tính

<img width="317" height="223" alt="image" src="https://github.com/user-attachments/assets/41f254de-ff66-48de-a27a-752ba1ee4542" />


## 7. Kết luận

Qua bài thực hành, em đã biết cách xây dựng ứng dụng web cơ bản bằng Express Framework, biết cách tổ chức thư mục theo mô hình Controller, cấu hình middleware, sử dụng Pug Template Engine và chạy ứng dụng trên máy chủ Node.js.
