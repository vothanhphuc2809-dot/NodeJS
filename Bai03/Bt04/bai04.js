const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function main() {
    try {
       
        await client.connect();
        console.log('Ket noi MongoDB thanh cong!');

        const db = client.db('qlsinhvien');
       const students = db.collection('students');
       await students.deleteMany({});
    
        const data = [
            {
                masv: 'SV001',
                hoten: 'VÕ THÀNH PHÚC',
                tuoi: 20,
                diem: 8.5
            },
            {
                masv: 'SV002',
                hoten: 'TNGUYỄN QUỐC HUY',
                tuoi: 21,
                diem: 9
            },
            {
                masv: 'SV003',
                hoten: 'HÀ VĂN SÂM',
                tuoi: 20,
                diem: 7.5
            }
        ];

        const result = await students.insertMany(data);

        console.log('Da them sinh vien thanh cong!');
        console.log('So sinh vien da them:', result.insertedCount);

      
        console.log('\nDANH SACH SINH VIEN:');

        const list = await students.find().toArray();

        console.log(list);

    } catch (error) {
        console.log('Loi:', error);
    } finally {
    
        await client.close();
        console.log('\nDa dong ket noi MongoDB!');
    }
}

main();
