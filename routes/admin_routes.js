const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const Driver = require('../model/driver');
router.post('/driver',(req,res,next)=>{
  let newDriver = new Driver(req.body);
  Driver.addDriver(newDriver , (err,callback) => {
    if(err){
      res.json({
        success: false,
        msg: 'error occured'
      });
    }else{
      res.json({
        success: true,
        msg: 'Driver added successfully'
      });
    }
  });
});

router.get('/driver',(req,res,next)=>{
  Driver.getDrivers((err,callback)=>{
    if(err){
      res.json({
        success: false,
        msg: 'error occured'
      });
    }else{
      res.json({
        success: true,
        msg: callback
      });
    }
  });
});

module.exports = router;
