import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

import FooterLogo from '../../../assets/images/main-logo.png';
import FooterNav from './footer-nav/FooterNav';
import Smi from '../../smi/Smi';

const Footer = props => {
    return (
        <footer className={styles.MainFooter}>
            <div className="container">
                <div className={styles.FooterRow}>
                    <div className={styles.FooterCol}>
                        <div className={styles.FooterLogo}>
                            <Link to="/">
                                <img src={FooterLogo} alt="Moovies"/>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.FooterCol}>
                        <FooterNav/>
                    </div>
                    <div className={styles.FooterCol}>
                        <div className={styles.FooterSocial}>
                            <h3>Social Media</h3>
                            <Smi/>
                        </div>
                    </div>
                </div>
                <p className={styles.FooterDisclaimer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className={styles.FooterCopyright}>© 2022 Nico Dev.</p>
            </div>
        </footer>
    );
};

export default Footer;