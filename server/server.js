const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/db');
const app = express();
const khsoosiRouter = require('./router');

const port = process.env.PORT || 4000;
// UNCOMMENT FOR ANGULAR
app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.use('', khsoosiRouter);
app.listen(port, function() {
	console.log('listening on port !', port);
});
