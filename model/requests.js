const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/database');
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;

autoIncrement.initialize(mongoose.connection);

const RequestSchema = mongoose.Schema({
  refNo:{
    type: Number
  },
  lecturer:{
    type: String
  },
  email:{
    type: String
  },
  password:{
    type: String
  },
  dep_unit:{
    type: String
  },
  position:{
    type: String
  },
  num_passangers:{
    type: String
  },
  purpose:{
    type: String
  },
  vehicle_type:{
    type: String
  },
  status:{
    type: Object
  },
  isPermited:{
    type: Boolean
  },
  fundingWay:{
    type: String
  },
  departure:{
    type: Object
  },
  arrival:{
    type: Object
  },
  vehicle:{
    type: Schema.Types.ObjectId, ref: 'Vehicle'
  },
  driver:{
    type: Object
  }
});

const Vehicle = require('./vehicles');

RequestSchema.plugin(autoIncrement.plugin, {model: 'Request', field: 'refNo'});
const Request = module.exports = mongoose.model('Request',RequestSchema);

module.exports.add_request = function(newRequest, callback){
  newRequest.save(callback);
}

module.exports.get_not_considered_requests = function (callback) {
  Request.find({'status.status':3},'refNo',callback);
}

module.exports.get_request = function (refNo, callback) {
  Request.find({'refNo':refNo},callback).populate({path:'vehicle',select:'vehicle_no'});
}

module.exports.get_req_for_user = function (params, callback) {
  Request.find({'refNo':params.refNo, 'password': params.password},callback).populate({path:'vehicle',select:'vehicle_no'});
}

module.exports.change_status = function (refNo, status, callback) {
  let query = {'refNo': refNo};
  // console.log('refNO is : '+refNo + status);
  Request.update(query, {'status' : status}, callback);
}

module.exports.setDriver = function(refNo, name, callback) {
  vehicle = Vehicle.find({'vehicle_no':'CDD-46kkkk89'});
  console.log(vehicle);
  let query = {'refNo': refNo};
  // let options = { multi: true };
  Request.update(query, {'vehicle': vehicle._id}, callback);
}

module.exports.set_moredetails = function(params, callback) {
  let query = { 'refNo': params.refNo };
  Request.update(query,
                    {
                    'position': params.position,
                    'purpose': params.purpose,
                    'fundingWay': params.fundingWay
                  },
                callback
                );
}

module.exports.setMoreInfo = function(params, callback){
  console.log(params);
  Request.findOneAndUpdate({'refNo':params.refNo}, {'$set':{
      'position': params.position,
      'purpose': params.purpose,
      'fundingWay': params.fundingWay,
    }})
    .exec(function (err, request) {
        if(err){
          console.log(err);
          res.status(500).send(err);
        }else {
          res.status(200).send(request);
        }
  })
}

module.exports.getActiveRequests = function (callback) {
  Request.find({status : {"$in": [1,2,'1','2']} },'refNo departure arrival status driver vehicle',callback);
}

module.exports.getStatusReq = function (params, callback) {
  let query = {$and:[{'refNo':params.refNo},{'password':params.password}]};
  Request.find(query,'status',callback);
}

module.exports.set_vehicle = function (refNo, vehicle_no, callback) {
  Vehicle.find({'vehicle_no': vehicle_no}, '_id', function (err, data) {
    let vehicle = data[0];
    let query = { 'refNo': refNo};
    Request.findOneAndUpdate(query, {$set: {'vehicle': vehicle._id} }, { new: true }, callback);
  });
  //console.log(vehicle);

}
