
// const inquirer = require("inquirer");
const express = require('express')
const mysql = require('mysql');
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 3000;


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');





const routes = require('./controllers/burgers_controller');

app.use(routes);






app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);