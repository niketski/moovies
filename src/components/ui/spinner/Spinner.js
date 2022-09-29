import styles from './Spinner.module.css';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Spinner = props => {
    return (
        <div className={styles.spinnerHolder}>
            <FontAwesomeIcon icon={faSpinner} spin={true} className={styles.spinner}></FontAwesomeIcon>
        </div>
    );
};

export default Spinner;