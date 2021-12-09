import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import StarRating from './components/StarRating';
// import StarRating from './components/StarRating';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `http://localhost:9292/${movies}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    // console.log(responseJson);
    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className='djm-movie'>
      <MovieListHeading heading='Movies' />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />

      <div className='row_poster'>
        < MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;