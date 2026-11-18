const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function main() {
    try {
      
        await client.connect();
        console.log('Ket noi MongoDB thanh cong!');

        
        const db = client.db('qlsinhvien');
        const students = db.collection('students');

        
        console.log('\n===== SINH VIEN CO DIEM >= 7 =====');

        const list = await students
            .find({ diem: { $gte: 7 } })
            .sort({ diem: -1 })
            .toArray();

        if (list.length > 0) {
            console.log(list);
        } else {
            console.log('Khong co sinh vien nao co diem >= 7!');
        }

        
        console.log('\n===== CAP NHAT DIEM SINH VIEN =====');

        const update = await students.updateOne(
            { masv: 'SV001' },
            { $set: { diem: 8.5 } }
        );

        if (update.matchedCount > 0) {
            console.log('Tim thay sinh vien SV001');

            if (update.modifiedCount > 0) {
                console.log('Cap nhat diem thanh cong!');
            } else {
                console.log('Diem sinh vien khong thay doi.');
            }
        } else {
            console.log('Khong tim thay sinh vien SV001!');
        }

        console.log('So sinh vien tim thay:', update.matchedCount);
        console.log('So sinh vien duoc cap nhat:', update.modifiedCount);

        // 6. Hien thi thong tin sinh vien sau khi cap nhat
        console.log('\n===== THONG TIN SINH VIEN SAU KHI CAP NHAT =====');

        const student = await students.findOne({ masv: 'SV001' });

        if (student) {
            console.log(student);
        } else {
            console.log('Khong tim thay thong tin sinh vien!');
        }

    } catch (error) {
        console.log('Loi:', error.message);

    } finally {
       
        await client.close();
        console.log('\nDa dong ket noi MongoDB!');
    }
}


main();
