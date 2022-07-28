const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const moviesRouter = require('./routes/movies');
const marvelRouter = require('./routes/marvelMovies');
const dcRouter = require('./routes/dcMovies');
const starWarsRouter = require('./routes/starWarsMovies');
const jamesBondRouter = require('./routes/jamesBondMovies');
const harryPotterRouter = require('./routes/harryPotterMovies');

app.use('/movies', moviesRouter);
app.use('/marvelMovies', marvelRouter);
app.use('/dcMovies', dcRouter);
app.use('/starWarsMovies', starWarsRouter);
app.use('/jamesBondMovies', jamesBondRouter);
app.use('/harryPotterMovies', harryPotterRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});