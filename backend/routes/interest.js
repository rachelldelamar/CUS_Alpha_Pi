const express = require('express');
const router = express.Router();
const Interest = require('../models/Interest');
const nodemailer = require('nodemailer');

// POST interest form submission
router.post('/', async (req, res) => {
  const interest = new Interest({
    fullName: req.body.fullName,
    email: req.body.email,
    majorYear: req.body.majorYear
  });

  try {
    // Save to database first
    const newInterest = await interest.save();

    // Try to send email but don't fail if it doesn't work
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.RECIPIENT_EMAIL,
        subject: '🌹 New Rush Interest — CUS Alpha Pi',
        html: `
          <h2>New Interest Form Submission</h2>
          <p><strong>Name:</strong> ${req.body.fullName}</p>
          <p><strong>Email:</strong> ${req.body.email}</p>
          <p><strong>Major / Year:</strong> ${req.body.majorYear}</p>
          <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
        `
      });

      console.log('✅ Email sent successfully');
    } catch (emailErr) {
      // Email failed but form was saved — that's okay
      console.log('⚠️ Email failed but form was saved:', emailErr.message);
    }

    // Always return success if form was saved
    res.status(201).json({ message: 'Interest submitted successfully!' });

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET all interest submissions
router.get('/', async (req, res) => {
  try {
    const submissions = await Interest.find().sort({ submittedAt: -1 });
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;