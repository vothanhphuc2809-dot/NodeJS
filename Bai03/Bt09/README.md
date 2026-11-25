
# Bài 09 - Thao tác xóa dữ liệu MongoDB

## 1. Giới thiệu
Sử dụng Node.js và MongoDB để thực hiện các thao tác thêm, xóa và hiển thị dữ liệu sinh viên.

## 2. cấu trúc thư mục

<img width="154" height="56" alt="image" src="https://github.com/user-attachments/assets/6cd84f38-7925-46ad-b261-67aeb67abdbd" />

## 3. Công nghệ sử dụng
- Node.js
- MongoDB
- MongoDB Compass
- Visual Studio Code
- Thư viện mongodb

## 4. Database và Collection
- Database: qlsinhvien
- Collection: students_test

## 5. Các chức năng thực hiện
- Kết nối database qlsinhvien.
- Tạo collection students_test.
- Thêm 6 sinh viên mẫu gồm masv, hoten, tuoi, diem.
- Sử dụng deleteOne() xóa sinh viên có mã SV002.
- Sử dụng deleteMany() xóa sinh viên có điểm dưới 5.
- Sử dụng find() hiển thị danh sách sinh viên còn lại.
- Hiển thị số bản ghi đã xóa sau mỗi thao tác.

## 6. Cách chạy chương trình

Bước 1: Mở Terminal tại thư mục Bt09.

Bước 2: Cài đặt thư viện:

npm install mongodb

Bước 3: Chạy chương trình:

<img width="313" height="39" alt="image" src="https://github.com/user-attachments/assets/651e2d71-fc27-4a19-b014-733047420726" />


Bước 4: Kiểm tra kết quả trên Terminal và MongoDB Compass.

## 7. Kết quả
- Thêm thành công 6 sinh viên.
- Xóa 1 sinh viên có mã SV002 bằng deleteOne().
- Xóa 2 sinh viên có điểm dưới 5 bằng deleteMany().
- Còn lại 3 sinh viên.
- Kết nối MongoDB và thực hiện chương trình thành công.

## 8. Hình ảnh minh họa
- Ảnh 1: Code tập tin bai09.js.
  
  const { MongoClient } = require('mongodb');

// Thong tin ket noi MongoDB
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function main() {
    try {
       
        await client.connect();
        console.log('Ket noi MongoDB thanh cong!');

        // 2. Ket noi database va collection
        const db = client.db('qlsinhvien');
        const collection = db.collection('students_test');

        
        await collection.deleteMany({});

       
        const students = [
            {
                masv: 'SV001',
                hoten: 'VÕ THÀNH PHÚC',
                tuoi: 20,
                diem: 8
            },
            {
                masv: 'SV002',
                hoten: 'HÀ VĂN SÂM',
                tuoi: 21,
                diem: 9
            },
            {
                masv: 'SV003',
                hoten: 'LÂM MINH KHANG',
                tuoi: 22,
                diem: 4
            },
            {
                masv: 'SV004',
                hoten: 'NGUYỄN QUỐC HUY',
                tuoi: 20,
                diem: 3
            },
            {
                masv: 'SV005',
                hoten: 'PHẠM HOÀNG HẢI',
                tuoi: 23,
                diem: 7
            },
            {
                masv: 'SV006',
                hoten: 'TRẦN QUỐC HUY',
                tuoi: 21,
                diem: 5
            }
        ];

        const insertResult = await collection.insertMany(students);

        console.log('\n1. THEM SINH VIEN THANH CONG!');
        console.log('So sinh vien da them:', insertResult.insertedCount);

       
        const deleteOneResult = await collection.deleteOne({
            masv: 'SV002'
        });

        console.log('\n2. XOA MOT SINH VIEN BANG deleteOne()');
        console.log('Ma sinh vien can xoa: SV002');
        console.log('So ban ghi da xoa:', deleteOneResult.deletedCount);

        
        const deleteManyResult = await collection.deleteMany({
            diem: { $lt: 5 }
        });

        console.log('\n3. XOA SINH VIEN CO DIEM DUOI 5 BANG deleteMany()');
        console.log('So ban ghi da xoa:', deleteManyResult.deletedCount);

  
        const remainingStudents = await collection.find({}).toArray();

        console.log('\n4. DANH SACH SINH VIEN CON LAI:');
        console.log(remainingStudents);

        console.log('\nTong so sinh vien con lai:', remainingStudents.length);

    } catch (error) {
        console.log('Loi:', error);
    } finally {
       
        await client.close();
        console.log('\nDa dong ket noi MongoDB!');
    }
}

main();

- Ảnh 2: Kết quả chạy chương trình trên Terminal.

<img width="471" height="654" alt="image" src="https://github.com/user-attachments/assets/913ea01c-cd37-4b8d-a945-b52165f067a4" />

- Ảnh 3: Dữ liệu còn lại trong MongoDB Compass.
  
  <img width="595" height="451" alt="image" src="https://github.com/user-attachments/assets/dc04c4ce-7665-4efd-a53c-255b6077b679" />


