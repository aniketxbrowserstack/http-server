const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const contactController = require('../controllers/contactController');

router.get('/', homeController.handleHome);
router.get('/about', aboutController.handleAbout);
router.get('/contact', contactController.handleContact);

router.use((req, res) => {
  res.status(404).send('404 - Page not found');
});

module.exports = router;
