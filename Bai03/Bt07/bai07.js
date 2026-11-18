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
