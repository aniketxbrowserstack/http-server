const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const contactController = require('../controllers/contactController');
const staticController = require('../controllers/staticController');

module.exports = (req, res) => {
  const { url } = req;

  if (url.startsWith('/images/')) {
    return staticController.serveImage(req, res);
  }

  switch (url) {
    case '/':
      return homeController.handleHome(req, res);

    case '/about':
      return aboutController.handleAbout(req, res);

    case '/contact':
      return contactController.handleContact(req, res);

    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 - Page not found');
  }
};
