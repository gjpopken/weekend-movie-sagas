import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.css';

function MovieList() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  return (
    <main>
      <Typography variant='h2'>Movie List</Typography>
      <section className="movies">
        {movies.map(movie => {
          return (
            <MovieItem movie={movie} key={movie.id}/>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
