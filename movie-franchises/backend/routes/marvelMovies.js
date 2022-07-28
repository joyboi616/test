const router = require('express').Router();
let Marvel = require('../models/marvel.model');

router.route('/').get((req, res) => {
  Marvel.find()
    .then(marvelMovies => res.json(marvelMovies))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const movieTitle = req.body.movieTitle;
  const director = req.body.director;
  const releaseDate = Date.parse(req.body.releaseDate);
  const boxOffice = req.body.boxOffice;
  const rottenTomatoes = req.body.rottenTomatoes;

  const newMarvelMovie = new Marvel({
    movieTitle,
    director,
    releaseDate,
    boxOffice,
    rottenTomatoes,
  });

  newMarvelMovie.save()
    .then(() => res.json('Marvel Movie added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Marvel.findById(req.params.id)
    .then(marvelMovie => res.json(marvelMovie))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Marvel.findByIdAndDelete(req.params.id)
    .then(() => res.json('Marvel Movie deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Marvel.findById(req.params.id)
    .then(marvelMovie => {
      marvelMovie.movieTitle = req.body.movieTitle;
      marvelMovie.director = req.body.director;
      marvelMovie.releaseDate = Date.parse(req.body.releaseDate);
      marvelMovie.boxOffice = req.body.boxOffice;
      marvelMovie.rottenTomatoes = req.body.rottenTomatoes;
      

      marvelMovie.save()
        .then(() => res.json('Marvel Movie updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;