import styles from './FeaturedTv.module.css';
import Slider from 'react-slick';
import { useState, useEffect } from 'react';

import Section from '../ui/section/Section';
import SectionTitle from '../section-title/SectionTitle';
import Button from '../ui/button/Button';
import featuredImg from '../../assets/images/featured-img.jpg';
import FeaturedCard from '../featured-card/FeaturedCard';
import { Link } from 'react-router-dom';

import TMDBApi from '../../api/tmdb-api';
const movieApi = new TMDBApi;

const FeaturedTv = props => {
    const [tvSeries, setTvSeries] = useState([]);
    const fetchTvSeries = async () => {
        const response = await movieApi.getTvSeries();
        const data     = await response.json();

        setTvSeries(data.results);

    };
    const slickSettings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
                breakpoint: 481,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
            }
        ]
    };

    useEffect(() => {

        fetchTvSeries();

    }, []);

    return (
        <Section className={styles.SectionFeaturedTv}>
            <div className='site-wrapper'>
                <div className={styles.FTvRow}>
                    <div className={styles.FTvRight}>
                        <div className={styles.FTvContent}>
                            <SectionTitle firstLineWordsCount="2" className={styles.FTvTitle}>Latest Tv Series</SectionTitle>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <Button className={styles.FTvBtn} to="/tv-series">View More</Button>
                        </div>
                    </div>
                    <div className={styles.FTvLeft}>
                        <div className={styles.FTvList}>
                        <Slider {...slickSettings}>

                            {tvSeries && tvSeries.map(tv => {
                                const imagePoster = movieApi.getImagePosterUrl(tv.poster_path);

                                return (
                                    <FeaturedCard
                                        key={tv.id}
                                        className={styles.FeaturedMoviesCard}
                                        link={`/details/tv/${tv.id}`}
                                        featuredImage={imagePoster}
                                        title={tv.name}
                                    />
                                );

                            })}
                           
                        </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default FeaturedTv;