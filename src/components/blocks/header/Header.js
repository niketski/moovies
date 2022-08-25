import styles from './Header.module.css';
import headerLogo from '../../../assets/images/main-logo.png';
import { Link } from 'react-router-dom';
import HeaderNav from './header-nav/HeaderNav';

const Header = () => {
    return (
        <header className={styles.mainHeader}>
            <div className="container">
                <div className={`${styles.headerRow}`}>
                    <div className="headerLeft">
                        <div className="headerLogo">
                            <Link to="/">
                                <img src={headerLogo} alt="Moovies"/>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.headerRight}>
                        <HeaderNav/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;