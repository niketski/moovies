import { useState, useEffect } from 'react';
import styles from './TvSeries.module.css';
import InnerPage from "../../components/layout/inner-page/InnerPage";
import QuickSearch from "../../components/quick-search/QuickSearch";
import FilterTabs from '../../components/ui/filter-tabs/FilterTabs';
import CardList from '../../components/card-list/CardList';
import Pagination from '../../components/pagination/Pagination';
import Spinner from '../../components/ui/spinner/Spinner';
import moviePlaceholder from '../../assets/images/movie-placeholder.jpg'

import TMDBApi from '../../api/tmdb-api';
import apiConfig from '../../api/tmdb-api.config';
import useListing from '../../hooks/listing';
const movieApi = new TMDBApi;

const TvSeries = () => {
    const {
        data, 
        isLoading: isLoadingData, 
        errorMessage, 
        genres: genreList,
        isLoadingGenre,
        errorType,
        activeGenres,
        currentPage,
        pageNumbers, 
        totalPages,
        pageCount,
        updateSelectedGenre,
        updateSearch,
        updateCurrentPage,
        prevPage,
        nextPage
        } = useListing('tv');

        console.log(data);

    // format movies data
    const tvFormat = data => {

        // dont continue if data is not available
        if(!data) {
            return false;
        }

        return data.map(tv => {
            const poster        = tv.poster_path ? movieApi.getImagePosterUrl(tv.poster_path) : moviePlaceholder;
            const year_released = tv.first_air_date ? tv.first_air_date.split('-')[0] : '';
            const genres        = tv.genre_ids.map(genre => {
                                    return apiConfig.genres[genre]
                                }); 

            return {
                        featuredImage: poster,
                        title: data.title,
                        // details: `${year_released} . ${genres.join(' | ')}`,
                        details: `${year_released} ${genres.length ? '. ' + genres.join(' | ') : ''}`,
                        link: `/details/tv/${tv.id}`
                    };
        });
        
    };

    const tvSerries = tvFormat(data);
 
    return (
        <InnerPage title="TV Series">
            <QuickSearch className={styles.tvSeriresQuickSearch} searchHandler={updateSearch}/>

            {genreList && <FilterTabs 
                            clickHandler={updateSelectedGenre} 
                            className={styles.tvSeriesTabs} 
                            tabs={genreList} 
                            activeTabs={activeGenres}
                            align="center"/>}

            {isLoadingData && <Spinner/>}

            {(tvSerries && !isLoadingData) && <CardList className={styles.tvSeriesCardList} cards={tvSerries}/>}

            {!(totalPages === 0 || totalPages === 1) && 

                <Pagination 
                className={styles.tvSeriesPagination}
                currentPage={currentPage}
                pageNumbers={pageNumbers}
                paginate={updateCurrentPage}
                totalPages={totalPages}
                prevPage={prevPage}
                nextPage={nextPage}/>

            }
        </InnerPage>
    );
}

export default TvSeries;