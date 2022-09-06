import styles from './BurgerMenu.module.css';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { BurgerMenuContext } from '../../../context/BurgerMenuContext';

const BurgerMenu = props => {
    const BurgerMenuCtx = useContext(BurgerMenuContext);

    return (
        <>
            <div className={`${styles.BurgerMenu} ${BurgerMenuCtx.isActive ? 'active' : ''} ${props.className ? props.className : ''} mobile-only`}>
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
            <div className={`${styles.BurgerMenuBackDrop} ${BurgerMenuCtx.isActive ? 'active' : ''} mobile-only`}  onClick={props.onCloseHandler}></div>
        </>
    );
};

export default BurgerMenu;

