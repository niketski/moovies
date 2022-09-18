import { useRef, useEffect, useContext, useState } from 'react';
import { DOMLoadedContext } from '../../../context/DOMLoadedContext';
import { BurgerMenuContext } from '../../../context/BurgerMenuContext';
import styles from './Header.module.css';
import headerLogo from '../../../assets/images/main-logo.png';
import { Link, useLocation } from 'react-router-dom';
import HeaderNav from './header-nav/HeaderNav';
import BurgerMenuButton from '../../ui/burger-menu-button/BurgerMenuButton';
import BurgerMenu from '../../ui/burger-menu/BurgerMenu';


const Header = () => {
    const headerRef = useRef();
    const [headerHeight, setHeaderHeight] = useState(0);
    const DOMLoadedCtx = useContext(DOMLoadedContext);
    const BurgerMenuCtx = useContext(BurgerMenuContext);
    const location = useLocation();
    const headerClass = location.pathname === '/' ? '' : styles.IpHeader;

    const handleResize = () => {
        DOMLoadedCtx.setWrapperPaddingTop(headerRef.current.offsetHeight);
        setHeaderHeight(headerRef.current.offsetHeight);
    };

    const BurgerMenuOpenHandler = () => {
        BurgerMenuCtx.burgerMenuOpen();
    };

    const BurgerMenuCloseHandler = () => {
        BurgerMenuCtx.burgerMenuClose();
    };

    useEffect(() => {
        
        DOMLoadedCtx.setWrapperPaddingTop(headerRef.current.offsetHeight);

        
        
        console.log(headerHeight);

    }, [headerHeight]);
    
    window.addEventListener('resize', handleResize);

    return (
        <>
            <header ref={headerRef} className={`${styles.mainHeader} ${headerClass}`}>
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
                            <BurgerMenuButton onClick={BurgerMenuOpenHandler} className="mobile-only"/>
                        </div>
                    </div>
                </div>
            </header>
            <BurgerMenu onCloseHandler={BurgerMenuCloseHandler}/>
        </>
    );
};

export default Header;