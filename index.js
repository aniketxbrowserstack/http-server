const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (url.startsWith('/images/')) {
    const filePath = path.join(__dirname, 'public', url);
    const ext = path.extname(filePath).toLowerCase();

    const mimeTypes = {
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml',
    };

    const contentType = mimeTypes[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Image not found');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      }
    });
    return;
  }

  switch (url) {
    case '/':
      res.end('Welcome to my Node.js server!');
      break;

    case '/about':
      res.end('This is Aniket and this is the about section.');
      break;

    case '/contact':
      const filePath = path.join(__dirname, 'public', 'contact.html');
      fs.readFile(filePath, (err, content) => {
        if (err) {
          res.end('Error loading contact form');
        } else {
          res.end(content);
        }
      });
      break;

    default:
      res.end('404 - Page not found');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
