# BÀI 05 – THAO TÁC VỚI MONGODB

## 1. Giới thiệu bài thực hành

Xây dựng chương trình Node.js sử dụng MongoDB để quản lý dữ liệu sinh viên trong database `qlsinhvien`, collection `students`.

Các chức năng:
- Tìm sinh viên có điểm lớn hơn hoặc bằng 7 bằng `find()` và `$gte`.
- Sắp xếp danh sách sinh viên theo điểm giảm dần bằng `sort()`.
- Cập nhật điểm sinh viên theo mã sinh viên bằng `updateOne()` và `$set`.
- Hiển thị thông tin sinh viên sau khi cập nhật bằng `findOne()`.

## 2. Cấu trúc thư mục

```text
NodeJS/
└── Bai03/
    └── Bt05/
        ├── bai05.js
        ├── Readme.md
      
```

## 3. Các bước thực hiện

### Bước 1. Tạo thư mục và tập tin

- Tạo thư mục `NodeJS`.
- Trong `NodeJS`, tạo thư mục `Bai03`.
- Trong `Bai03`, tạo thư mục `Bt05`.
- Trong `Bt05`, tạo tập tin `bai05.js` và `Readme.md`.

### Bước 2. Cài đặt thư viện MongoDB

Mở Terminal tại thư mục `Bt05`, chạy lệnh:

```bash
npm init -y
```

Cài đặt thư viện MongoDB:

```bash
npm install mongodb
```

### Bước 3. Kết nối MongoDB

Sử dụng MongoDB với địa chỉ:

```javascript
mongodb://127.0.0.1:27017
```

Database sử dụng: `qlsinhvien`.

Collection sử dụng: `students`.

### Bước 4. Viết chương trình

Tạo tập tin `bai05.js` và viết chương trình thực hiện các chức năng:

- Kết nối MongoDB.
- Tìm sinh viên có điểm >= 7.
- Sắp xếp điểm theo thứ tự giảm dần.
- Cập nhật điểm sinh viên có mã `SV001` thành `9.5`.
- Hiển thị thông tin sinh viên sau khi cập nhật.
- Đóng kết nối MongoDB.

### Bước 5. Chạy chương trình

Khởi động MongoDB, sau đó mở Terminal tại thư mục chứa tập tin `bai05.js`.

Sử dụng lệnh:

<img width="338" height="41" alt="image" src="https://github.com/user-attachments/assets/335eaa89-f9e5-4768-9708-41117c4bcb82" />


### Bước 6. Chụp ảnh kết quả

Chụp ảnh các bước thực hiện và lưu vào thư mục `images`.

Các ảnh minh chứng gồm:

- Ảnh 1: Kết nối MongoDB thành công.
- Ảnh 2: Danh sách sinh viên có điểm >= 7 và được sắp xếp giảm dần.
- Ảnh 3: Kết quả cập nhật điểm sinh viên.
- Ảnh 4: Thông tin sinh viên sau khi cập nhật.

## 4. Kết quả thực hiện

Chương trình thực hiện thành công các chức năng theo yêu cầu bài thực hành.

Kết quả:
- Kết nối MongoDB thành công.
- Tìm được sinh viên có điểm >= 7.
- Sắp xếp danh sách theo điểm giảm dần.
- Cập nhật điểm sinh viên `SV001` thành `9.5`.
- Số sinh viên tìm thấy: 1.
- Số sinh viên được cập nhật: 1.
- Hiển thị thông tin sinh viên sau khi cập nhật.

## 5. Hình ảnh minh chứng

### Ảnh 1. Kết nối MongoDB

<img width="224" height="31" alt="image" src="https://github.com/user-attachments/assets/4ac705b9-bdbd-4727-9a89-00e9e270cf33" />


### Ảnh 2. Tìm sinh viên có điểm >= 7

<img width="423" height="433" alt="image" src="https://github.com/user-attachments/assets/cb074e82-d3b8-462b-bac4-6b431c1ba8f9" />


### Ảnh 3. Cập nhật điểm sinh viên

<img width="289" height="102" alt="image" src="https://github.com/user-attachments/assets/dd871c6a-c9a8-47db-ae16-930db38962db" />


### Ảnh 4. Thông tin sau khi cập nhật

<img width="409" height="153" alt="image" src="https://github.com/user-attachments/assets/15b044b6-a3b1-4363-9458-fde48b6a2e57" />


## 6. Kết luận

Hoàn thành bài thực hành 05 bằng Node.js và MongoDB. Biết cách sử dụng `find()`, `$gte`, `sort()`, `updateOne()`, `$set` và `findOne()` để truy vấn, sắp xếp, cập nhật và hiển thị dữ liệu sinh viên.
