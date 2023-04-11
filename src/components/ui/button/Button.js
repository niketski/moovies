import React from 'react';
import styles from './Button.module.css';
import { Link } from 'react-router-dom';

const Button = props => {
    return (
        <Link 
            className={`${styles.siteBtn} ${props.className ? props.className : ''}`} 
            to={props.to ? props.to : '/'}
            onClick={props.onClick ? props.onClick : undefined}
            >{props.children}</Link>
    );
}

export default Button;