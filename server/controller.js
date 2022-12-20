const movieDB = require('./db.json');

let id = 11;

module.exports = {
  getMovies: (req, res) => res.status(200).send(movieDB),

  deleteMovie: (req, res) => {
    let id = +req.params.id;
    let index;
    for (let i = 0; i < movieDB.length; i++) {
      if (movieDB[i].id === id) {
        index = i;
      }
    }
    if (index !== undefined) {
      movieDB.splice(index, 1);
      res.status(200).send(movieDB);
    } else {
      res.status(400).send(`movie with id ${id} does not exist`);
    }
  },

  createMovie: (req, res) => {
    let obj = req.body;
    let newMovie = {
      title: obj.title,
      rating: +obj.rating,
      imageURL: obj.imageURL,
      id: id,
    };
    id++;
    movieDB.push(newMovie);
    res.status(200).send(movieDB);
  },
  updateMovie: (req, res) => {
    let id = +req.params.id;
    let { type } = req.body;

    let index;
    for (let i = 0; i < movieDB.length; i++) {
      if (movieDB[i].id === id && movieDB[i].id === id) {
        index = i;
      }
    }

    if (index !== undefined && type === 'plus' && movieDB[index].rating < 5) {
      movieDB[index].rating++;
      res.send(movieDB);
    } else if (
      index !== undefined &&
      type === 'minus' &&
      movieDB[index].rating > 1
    ) {
      movieDB[index].rating--;
      res.send(movieDB);
    } else {
      res.status(400).send('client error');
    }
  },
};
