
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const jwt = require('jsonwebtoken');
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
app.use('/admin',authAdmin,admin);

app.get('/', (req,res)=>{
  res.send("home page");
})
app.listen(port, ()=>{
  console.log('server start on port '+ port);
});

function authAdmin(req,res,next){
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    const token = jwt.verify(bearerToken,'uok-trp');

    console.log(token);

    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}
