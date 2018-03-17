
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const app = express();

mongoose.connect(config.database);

mongoose.connection.on('connected', ()=>{
  console.log('connected to database '+ config.database);
});

mongoose.connection.on('error', (err)=>{
  console.log('error '+err);
});

const vehicles = require('./routes/vehicles');
const requests = require('./routes/request_routes');
const admin = require('./routes/admin_routes');

const port = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.json());

app.use('/vehicles',vehicles);
app.use('/requests',requests);
app.use('/admin',admin);

app.get('/', (req,res)=>{
  res.send("home page");
})
app.listen(port, ()=>{
  console.log('server start on port '+ port);
})
