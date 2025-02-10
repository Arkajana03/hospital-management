const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  phone: String,
  disease: String
});

module.exports = mongoose.model('Patient', patientSchema);
