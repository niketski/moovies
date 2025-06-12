import React, { useEffect, useState } from 'react';
import styles from './QuickSearch.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const QuickSearch = props => {
    const [query, setQuery] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        props.searchHandler(query);
    };

    useEffect(() => {

        props.searchHandler(query);

    }, [query])

    return (
        <div className={`${styles.quickSearch} ${props.className ? props.className : ''}`}>
            <div className={styles.quickSearchInner}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.searchField}>
                        <label htmlFor="search-keyword">Search by keyword...</label>
                        <input 
                            type="text"
                            name="search-keyword"
                            id="search-keyword"
                            placeholder="Search by keyword..."
                            onChange={e => { setQuery(e.target.value) }}/>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default React.memo(QuickSearch);