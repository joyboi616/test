const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  movieTitle: { type: String, required: true },
  director: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  boxOffice: { type: String, required: true },
  rottenTomatoes: { type: String, required: true },
  
}, {
  timestamps: true,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;