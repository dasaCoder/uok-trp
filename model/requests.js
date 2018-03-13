const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/database');

const ReqeustSchema = mongoose.Schema({
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
    type: Object
  },
  driver:{
    type: Object
  }
});

const Request = module.exports = mongoose.model('Reqeust',ReqeustSchema);

module.exports.add_request = function(newRequest, callback){
  newRequest.save(callback);
}

module.exports.get_not_considered_requests = function (callback) {
  Request.find({'status.status':3},'refNo',callback);
}
