const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jamesBondSchema = new Schema({
  movieTitle: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  director: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  releaseDate: {
    type: Date,
    required: true,
    trim: true,
    minlength: 3
  },
  boxOffice: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  rottenTomatoes: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const JamesBond = mongoose.model('JamesBond', jamesBondSchema);

module.exports = JamesBond;