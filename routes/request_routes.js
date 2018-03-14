const express = require('express');
const router = express.Router();

const Request = require('../model/requests');

router.post('/add',(req,res,next)=>{
  let newRequest = new Request(req.body);
  Request.add_request(newRequest,(err,callback)=>{
    if(err){
      res.json({
        success: false, msg: 'error ocuured'
      })
    }else{
      res.json({
        success: true, msg: 'successfully added'
      })
    }
  })
});

router.get('/get_not_considered_requests',(req,res,next) => {
  Request.get_not_considered_requests((err,callback)=>{
    if(err){
      res.json({
        success: false, msg: 'error occured'
      })
    }else{
      res.json({
        success: true,
        msg: callback
      })
    }
  })
});

module.exports = router;
