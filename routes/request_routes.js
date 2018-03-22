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

router.get('/get/:refNo',(req,res,next)=> {
  Request.get_request(req.params.refNo, (err,callback)=> {
    if(err){
      res.json({
        success: false, msg: 'error occured'
      });
    }else{
      res.json({
        success: true, msg: callback
      })
    }
  } )
});

router.get('/setDriver/:refNo',(req,res,next) => {
  Request.setDriver(req.params.refNo,'mr. Gihan ekanayaka',(err,callback) => {
    if(err){
      res.json({
        success: false, msg: 'error occured'
      });
    }else{
      res.json({
        success: true, msg: callback
      });
    }
  })
});

router.get('/status/:refNo/:status',(req,res,next) => {
  Request.change_status(req.params.refNo, req.params.status, (err, callback) => {
    if(err){
      res.json({
        success: false, msg: 'error occured'
      });
    }else{
      res.json({
        success: true, msg: callback
      });
    }
  });
});

router.post('/more_details', (req,res,next) => {
  Request.set_moredetails(req.params, (err, callback ) => {
    if(err){
      res.json({
        success: false, msg: 'error occured'
      });
    }else{
      res.json({
        success: true, msg: callback
      })
    }
  })
})

module.exports = router;
