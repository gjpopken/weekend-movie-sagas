import { Route, HashRouter as Router } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import DetailsPage from '../DetailsPage/DetailsPage';
import AddMovie from '../AddMovie/AddMovie';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';

function App() {
  return (
    <div className="App">
      <Typography variant='h1'>The Movies Saga</Typography>
      <Router>
        <Route path="/" exact>
        <Link to='/add'>Add Movie</Link>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/details">
          <DetailsPage />
        </Route>
        {/* Add Movie page */}
        <Route path="/add">
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}

export default App;
