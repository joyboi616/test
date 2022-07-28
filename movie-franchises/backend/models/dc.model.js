const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dcSchema = new Schema({
  movieTitle: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const DC = mongoose.model('DC', dcSchema);

module.exports = DC;