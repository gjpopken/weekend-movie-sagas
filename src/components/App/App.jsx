import { Route, HashRouter as Router } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import DetailsPage from '../DetailsPage/DetailsPage';
import { Typography } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="App">
      <Typography variant='h1'>The Movies Saga</Typography>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/details">
          <DetailsPage />
        </Route>
        {/* Add Movie page */}

      </Router>
    </div>
  );
}

export default App;
