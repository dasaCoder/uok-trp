const express = require('express');
const router = express.Router();

const Request = require('../model/requests');

router.post('/add',(req,res,next)=>{
  let newRequest = new Request(req.body);
  Request.add_request(newRequest,(err,callback)=>{
    if(err){
      res.json({
        success: false, msg: 'error occured'
      })
    }else{
      res.json({
        success: true, msg: 'successfully added'
      })
    }
  })
});

module.exports = router;
