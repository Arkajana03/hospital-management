const express = require('express');
const Doctor = require('../models/Doctor');

const router = express.Router();

router.post('/', async (req, res) => {
  const doctor = new Doctor(req.body);
  await doctor.save();
  res.send(doctor);
});

router.get('/', async (req, res) => {
  const doctors = await Doctor.find();
  res.send(doctors);
});

module.exports = router;
