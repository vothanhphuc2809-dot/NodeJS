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
