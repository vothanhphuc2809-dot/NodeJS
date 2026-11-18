# BAI04 - Kết nối MongoDB bằng NodeJS

## 1. Giới thiệu bài thực hành

Xây dựng chương trình NodeJS kết nối với MongoDB để quản lý danh sách sinh viên.

Chương trình thực hiện các chức năng:
- Kết nối MongoDB đang chạy trên máy.
- Sử dụng database `qlsinhvien`.
- Sử dụng collection `students`.
- Thêm ít nhất 3 sinh viên bằng `insertMany()`.
- Mỗi sinh viên gồm các thông tin: `masv`, `hoten`, `tuoi`, `diem`.
- Sử dụng `find()` để hiển thị danh sách sinh viên.
- Đóng kết nối MongoDB sau khi thực hiện xong.

## 2. Cấu trúc thư mục

```text
Bt04/
│
├── bai04.js
├── package.json
├── package-lock.json
├── node_modules/
```

## 3. Các bước thực hiện

### Bước 1: Khởi tạo dự án NodeJS

Mở Terminal tại thư mục Bt04 và thực hiện lệnh:

```bash
npm init -y
```

### Bước 2: Cài đặt thư viện MongoDB

```bash
npm install mongodb
```

### Bước 3: Tạo file bai04.js

Tạo tập tin `bai04.js` để viết chương trình kết nối MongoDB.

### Bước 4: Kết nối MongoDB

Sử dụng địa chỉ:

```text
mongodb://127.0.0.1:27017
```

Chọn database:

```text
qlsinhvien
```

Chọn collection:

```text
students
```

### Bước 5: Thêm dữ liệu sinh viên

Sử dụng phương thức `insertMany()` để thêm 3 sinh viên vào collection `students`.

Thông tin sinh viên gồm:
- SV001 - VÕ THÀNH PHÚC - 20 tuổi - Điểm 8.5.
- SV002 - NGUYỄN QUỐC HUY - 21 tuổi - Điểm 9.
- SV003 - HÀ VĂN SÂM - 20 tuổi - Điểm 7.5.

### Bước 6: Hiển thị danh sách sinh viên

Sử dụng lệnh:

```javascript
const list = await students.find().toArray();
console.log(list);
```

### Bước 7: Đóng kết nối MongoDB

Sử dụng lệnh:

```javascript
await client.close();
```

## 4. Lệnh chạy chương trình

Mở Terminal tại thư mục Bt04 và chạy:

<img width="307" height="41" alt="image" src="https://github.com/user-attachments/assets/851190b8-bc86-454b-a14c-77199db15932" />

## 5. Hình ảnh minh họa

### Ảnh 1: Kết quả chạy chương trình trên VS Code

<img width="409" height="490" alt="image" src="https://github.com/user-attachments/assets/66239bb0-d6c0-4707-8007-f4696466cf15" />


### Ảnh 2: Database qlsinhvien trên MongoDB Compass

<img width="317" height="383" alt="image" src="https://github.com/user-attachments/assets/1f96ddb4-5766-418d-9a54-41a9e25884b8" />


### Ảnh 3: Danh sách 3 sinh viên trong collection students

<img width="525" height="410" alt="image" src="https://github.com/user-attachments/assets/1d3dfdab-9c59-4a1a-b972-2f660421c5ef" />


## 6. Kết quả đạt được

Sau khi chạy chương trình:
- Kết nối MongoDB thành công.
- Thêm thành công 3 sinh viên bằng `insertMany()`.
- Hiển thị danh sách sinh viên bằng `find()`.
- Dữ liệu được lưu trong database `qlsinhvien`, collection `students`.
- Đóng kết nối MongoDB thành công.

## 7. Kết luận

Đã hoàn thành bài thực hành BAI04 về kết nối MongoDB bằng NodeJS, thực hiện thêm dữ liệu sinh viên, truy vấn danh sách sinh viên và đóng kết nối theo yêu cầu đề bài.

