const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/database');
const autoIncrement = require('mongoose-auto-increment');

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
    type: Object
  },
  driver:{
    type: Object
  }
});

RequestSchema.plugin(autoIncrement.plugin, {model: 'Request', field: 'refNo'});
const Request = module.exports = mongoose.model('Request',RequestSchema);

module.exports.add_request = function(newRequest, callback){
  newRequest.save(callback);
}

module.exports.get_not_considered_requests = function (callback) {
  Request.find({'status.status':3},'refNo',callback);
}
