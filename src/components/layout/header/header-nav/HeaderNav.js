import styles from './HeaderNav.module.css';
import { Link, NavLink } from 'react-router-dom';

const HeaderNav = props => {
  
    return(
        <nav className={`${styles.headerNav} ${props.className ? props.className : ''}`}>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/movies">Movies</NavLink></li>
                <li><NavLink to="/tv-series">TV Series</NavLink></li>
                <li><NavLink to="/upcoming-movies">Upcoming Movies</NavLink></li>
            </ul>
        </nav>
    )
};

export default HeaderNav;