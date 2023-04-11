import React from 'react';
import styles from './Pagination.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = props => {
    const {
            currentPage, 
            pageNumbers, 
            paginate, 
            totalPages,
            prevPage, 
            nextPage} = props;
    

    return (
        <div className={`${styles.pagination} ${props.className ? props.className : ''}`}>
            <ul className={styles.paginationList}>
                <li className={styles.pagiPrevButton}><button onClick={() => { prevPage(currentPage) }} disabled={(currentPage - 1) <= 0 ? true : false}><FontAwesomeIcon icon={faChevronLeft}/></button></li>
                {
                    pageNumbers && pageNumbers.map(number => {
                        return (
                            <li 
                                key={number} 
                                className={currentPage === number ? styles.pagiActive : ''}>
                                    <button onClick={() => { paginate(number) }} data-href="/">
                                        {number}
                                    </button>
                            </li>
                        );
                    })
                }
                <li className={styles.pagiNextButton}><button onClick={() => { nextPage(currentPage) }} disabled={(currentPage + 1) > totalPages ? true : false}><FontAwesomeIcon icon={faChevronRight}/></button></li>
            </ul>
        </div>
    );
};


export default React.memo(Pagination);