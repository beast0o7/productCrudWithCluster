const express = require('express');
const fs = require('fs');
const db = require('./models');
const routes = require('./routes/product');
// import { isAuthenticated } from './utils/isAuthenticated';


const app = express();

// const accessLogStream = fs.createWriteStream(
//   path.join(__dirname, '../access.log'),
//   { flags: 'a' }
// );

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/product', routes);

app.use((req, res) => {
  res.status(404).send('404: Page not found');
});

// db.sequelize.sync(function(err){});


app.listen(5000, () => {
  console.log(`Example app listening on port 5000!`);
});