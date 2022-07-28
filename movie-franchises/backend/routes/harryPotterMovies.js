const router = require('express').Router();
let HarryPotter = require('../models/harryPotter.model');

router.route('/').get((req, res) => {
  HarryPotter.find()
    .then(harryPotterMovies => res.json(harryPotterMovies))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const movieTitle = req.body.movieTitle;
  const director = req.body.director;
  const releaseDate = Date.parse(req.body.releaseDate);
  const boxOffice = req.body.boxOffice;
  const rottenTomatoes = req.body.rottenTomatoes;

  const newHarryPotterMovie = new HarryPotter({
    movieTitle,
    director,
    releaseDate,
    boxOffice,
    rottenTomatoes,
  });

  newHarryPotterMovie.save()
    .then(() => res.json('Harry Potter Movie added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  HarryPotter.findById(req.params.id)
    .then(harryPotterMovie => res.json(harryPotterMovie))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  HarryPotter.findByIdAndDelete(req.params.id)
    .then(() => res.json('Harry Potter Movie deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  HarryPotter.findById(req.params.id)
    .then(harryPotterMovie => {
      harryPotterMovie.movieTitle = req.body.movieTitle;
      harryPotterMovie.director = req.body.director;
      harryPotterMovie.releaseDate = Date.parse(req.body.releaseDate);
      harryPotterMovie.boxOffice = req.body.boxOffice;
      harryPotterMovie.rottenTomatoes = req.body.rottenTomatoes;
      

      harryPotterMovie.save()
        .then(() => res.json('Harry Potter Movie updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;