const router = require('express').Router();
let DC = require('../models/dc.model');

router.route('/').get((req, res) => {
  DC.find()
    .then(dcMovies => res.json(dcMovies))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const movieTitle = req.body.movieTitle;

  const newDcMovie = new DC({movieTitle});

  newDcMovie.save()
    .then(() => res.json('DC Movie added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;