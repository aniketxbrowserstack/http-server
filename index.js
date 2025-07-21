const express = require('express');
const router = require('./routes/router');

const app = express();
const PORT = 3000;

app.use('/images', express.static('public/images'));

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
