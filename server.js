
// const inquirer = require("inquirer");
const express = require('express')
const mysql = require('mysql');
const exphbs = require('express-handlebars');
const app = express();
const routes = require('./controllers/burgers_controller');


const PORT = process.env.PORT || 3306;



app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.use(express.static('public'))
app.use(routes);



app.listen(PORT, () =>
console.log(`Server listening on: http://localhost:${PORT}`)
);
