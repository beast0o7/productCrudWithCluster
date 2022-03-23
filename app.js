const express = require('express');
const db = require('./models');
const routes = require('./routes/product');


const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/product', routes);

app.use((req, res) => {
  res.status(404).send('404: Page not found');
});



app.listen(5000, () => {
  console.log(`Example app listening on port 5000!`);
});