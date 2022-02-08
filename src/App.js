import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import ShowList from './components/ShowList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Button from 'react-bootstrap/Button'

const App = () => {
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);

  const movies_url = "http://localhost:9292/movies";
  const shows_url = "http://localhost:9292/shows";

  useEffect(() => {
    fetch(movies_url).then(r => r.json()).then(setMovies)
    fetch(shows_url).then(r => r.json()).then(setShows)
  }, []);

  const handleClick = () => {
    window.location.reload(false)
  }

  return (
    <>
      <div>
        <MovieListHeading heading='Fresh Potato' />
        <div className='movie-or-shows' onClick={handleClick}>
          <Link to='/movies'><Button>Movies</Button></Link><br />
          <Link to='/shows'><Button>Shows</Button></Link>
        </div>

        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/movies">
              <MovieList movies={movies} />
            </Route>
            <Route path="/shows">
              <ShowList shows={shows} />
            </Route>
          </Switch>
        </Router>

        {/* <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} /> */}
      </div>
    </>
  );
}

export default App;