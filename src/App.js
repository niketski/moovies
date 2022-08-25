
import MainRoutes from './Routes';
import { Link } from 'react-router-dom';
import Header from './components/blocks/header/Header';

function App() {
  return (
    <>
      <Header/>
      <MainRoutes/>
    </>
  );
}

export default App;
