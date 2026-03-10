const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    enum: ['Rush', 'Social', 'Philanthropy'],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);