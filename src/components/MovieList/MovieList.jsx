import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Container, Grid } from '@mui/material';
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
      <Typography variant='h2' gutterBottom>Movie List</Typography>
      <Container component='section' className="movies">
        <Grid container spacing={2} justifyContent={'center'}>
          {movies.map(movie => {
            return (
              <Grid item>
                <MovieItem movie={movie} key={movie.id} />
              </Grid>
            );
          })}
        </Grid>

      </Container>
    </main>
  );
}

export default MovieList;
