const fs = require('fs');
const path = require('path');


const dataDir = path.join(__dirname, 'data');


if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
    console.log('1. Tao thu muc data thanh cong!');
} else {
    console.log('1. Thu muc data da ton tai!');
}


const fileCu = path.join(dataDir, 'ghichu.txt');
const fileMoi = path.join(dataDir, 'ghichu_moi.txt');
const fileTam = path.join(dataDir, 'tam.txt');


const noiDung = `Dong 1: Xin chao Node.js!
Dong 2: Dang hoc module fs.
Dong 3: Thuc hanh doc va ghi tap tin.`;

fs.writeFileSync(fileCu, noiDung, 'utf8');
console.log('2. Ghi tap tin ghichu.txt thanh cong!');


fs.renameSync(fileCu, fileMoi);
console.log('3. Doi ten thanh ghichu_moi.txt thanh cong!');


const ketQua = fs.readFileSync(fileMoi, 'utf8');
console.log('\n4. Noi dung tap tin ghichu_moi.txt:');
console.log(ketQua);


fs.writeFileSync(fileTam, 'Day la tap tin tam.', 'utf8');
console.log('\n5. Tao tap tin tam.txt thanh cong!');


fs.unlinkSync(fileTam);
console.log('6. Xoa tap tin tam.txt thanh cong!');
