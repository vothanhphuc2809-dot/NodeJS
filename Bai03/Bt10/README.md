# Bài 10 - Liên kết dữ liệu MongoDB bằng $lookup

## 1. Giới thiệu
Sử dụng Node.js và MongoDB để liên kết dữ liệu giữa collection sinh viên và collection khoa bằng aggregate() và $lookup.
## 2. Cấu trúc thư mục

<img width="304" height="55" alt="image" src="https://github.com/user-attachments/assets/c69926c8-46bd-4931-905b-ae670da81259" />

## 3. Công nghệ sử dụng
- Node.js
- MongoDB
- MongoDB Compass
- Visual Studio Code
- Thư viện mongodb

## 4. Database và Collection
- Database: qlsinhvien
- Collection 1: departments
- Collection 2: students_join

## 5. Các chức năng thực hiện
- Tạo collection departments gồm 3 khoa.
- Tạo collection students_join gồm 4 sinh viên.
- Mỗi sinh viên có masv, hoten, makhoa.
- Sử dụng aggregate() kết hợp $lookup để liên kết hai collection.
- Sử dụng $unwind và $project để xử lý và hiển thị dữ liệu.
- Hiển thị danh sách sinh viên kèm tên khoa tương ứng.

## 6. Cách chạy chương trình

Bước 1: Mở Terminal tại thư mục Bai10.

Bước 2: Cài đặt thư viện:

npm install mongodb

Bước 3: Chạy chương trình:

<img width="355" height="44" alt="image" src="https://github.com/user-attachments/assets/8927e210-5f69-4360-85d7-bf0fd0e3c6ab" />


Bước 4: Kiểm tra kết quả trên Terminal và MongoDB Compass.

## 6. Kết quả
- Kết nối MongoDB thành công.
- Thêm 3 khoa và 4 sinh viên thành công.
- Liên kết dữ liệu bằng aggregate() và $lookup.
- Hiển thị được mã sinh viên, họ tên, mã khoa và tên khoa.
- Kết quả có đầy đủ thông tin khoa tương ứng.

## 7. Hình ảnh minh họa
- Ảnh 1: Code tập tin bai10.js.

const { MongoClient } = require('mongodb');


const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function main() {
    try {
     
        await client.connect();
        console.log('Ket noi MongoDB thanh cong!');

     
        const db = client.db('qlsinhvien');

       
        const departments = db.collection('departments');
        const students = db.collection('students_join');

        
        await departments.deleteMany({});
        await students.deleteMany({});

      
        const khoa = [
            {
                makhoa: 'CNTT',
                tenkhoa: 'Cong nghe thong tin'
            },
            {
                makhoa: 'QTKD',
                tenkhoa: 'Quan tri kinh doanh'
            },
            {
                makhoa: 'KT',
                tenkhoa: 'Ke toan'
            }
        ];

        await departments.insertMany(khoa);
        console.log('Them danh sach khoa thanh cong!');

        
        const sinhvien = [
            {
                masv: 'SV001',
                hoten: 'VÕ THÀNH PHÚC',
                makhoa: 'CNTT'
            },
            {
                masv: 'SV002',
                hoten: 'HÀ VĂN SÂM',
                makhoa: 'QTKD'
            },
            {
                masv: 'SV003',
                hoten: 'NGUYỄN QUỐC HUY',
                makhoa: 'CNTT'
            },
            {
                masv: 'SV004',
                hoten: 'LÂM MINH KHANG',
                makhoa: 'KT'
            }
        ];

        await students.insertMany(sinhvien);
        console.log('Them danh sach sinh vien thanh cong!');

       
        const ketQua = await students.aggregate([
            {
                $lookup: {
                    from: 'departments',
                    localField: 'makhoa',
                    foreignField: 'makhoa',
                    as: 'thongtinkhoa'
                }
            },
            {
                $unwind: '$thongtinkhoa'
            },
            {
                $project: {
                    _id: 0,
                    masv: 1,
                    hoten: 1,
                    makhoa: 1,
                    tenkhoa: '$thongtinkhoa.tenkhoa'
                }
            }
        ]).toArray();

        
        console.log('\nDANH SACH SINH VIEN KEM TEN KHOA:');
        console.log('------------------------------------');

        console.log(ketQua);

        console.log('\nTong so sinh vien:', ketQua.length);

    } catch (error) {
        console.log('Loi:', error);
    } finally {
        await client.close();
        console.log('\nDa dong ket noi MongoDB!');
    }
}

main();

- Ảnh 2: Kết quả chạy chương trình trên Terminal.

  <img width="356" height="617" alt="image" src="https://github.com/user-attachments/assets/e91952d0-1b62-4c3a-8db0-60c3064db357" />

- Ảnh 3: Collection departments trong MongoDB Compass.

  <img width="720" height="408" alt="image" src="https://github.com/user-attachments/assets/65f1e590-5995-4f22-9540-9217dde265c6" />

- Ảnh 4: Collection students_join trong MongoDB Compass.

  <img width="760" height="464" alt="image" src="https://github.com/user-attachments/assets/dc4c74ef-cd16-4d05-b517-39d282f7ec86" />


