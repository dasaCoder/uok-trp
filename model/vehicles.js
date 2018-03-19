const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/database');

const VehicleSchema = mongoose.Schema({
  vehicle_no: {
    type: String
  },
  vehicle_type:{
    type: String
  },
  image:{
    type: String // this type should be changed
  },
  trips: [{
    ref_no: {
      type: Number
    },
    departure_time: {
      type: String
    },
    arrival_time: {
      type: String
    }
  }]
});

const Vehicle = module.exports = mongoose.model('Vehicle', VehicleSchema);

module.exports.getVehicleByNo = function(vehicle_no, callback) {
  Vehicle.findById(id,callback);
}

module.exports.get_vehicle_on_day = function(date, callback){
  Vehicle.find({'trips.departure_time': date},'vehicle_no',callback);
}

module.exports.addVehicle = function (newVehicle, callback) {
  /*bcrypt.genSalt(10, (err,salt)=>{
    bcrypt.hash(newVehicle)
  })*/
  newVehicle.save(callback);

}

module.exports.get_vehicle_list = function(callback){
  Vehicle.find({},'vehicle_no vehicle_type',callback);
}

module.exports.get_admin_to_reqeust = function (callback) {
  Vehicle.find({},{'_id' : 0,'vehicle_no' : 1},callback);
}
