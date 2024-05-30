const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our Home Page');
        return;
    }
    if (req.url === '/about') {
        res.end('Here is our short History');
        return;
    }
    res.end(`<h1>Oops!!!</h1>
        <p>it seems the page you are looking for doesn't exitst!!</p>
        <a href='/'>Home Page</a>
    
    `)
    return;
})


server.listen(5000)