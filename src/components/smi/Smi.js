import styles from './Smi.module.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Smi = props => {
    return (
       <div className={styles.SmiList}>
            <Link to="/" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></Link>
            <Link to="/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link>
            <Link to="/" target="_blank"><FontAwesomeIcon icon={faTwitter} /></Link>
       </div>
    );
};

export default Smi;