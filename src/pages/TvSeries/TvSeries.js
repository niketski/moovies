import styles from './TvSeries.module.css';
import InnerPage from "../../components/blocks/inner-page/InnerPage";
import QuickSearch from "../../components/quick-search/QuickSearch";
import FilterTabs from '../../components/ui/filter-tabs/FilterTabs';
import CardList from '../../components/card-list/CardList';
import Pagination from '../../components/pagination/Pagination';

const TvSeries = () => {
    return (
        <InnerPage title="TV Series">
            <QuickSearch className={styles.tvSeriresQuickSearch}/>
            <FilterTabs className={styles.tvSeriesTabs} align="center"/>
            <CardList className={styles.tvSeriesCardList}/>
            <Pagination className={styles.tvSeriesPagination}/>
        </InnerPage>
    );
}

export default TvSeries;