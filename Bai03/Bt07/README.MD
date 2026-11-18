# BÀI 07 – XÂY DỰNG WEB SERVER BẰNG NODE.JS

## 1. Giới thiệu bài tập

Xây dựng Web Server bằng Node.js sử dụng module `http` và đối tượng `URL`.

Chương trình chạy tại cổng 3001 và thực hiện các chức năng:

- Truy cập `/hello?name=Minh`: Hiển thị lời chào Xin chào Minh.
- Truy cập `/sum?a=10&b=20`: Tính tổng và hiển thị Tổng = 30.
- Kiểm tra tham số đầu vào.
- Trả về thông báo lỗi nếu thiếu tham số hoặc giá trị không hợp lệ.

## 2. Cấu trúc thư mục

```text
Bai07/
├── bai07.js
└── README.md
```

## 3. Các bước thực hiện

### Bước 1: Kiểm tra phiên bản Node.js

Mở Terminal và nhập lệnh:

```bash
node -v
```

### Bước 2: Khởi động Web Server

Chạy lệnh:

```bash
cd Bai07
node bai07.js
```

Kết quả Terminal:



### Bước 3: Kiểm tra chức năng Xin chào

Truy cập đường dẫn:

```text
http://localhost:3001/hello?name=Minh
```

Kết quả:

```text
Xin chao Minh
```

### Bước 4: Kiểm tra chức năng tính tổng

Truy cập đường dẫn:

```text
http://localhost:3001/sum?a=10&b=20
```

Kết quả:

```text
Tong = 30
```

### Bước 5: Kiểm tra thông báo lỗi

Các trường hợp kiểm tra:

| Đường dẫn | Kết quả |
|---|---|
| `/hello` | Lỗi thiếu tham số name |
| `/hello?name=` | Lỗi giá trị name không hợp lệ |
| `/sum?a=10` | Lỗi thiếu tham số b |
| `/sum?a=abc&b=20` | Lỗi giá trị không hợp lệ |

## 4. Hình ảnh thực hiện bài tập

### Ả
