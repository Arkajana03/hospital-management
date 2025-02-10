const express = require('express');
const Appointment = require('../models/Appointment');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { doctorId, patientId, date } = req.body;

    // Check if doctor and patient exist
    if (!doctorId || !patientId || !date) {
      return res.status(400).json({ error: 'Doctor ID, Patient ID, and Date are required' });
    }

    const appointment = new Appointment({ doctorId, patientId, date });
    await appointment.save();

    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate('name','specialization') 
      .populate('name', 'age', 'disease'); 

    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
