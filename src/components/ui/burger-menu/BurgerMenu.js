import styles from './BurgerMenu.module.css';
import { Link, NavLink } from 'react-router-dom';

const BurgerMenu = props => {
    return (
        <>
            <div className={`${styles.BurgerMenu} ${props.className ? props.className : ''}`}>
                <div className={styles.BurgerMenuContent}>
                    <div className={styles.BurgerMenuNav}>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/movies">Movies</NavLink></li>
                            <li><NavLink to="/tv-series">TV Series</NavLink></li>
                            <li><NavLink to="/genres">Genres</NavLink></li>
                            <li><NavLink to="/upcoming-movies">Upcoming Movies</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.BurgerMenuBackDrop}></div>
        </>
    );
};

export default BurgerMenu;

