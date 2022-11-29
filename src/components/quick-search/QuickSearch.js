import styles from './QuickSearch.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBarsProgress } from "@fortawesome/free-solid-svg-icons";

const QuickSearch = props => {
    return (
        <div className={`${styles.quickSearch} ${props.className ? props.className : ''}`}>
            <div className={styles.quickSearchInner}>
                <form>
                    <div className={styles.searchField}>
                        <label htmlFor="search-keyword">Search by keyword...</label>
                        <input 
                            type="text"
                            name="search-keyword"
                            id="search-keyword"
                            placeholder="Search by keyword..."
                            onChange={e => { props.searchHandler(e.target.value)}}/>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default QuickSearch;