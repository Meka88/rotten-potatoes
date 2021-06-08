// require libraries
const express = require('express');
const Handlebars = require('handlebars');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
const methodOverride = require('method-override');

// console.log("envs", process.env);

// middleware
var exphbs = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
// The following line must appear AFTER const app = express() and before your routes!
app.use(bodyParser.urlencoded({ extended: true }), methodOverride('_method'));
app.use(express.static('public'));

// set the templating engine -> handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main', 
handlebars: allowInsecurePrototypeAccess(Handlebars)}))

app.set('view engine', 'handlebars');
const  dbVariables = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@users-rsup3.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`
const DB_STR = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.mvlw2.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`
// connect our server with MongoDB client
mongoose.connect(DB_STR, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const reviews = require('./controllers/reviews')(app);
const comments = require('./controllers/comments')(app);

// define app route
app.listen(process.env.PORT || 3000, () =>{
    console.log(`App listening on port 3000!`); //${process.env.PORT}
})

module.exports = app;
