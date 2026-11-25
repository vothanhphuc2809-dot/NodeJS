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
