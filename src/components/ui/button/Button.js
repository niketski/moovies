import styles from './Button.module.css';
import { Link } from 'react-router-dom';

const Button = props => {
    return (
        <Link className={`${styles.siteBtn} ${props.className}`} to={props.to}>{props.children}</Link>
    );
}

export default Button;