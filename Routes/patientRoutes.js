const express = require('express');
const Patient = require('../models/Patient');

const router = express.Router();

router.post('/', async (req, res) => {
  const patient = new Patient(req.body);
  await patient.save();
  res.send(patient);
});

router.get('/', async (req, res) => {
  const patients = await Patient.find();
  res.send(patients);
});

module.exports = router;
