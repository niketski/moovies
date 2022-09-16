import styles from './Movies.module.css';
import InnerPage from "../../components/blocks/inner-page/InnerPage";
import QuickSearch from "../../components/quick-search/QuickSearch";
import FilterTabs from '../../components/ui/filter-tabs/FilterTabs';
import CardList from '../../components/card-list/CardList';
import Pagination from '../../components/pagination/Pagination';

const Movies = () => {
    return (
        <InnerPage title="Movies">
            <QuickSearch className={styles.moviesQuickSearch}/>
            <FilterTabs className={styles.moviesTabs} align="center"/>
            <CardList className={styles.moviesCardList}/>
            <Pagination className={styles.moviesPagination}/>
        </InnerPage>
    );
}

export default Movies;