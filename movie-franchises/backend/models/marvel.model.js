const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const marvelSchema = new Schema({
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

const Marvel = mongoose.model('Marvel', marvelSchema);

module.exports = Marvel;