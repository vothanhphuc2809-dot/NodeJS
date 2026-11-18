# BÀI 06 – TÍNH ĐIỂM TRUNG BÌNH VÀ XẾP LOẠI HỌC TẬP

## 1. Giới thiệu

Xây dựng chương trình Node.js tính điểm trung bình 3 môn Toán, Văn, Anh và xếp loại học tập cho sinh viên.

## 2. Các lệnh thực hiện

```bash
cd bai06
node bai06.js
```

## 3. Hình ảnh thực hiện

<img width="310" height="40" alt="image" src="https://github.com/user-attachments/assets/201fc54d-ca6d-4fee-8cf1-57f9c459fe83" />


### Bước 1: Cấu trúc thư mục và tập tin

<img width="170" height="70" alt="image" src="https://github.com/user-attachments/assets/867dfb1d-fe9b-455c-8d33-ea4e35a6cfeb" />


### Bước 2: Code chương trình

**bai06.js**

const { tinhDiemTrungBinh, xepLoai } = require('./xulyDiem');

const sinhVien = [
    {
        hoTen: "VÕ THÀNH PHÚC",
        toan: 9,
        van: 8,
        anh: 9
    },
    {
        hoTen: "NGUYỄN QUỐC HUY",
        toan: 7,
        van: 6,
        anh: 7
    },
    {
        hoTen: "HÀ VĂN SÂM",
        toan: 4,
        van: 5,
        anh: 3
    }
];

console.log("===== KET QUA HOC TAP =====");

sinhVien.forEach((sv, index) => {
    const diemTB = tinhDiemTrungBinh(
        sv.toan,
        sv.van,
        sv.anh
    );

    const hocLuc = xepLoai(diemTB);

    console.log("\nSinh vien " + (index + 1));
    console.log("Ho ten: " + sv.hoTen);
    console.log("Diem Toan: " + sv.toan);
    console.log("Diem Van: " + sv.van);
    console.log("Diem Anh: " + sv.anh);
    console.log("Diem trung binh: " + diemTB.toFixed(2));
    console.log("Xep loai: " + hocLuc);
});

**xulyDiem.js**

<img width="510" height="461" alt="image" src="https://github.com/user-attachments/assets/5a926970-3bd7-4cee-846c-d1282d76d675" />


### Bước 3: Kết quả chạy chương trình

<img width="288" height="454" alt="image" src="https://github.com/user-attachments/assets/338c3b0e-6fda-4f10-97ca-cb7cedae4a19" />


## 4. Kết quả

Chương trình hiển thị thông tin 3 sinh viên, điểm trung bình và xếp loại học tập:

- VÕ THÀNH PHÚC: Giỏi.
- NGUYỄN QUỐC HUY: Khá.
- HÀ VĂN SÂM: Yếu.

## 5. Kết luận

Hoàn thành bài thực hành tính điểm trung bình và xếp loại học tập bằng Node.js. Sử dụng `require()` để gọi hàm và `module.exports` để xuất hàm.
