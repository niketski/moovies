
import './App.scss';
import MainRoutes from './Routes';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/tv-series">TV Series</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </header>
      <MainRoutes/>
    </>
  );
}

export default App;
