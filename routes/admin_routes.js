const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const Driver = require('../model/driver');
const Vehicle = require('../model/vehicles');
const Request = require('../model/requests')
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

router.get('/vehicle/admin_to_request',(req,res,next)=>{
  Vehicle.get_admin_to_reqeust((err,callback)=>{
    if(err){
      res.json({
        success: false, msg:'error occured'
      });
    }else{
      res.json({
        success: true, msg: callback
      });
    }
  })
});

router.get('/vehicle/set_vehicle',(req, res, next) => {
  Request.set_vehicle(req.query.refNo, req.query.vehicle_no, (err, callback)=> {
    if(err){
      res.json({
        success: false, msg: 'error occured'
      });
    }else{
      res.json({
        success: true, msg: callback
      })
    }
  });
  // console.log(req.query.vehicle_no);
});

router.get('/get_request_list', (req, res, next) => {
  Request.get_req_list(req.query.status,(err, callback) => {
    if(err) {
      res.json({
        success: false, msg: 'error occured'
      });
    } else {
      res.json({
        msg: callback
      })
    }
  })
})

module.exports = router;
