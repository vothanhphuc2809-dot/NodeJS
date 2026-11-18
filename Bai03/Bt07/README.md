# BÀI 07 – XÂY DỰNG WEB SERVER BẰNG NODE.JS

## 1. Giới thiệu bài tập

Xây dựng Web Server bằng Node.js sử dụng module `http` và đối tượng `URL`.

Chương trình chạy tại cổng 3001 và thực hiện các chức năng:

- Truy cập `/hello?name=Minh`: Hiển thị lời chào Xin chào Minh.
- Truy cập `/sum?a=10&b=20`: Tính tổng và hiển thị Tổng = 30.
- Kiểm tra tham số đầu vào.
- Trả về thông báo lỗi nếu thiếu tham số hoặc giá trị không hợp lệ.

## 2. Cấu trúc thư mục

```text
Bai07/
├── bai07.js
└── README.md
```

## 3. Các bước thực hiện

### Bước 1: Kiểm tra phiên bản Node.js

Mở Terminal và nhập lệnh:

```bash
node -v
```

### Bước 2: Khởi động Web Server

Chạy lệnh:

<img width="317" height="40" alt="image" src="https://github.com/user-attachments/assets/46573b89-55c0-4de6-aa1b-79eda3222658" />


Kết quả Terminal:

<img width="340" height="21" alt="image" src="https://github.com/user-attachments/assets/a0131cbf-d799-4bf1-8a16-869d251be6ab" />


### Bước 3: Kiểm tra chức năng Xin chào

Truy cập đường dẫn:

```text
http://localhost:3001/hello?name=Minh
```

Kết quả:

<img width="334" height="104" alt="image" src="https://github.com/user-attachments/assets/b6bf30cc-d626-47ce-bc94-588d8d775ec2" />


### Bước 4: Kiểm tra chức năng tính tổng

Truy cập đường dẫn:

```text
http://localhost:3001/sum?a=10&b=20
```

Kết quả:

<img width="334" height="99" alt="image" src="https://github.com/user-attachments/assets/2a4f881d-e3ae-4c53-b94f-a9fad52d1afb" />

### Bước 5: Kiểm tra thông báo lỗi

Các trường hợp kiểm tra:

| Đường dẫn | Kết quả |
|---|---|
| `/hello` | Lỗi thiếu tham số name |

<img width="277" height="86" alt="image" src="https://github.com/user-attachments/assets/b6f67195-6e33-4b88-8d70-e24b4f33c154" />

| `/hello?name=` | Lỗi giá trị name không hợp lệ |

<img width="304" height="78" alt="image" src="https://github.com/user-attachments/assets/a61b20e0-f63a-495a-8fd2-b3cd0635862d" />

| `/sum?a=10` | Lỗi thiếu tham số b |

<img width="309" height="98" alt="image" src="https://github.com/user-attachments/assets/5e8226f9-9d66-453e-9ba9-eb5db21b7818" />

| `/sum?a=abc&b=20` | Lỗi giá trị không hợp lệ |

<img width="469" height="118" alt="image" src="https://github.com/user-attachments/assets/592fd8d6-0323-4421-9681-50e467d2a801" />


## 4. Hình ảnh thực hiện bài tập

### Ảnh 1: Cấu trúc thư mục và tập tin

<img width="158" height="51" alt="image" src="https://github.com/user-attachments/assets/a438a7d4-bdfb-4c93-a87a-6428a15ac93a" />


### Ảnh 2: Code chương trình bai07.js

const http = require('http');

const server = http.createServer((req, res) => {

    
    const url = new URL(req.url, `http://${req.headers.host}`);

    const pathname = url.pathname;

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    if (pathname === '/hello') {
        const name = url.searchParams.get('name');

        if (!name || name.trim() === '') {
            res.statusCode = 400;
            res.end('Loi: Thieu tham so name hoac gia tri khong hop le!');
            return;
        }

        res.statusCode = 200;
        res.end(`Xin chao ${name.trim()}`);
    }

    else if (pathname === '/sum') {
        const a = url.searchParams.get('a');
        const b = url.searchParams.get('b');

        if (
            a === null || b === null ||
            a.trim() === '' || b.trim() === '' ||
            !Number.isFinite(Number(a)) ||
            !Number.isFinite(Number(b))
        ) {
            res.statusCode = 400;
            res.end('Loi: Thieu tham so a, b hoac gia tri khong hop le!');
            return;
        }

        const tong = Number(a) + Number(b);

        res.statusCode = 200;
        res.end(`Tong = ${tong}`);
    }

    else {
        res.statusCode = 404;
        res.end('Loi: Duong dan khong ton tai!');
    }

});

server.listen(3001, () => {
    console.log('Web Server dang chay tai http://localhost:3001');
});


### Ảnh 3: Kết quả chạy Web Server trên Terminal

<img width="335" height="17" alt="image" src="https://github.com/user-attachments/assets/18a81a9d-411d-4e19-b15a-13da94ba7305" />


### Ảnh 4: Kết quả chức năng Xin chào

<img width="328" height="91" alt="image" src="https://github.com/user-attachments/assets/2f95c758-b70c-4b50-b1e2-eae722ec727b" />


### Ảnh 5: Kết quả chức năng tính tổng

<img width="339" height="111" alt="image" src="https://github.com/user-attachments/assets/e7eb3722-5f51-4e3d-aa70-2e0b901cefa5" />


### Ảnh 6: Kết quả kiểm tra thông báo lỗi

<img width="469" height="118" alt="image" src="https://github.com/user-attachments/assets/592fd8d6-0323-4421-9681-50e467d2a801" />

## 5. Kết quả đạt được

- Tạo Web Server bằng module `http`.
- Sử dụng đối tượng `URL` để xử lý đường dẫn và tham số.
- Khởi động Server tại cổng 3001.
- Hiển thị lời chào theo tên người dùng.
- Tính tổng hai số được truyền qua URL.
- Kiểm tra và thông báo lỗi khi tham số thiếu hoặc không hợp lệ.

## 6. Kết luận

Hoàn thành bài thực hành xây dựng Web Server bằng Node.js, biết cách sử dụng module `http`, đối tượng `URL`, xử lý tham số truy vấn và trả về kết quả cho trình duyệt.
