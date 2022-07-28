const router = require('express').Router();
let StarWars = require('../models/starWars.model');

router.route('/').get((req, res) => {
  StarWars.find()
    .then(starWarsMovies => res.json(starWarsMovies))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const movieTitle = req.body.movieTitle;
  const director = req.body.director;
  const releaseDate = Date.parse(req.body.releaseDate);
  const boxOffice = req.body.boxOffice;
  const rottenTomatoes = req.body.rottenTomatoes;

  const newStarWarsMovie = new StarWars({
    movieTitle,
    director,
    releaseDate,
    boxOffice,
    rottenTomatoes,
  });

  newStarWarsMovie.save()
    .then(() => res.json('Star Wars Movie added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  StarWars.findById(req.params.id)
    .then(starWarsMovie => res.json(starWarsMovie))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  StarWars.findByIdAndDelete(req.params.id)
    .then(() => res.json('Star Wars Movie deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  StarWars.findById(req.params.id)
    .then(starWarsMovie => {
      starWarsMovie.movieTitle = req.body.movieTitle;
      starWarsMovie.director = req.body.director;
      starWarsMovie.releaseDate = Date.parse(req.body.releaseDate);
      starWarsMovie.boxOffice = req.body.boxOffice;
      starWarsMovie.rottenTomatoes = req.body.rottenTomatoes;
      

      starWarsMovie.save()
        .then(() => res.json('Star Wars Movie updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;