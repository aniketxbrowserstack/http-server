const path = require('path');

exports.handleContact = (req, res) => {
  const filePath = path.join(__dirname, '..', 'public', 'contact.html');
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).send('Error loading contact form');
    }
  });
};
