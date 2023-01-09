import styles from './DetailsPage.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import BannerGradient from '../../banner-gradient/BannerGradient';
import DetailsTrailer from './details-trailer/DetailsTrailer';
import DetailsFeaturedImage from './details-featured-image/DetailsFeaturedImage';
import DetailsGenreTabs from './details-genre-tabs/DetailsGenreTabs';
import DetailsMeta from './details-meta/DetailsMeta';
import Cast from '../../cast/Cast';
import RelatedMovies from '../../related-movies/RelatedMovies';

import castImagePlaceholder from '../../../assets/images/user-placeholder.jpg';
import itemPlaceholder from '../../../assets/images/movie-placeholder.jpg';
import TMDBApi from '../../../api/tmdb-api';
import apiConfig from '../../../api/tmdb-api.config';
const movieApi = new TMDBApi;

const DetailsPage = props => {
    const params = useParams();
    const [currentData, setCurrentData]     = useState(null);
    const [currentDataId, setCurrentDataId] = useState(null);
    const [cast, setCast]                   = useState(null);
    const [similar, setSimilar]             = useState(null);
    const [trailer, setTrailer]             = useState(null);
    const id     = params.id;
    const type   = params.type; 

    const generateGenres = genres => {

        return genres.map(genre => genre.name);
    };
    const generateMeta = currentData => {
        return {
            release_date: currentData.release_date,
            first_air_date: currentData.first_air_date,
            lang: currentData.spoken_languages.map(item => item.english_name),
            production: currentData.production_companies.map(item => item.name)
        }
    };
    const generateCasts = casts => {
        return casts.map(cast => {
            return {
                image: cast.profile_path ? movieApi.getImagePosterUrl(cast.profile_path) : castImagePlaceholder,
                name: cast.original_name,
                character_name: cast.character
            };
        });
    };

    const generateSimilar = similarList => {

        return similarList.map(similarItem => {
            return {
                name: similarItem.title,
                image: movieApi.getImagePosterUrl(similarItem.poster_path),
                link: `/details/${type}/${similarItem.id}`
            };
        });

    };

    const fetchSimilar = async () => {
        const response = await movieApi.getSimilar(type, id);
        const data     = await response.json();

        setSimilar(data.results);
    };

    const fetchDetails = async () => {
        const response = await movieApi.getDetails(type, id);
        const data     = await response.json();

        console.log(data);

        setCurrentData(data);
        setCurrentDataId(data.id);

    };

    const fetchCasts = async () => {
        const response = await movieApi.getCasts(type, currentDataId);
        const data     = await response.json();

        setCast(data.cast);
    };

    const fetchTrailer = async () => {
        const response = await movieApi.getVideos(type, id);
        const data     = await response.json();

        const trailer = data.results.filter(video => {
            return video.type === "Trailer";
        });

        setTrailer(trailer[0]);
        console.log(data);
    }

    useEffect(() => {

        fetchDetails();
        fetchSimilar();
        fetchTrailer();
        window.scroll(0,0);

    }, [id]);

    useEffect(() => {

        if(currentDataId) {
            fetchCasts();
        }
        

    }, [currentDataId]);
    
    
    return (
        <div className={styles.detailsPage}>
            {currentData ? 
                <BannerGradient 
                    className={styles.detailsBanner} 
                    image={currentData.backdrop_path ? movieApi.getImageBackdropUrl(currentData.backdrop_path, apiConfig.backdropSizes.large) : itemPlaceholder}  
                    alt={currentData.title}/> : 

                <BannerGradient 
                    className={styles.detailsBanner} 
                    image={itemPlaceholder} 
                    alt="Details Banner"/>}

            <div className={styles.detailsPageContent}>
                <div className="container">
                    
                    {trailer && <DetailsTrailer video={trailer}/>}

                    <div className={styles.detailsPageMain}>
                        <div className={styles.detailsPageMainLeft}>
                            {currentData ? 
                                <DetailsFeaturedImage 
                                    image={currentData.poster_path ? movieApi.getImagePosterUrl(currentData.poster_path) : itemPlaceholder} 
                                    alt={currentData.title}/> :

                                <DetailsFeaturedImage 
                                    image={itemPlaceholder} 
                                    alt="Featured Image"/>
                            }
                        </div>
                        <div className={styles.detailsPageMainRight}>
                            <div className={styles.detailsPageMainContent}>
                                {currentData && 
                                    
                                    <DetailsGenreTabs genres={generateGenres(currentData.genres)}/>
                                }
                                <h1>{ currentData ? currentData.title || currentData.name : null }</h1>
                                {currentData && <DetailsMeta meta={generateMeta(currentData)}/>}
                                <p>{currentData && currentData.overview}</p>
                            </div>
                        </div>
                    </div>
                    {cast && <Cast className={styles.detailsPageCast} cast={generateCasts(cast)}/>}
                    {similar && <RelatedMovies className={styles.detailsPageRelatedMovies} similarList={generateSimilar(similar)}/>}
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;