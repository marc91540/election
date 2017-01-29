var app = {};

app.drivers = {}
app.drivers.express = require('./drivers/express');
app.drivers.express.init();
app.drivers.mysql = require('./drivers/mysql');


app.models = {};
app.models.candidat = require('./models/candidat');
app.models.votant = require('./models/votant');
app.models.vote = require('./models/vote');

app.controllers = {};
app.controllers.routes = require('./controllers/routes')(app);









