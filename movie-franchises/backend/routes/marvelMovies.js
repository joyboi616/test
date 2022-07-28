const router = require('express').Router();
let Marvel = require('../models/marvel.model');

router.route('/').get((req, res) => {
  User.find()
    .then(marvelMovies => res.json(marvelMovies))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const movieTitle = req.body.movieTitle;

  const newMarvelMovie = new User({movieTitle});

  newMarvelMovie.save()
    .then(() => res.json('Marvel Movie added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;