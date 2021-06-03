// require libraries
const express = require('express');
const Handlebars = require('handlebars');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const app = express();
const methodOverride = require('method-override')

// middleware
var exphbs = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
// The following line must appear AFTER const app = express() and before your routes!
app.use(bodyParser.urlencoded({ extended: true }), 
methodOverride('_method'));


// set the templating engine -> handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main', 
handlebars: allowInsecurePrototypeAccess(Handlebars)}))

app.set('view engine', 'handlebars');

// connect our server with MongoDB client
mongoose.connect('mongodb+srv://meka_1904:987654321@cluster0.mvlw2.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const reviews = require('./controllers/reviews')(app);





// define app route
app.listen(3000, () =>{
    console.log(`App listening on port 3000!`);
})


