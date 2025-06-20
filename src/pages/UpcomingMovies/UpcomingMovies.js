import useListing from '../../hooks/listing';
import styles from './UpcomingMovies.module.css';

import InnerPage from "../../components/layout/inner-page/InnerPage";
import QuickSearch from "../../components/quick-search/QuickSearch";
import FilterTabs from '../../components/ui/filter-tabs/FilterTabs';
import CardList from '../../components/card-list/CardList';
import Pagination from '../../components/pagination/Pagination';
import Spinner from '../../components/ui/spinner/Spinner';

import moviePlaceholder from '../../assets/images/movie-placeholder.jpg';
import TMDBApi from '../../api/tmdb-api';
import apiConfig from '../../api/tmdb-api.config';
const movieApi = new TMDBApi;

const Movies = () => {
    const {
            data, 
            isLoading: isLoadingData, 
            genres: genreList,
            activeGenres,
            currentPage,
            pageNumbers, 
            totalPages,
            updateSelectedGenre,
            updateSearch,
            updateCurrentPage,
            prevPage,
            nextPage
        } = useListing('movie', 'upcoming');
    
    // format movies data
    const movieFormat = data => {

        // dont continue if data is not available
        if(!data) {
            return false;
        }

        return data.map(movie => {
            const poster        = movie.poster_path ? movieApi.getImagePosterUrl(movie.poster_path) : moviePlaceholder;
            const year_released = movie.release_date ? movie.release_date.split('-')[0] : null;
            const genres        = movie.genre_ids.map(genre => {
                                    return apiConfig.genres[genre]
                                }); 

            return {
                        featuredImage: poster,
                        title: data.title,
                        details: `${year_released} . ${genres.join(' | ')}`,
                        link: `/details/movie/${movie.id}`
                    };
        });
        
    };

    const movies = movieFormat(data);

    return (
        <InnerPage title="Upcoming Movies">
            <QuickSearch className={styles.moviesQuickSearch} searchHandler={updateSearch}/>

            {genreList && <FilterTabs 
                            clickHandler={updateSelectedGenre} 
                            className={styles.moviesTabs} 
                            tabs={genreList} 
                            activeTabs={activeGenres}
                            align="center"/>}

            {isLoadingData && <Spinner/>}

            {(movies && !isLoadingData) && <CardList className={styles.moviesCardList} cards={movies}/>}

            {!(totalPages === 0 || totalPages === 1) && 

                <Pagination 
                className={styles.moviesPagination}
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

export default Movies;