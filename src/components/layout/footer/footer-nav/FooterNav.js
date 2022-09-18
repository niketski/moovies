import styles from './FooterNav.module.css';

import Footer from "../Footer";
import { Link } from 'react-router-dom';

const FooterNav = props => {
    return (
        <nav className={styles.FooterNav}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Movies</Link></li>
                <li><Link to="/tv-series">TV Series</Link></li>
                <li><Link to="/genres">Genres</Link></li>
                <li><Link to="/upcoming-movies">Upcoming Movies</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-of-services">Terms of Services</Link></li>
            </ul>
        </nav>
    );
};

export default FooterNav;