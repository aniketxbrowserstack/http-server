exports.handleAbout = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is Aniket and this is the about section.');
  };
  