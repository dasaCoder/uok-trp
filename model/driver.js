const mongoose = require('mongoose');
const config = require('../config/database');

const DriverSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  nic_no : {
    type: String,
    require: true
  },
  driving_liecence_no: {
    type: String,
    require: true
  },
  duties: []

});

let Driver = module.exports = mongoose.model('Driver', DriverSchema);

module.exports.addDriver = function (newDriver , callback) {
  newDriver.save(callback);
}

module.exports.getDrivers = function(callback){
  Driver.find({},{'_id' : 0,'name' : 1},callback);
}




