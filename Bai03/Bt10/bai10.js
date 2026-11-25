
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
