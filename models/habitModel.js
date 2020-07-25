const mongoose = require('mongoose');

const {Schema} = mongoose;

const habitModel = new Schema(
  {
    done: { type: Boolean, default:false },
    title: { type: String},
    description: { type: String},
  }
);

module.exports = mongoose.model('Habit', habitModel );
