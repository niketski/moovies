import styles from './Pagination.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = props => {
    return (
        <div className={`${styles.pagination} ${props.className ? props.className : ''}`}>
            <ul className={styles.paginationList}>
                <li className={styles.pagiPrevButton}><a href="/"><FontAwesomeIcon icon={faChevronLeft}/></a></li>
                <li className={styles.pagiActive}><a href="/">1</a></li>
                <li><a href="/">2</a></li>
                <li><a href="/">3</a></li>
                <li><a href="/">4</a></li>
                <li><a href="/">5</a></li>
                <li className={styles.pagiNextButton}><a href="/"><FontAwesomeIcon icon={faChevronRight}/></a></li>
            </ul>
        </div>
    );
};

export default Pagination;