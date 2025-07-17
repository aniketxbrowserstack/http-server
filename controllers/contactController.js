const fs = require('fs');
const path = require('path');

exports.handleContact = (req, res) => {
  const filePath = path.join(__dirname, '..', 'public', 'contact.html');

  fs.readFile(filePath, (err, html) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error loading contact form');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    }
  });
};
