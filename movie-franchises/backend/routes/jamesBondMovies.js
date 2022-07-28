const router = require('express').Router();
let JamesBond = require('../models/jamesBond.model');

router.route('/').get((req, res) => {
  JamesBond.find()
    .then(jamesBondMovies => res.json(jamesBondMovies))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const movieTitle = req.body.movieTitle;
  const director = req.body.director;
  const releaseDate = Date.parse(req.body.releaseDate);
  const boxOffice = req.body.boxOffice;
  const rottenTomatoes = req.body.rottenTomatoes;

  const newJamesBondMovie = new JamesBond({
    movieTitle,
    director,
    releaseDate,
    boxOffice,
    rottenTomatoes,
  });

  newJamesBondMovie.save()
    .then(() => res.json('James Bond Movie added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  JamesBond.findById(req.params.id)
    .then(jamesBondMovie => res.json(jamesBondMovie))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  JamesBond.findByIdAndDelete(req.params.id)
    .then(() => res.json('James Bond Movie deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  JamesBond.findById(req.params.id)
    .then(jamesBondMovie => {
      jamesBondMovie.movieTitle = req.body.movieTitle;
      jamesBondMovie.director = req.body.director;
      jamesBondMovie.releaseDate = Date.parse(req.body.releaseDate);
      jamesBondMovie.boxOffice = req.body.boxOffice;
      jamesBondMovie.rottenTomatoes = req.body.rottenTomatoes;
      

      jamesBondMovie.save()
        .then(() => res.json('James Bond Movie updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;