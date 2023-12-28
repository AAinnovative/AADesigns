const http = require('http');
const fs = require('fs');

const port = process.env.port || 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url);
    if (req.url == '/') {
        res.statusCode = 200;
        const data = fs.readFileSync('page2.html');
        res.end(data.toString());
    } else if (req.url == '/home') {
        res.statusCode = 200;
        const data = fs.readFileSync('home.html');
        res.end(data.toString());
    } else if (req.url == '/designs') {
        res.statusCode = 200;
        const data = fs.readFileSync('designs.html');
        res.end(data.toString());
    } else if (req.url == '/info') {
        res.statusCode = 200;
        const data = fs.readFileSync('info.html');
        res.end(data.toString());
    } else if (req.url == '/nemo') {
        res.statusCode = 200;
        const data = fs.readFileSync('nemo.html');
        res.end(data.toString());
    } else if (req.url == '/morph') {
        res.statusCode = 200;
        const data = fs.readFileSync('morph.html');
        res.end(data.toString());
    } else if (req.url == '/chart') {
        res.statusCode = 200;
        const data = fs.readFileSync('chart.html');
        res.end(data.toString());
    } else {
        res.statusCode = 404;
        res.end('<h1>Sorry not found</h1>');
    }
})