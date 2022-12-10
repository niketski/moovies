import styles from './Pagination.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = props => {
    return (
        <div className={`${styles.pagination} ${props.className ? props.className : ''}`}>
            {/* <ul className={styles.paginationList}>
                <li className={styles.pagiPrevButton}><a href="/"><FontAwesomeIcon icon={faChevronLeft}/></a></li>
                <li className={styles.pagiActive}><a href="/">1</a></li>
                <li><a href="/">2</a></li>
                <li><a href="/">3</a></li>
                <li><a href="/">4</a></li>
                <li><a href="/">5</a></li>
                <li className={styles.pagiNextButton}><a href="/"><FontAwesomeIcon icon={faChevronRight}/></a></li>
            </ul> */}
            <ul className={styles.paginationList}>
                <li className={styles.pagiPrevButton}><button><FontAwesomeIcon icon={faChevronLeft}/></button></li>
                <li className={styles.pagiActive}><a data-href="/">1</a></li>
                <li><button data-href="/">2</button></li>
                <li><button data-href="/">3</button></li>
                <li><button data-href="/">4</button></li>
                <li><button data-href="/">5</button></li>
                <li className={styles.pagiNextButton}><button data-href="/"><FontAwesomeIcon icon={faChevronRight}/></button></li>
            </ul>
        </div>
    );
};

export default Pagination;