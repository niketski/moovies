import { useRef, useEffect, useContext, useState } from 'react';
import { DOMLoadedContext } from '../../../context/DOMLoaded';
import styles from './Header.module.css';
import headerLogo from '../../../assets/images/main-logo.png';
import { Link } from 'react-router-dom';
import HeaderNav from './header-nav/HeaderNav';

const Header = () => {
    const headerRef = useRef();
    const [headerHeight, setHeaderHeight] = useState(0);
    const DOMLoadedCtx = useContext(DOMLoadedContext);

    const handleResize = () => {
        DOMLoadedCtx.setWrapperPaddingTop(headerRef.current.offsetHeight);
        setHeaderHeight(headerRef.current.offsetHeight);
        console.log('test');
    };

    useEffect(() => {
        
        DOMLoadedCtx.setWrapperPaddingTop(headerRef.current.offsetHeight);

        
        
        console.log(headerHeight);

    }, [headerHeight]);
    
    window.addEventListener('resize', handleResize);

    return (
        <header ref={headerRef} className={styles.mainHeader}>
            <div className="container">
                <div className={`${styles.headerRow}`}>
                    <div className="headerLeft">
                        <div className={styles.headerLogo}>
                            <Link to="/">
                                <img src={headerLogo} alt="Moovies"/>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.headerRight}>
                        <HeaderNav className="desktop-only"/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;