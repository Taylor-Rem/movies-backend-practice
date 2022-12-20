let express = require('express');
let cors = require('cors');

let app = express();

app.use(cors());
app.use(express.json());

const {
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie,
} = require('./controller');

app.get('/api/movies', getMovies);
app.delete('/api/movies/:id', deleteMovie);
app.put('/api/movies/:id', updateMovie);
app.post('/api/movies', createMovie);

app.listen(4004, () => console.log('App up on 4004'));
