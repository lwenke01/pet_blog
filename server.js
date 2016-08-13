
var express     = require('express');
var app         = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
//config

//config files

var db = require('./config/db');

//PORT

var port = process.env.PORT || 8080;

//connect to mongoDB database
mongoose.connect(db.url);

var router = express.Router();


//CORS
// app.use((req, res, next)=>{
//   res.header('Access-Control-Allow-Origin', 'https://woof-republic.herokuapp.com/api/blogs');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, token');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   next();
// });
//get all data
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

//routes
require('./app/routes')(app);
app.use('/api', router);

//start app
app.listen(port);

console.log('On port ' + port);

//expose app
exports = module.exports = app;
