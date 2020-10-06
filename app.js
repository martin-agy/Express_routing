const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

app.use(express.static('public'));
 
app.get('/product/:id', (req, res, next) => {
  var index = parseInt(req.params.id);
  if (index >= 0)
    res.send(`Aha, du vill ha produkt ${index}`);
  else
    next();
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '/public/404.html'));
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

