const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./app/controllers/authController')(app);
require('./app/controllers/projectsController')(app);

app.listen(3000);