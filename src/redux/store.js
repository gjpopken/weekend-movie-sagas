import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, take } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('FETCH_MOVIES', fetchAllMovies);
  yield takeEvery('GET_DETAILS', getDetails)
  yield takeEvery('POST_MOVIE', postMovie)
  yield takeEvery('GET_GENRES', getGenres)
}

function * getGenres(action) {
  try {
    const genres = yield axios.get('/api/genres')
    yield put({type: "SET_GENRES", payload: genres.data})
  } catch (error) {
    console.log(error);
  }
}

function * postMovie(action) {
  console.log('in post movie', action.payload);
  yield axios.post('/api/movies', action.payload)
}

function* fetchAllMovies() {
  try {
    // Get the movies:
    const moviesResponse = yield axios.get('/api/movies');
    // Set the value of the movies reducer:
    yield put({
      type: 'SET_MOVIES',
      payload: moviesResponse.data
    });
  } catch (error) {
    console.log('fetchAllMovies error:', error);
  }
}

function * getDetails(action){
  try {
    const details = yield axios.get(`/api/movies/${action.payload}`)
    yield put({type: "SET_DETAILS", payload: details.data})
  } catch (error) {
    console.log(error);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
}

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
}

const details = (state = {}, action) => {
  switch (action.type) {
    case 'SET_DETAILS':
      return action.payload
    default:
      return state
  }
}

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    details
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;
