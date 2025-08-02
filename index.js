const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    fs.createReadStream(`${__dirname}/pages/index.html`).pipe(res);
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-type": "text/html" });
    fs.createReadStream(`${__dirname}/pages/about.html`).pipe(res);
  } else if (req.url === "/contact-me") {
    res.writeHead(200, { "Content-type": "text/html" });
    fs.createReadStream(`${__dirname}/pages/contact-me.html`).pipe(res);
  } else {
    res.writeHead(200, { "Content-type": "text/html" });
    fs.createReadStream(`${__dirname}/pages/404.html`).pipe(res);
  }
});

server.listen(8000, () => {
  console.log("server is listening");
});
