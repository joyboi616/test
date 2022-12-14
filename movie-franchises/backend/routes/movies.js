const router = require('express').Router();
let Movie = require('../models/movie.model');

router.route('/').get((req, res) => {
  Movie.find()
    .then(movies => res.json(movies))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const movieTitle = req.body.movieTitle;
  const director = req.body.director;
  const releaseDate = Date.parse(req.body.releaseDate);
  const boxOffice = req.body.boxOffice;
  const rottenTomatoes = req.body.rottenTomatoes;

  const newMovie = new Movie({
    movieTitle,
    director,
    releaseDate,
    boxOffice,
    rottenTomatoes,
  });

  newMovie.save()
  .then(() => res.json('Movie added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Movie.findById(req.params.id)
    .then(movie => res.json(movie))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(() => res.json('Movie deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Movie.findById(req.params.id)
    .then(movie => {
      movie.movieTitle = req.body.movieTitle;
      movie.director = req.body.director;
      movie.releaseDate = Date.parse(req.body.releaseDate);
      movie.boxOffice = req.body.boxOffice;
      movie.rottenTomatoes = req.body.rottenTomatoes;
      

      movie.save()
        .then(() => res.json('Movie updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;