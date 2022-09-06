import styles from './FeaturedMovies.module.css';
import Slider from 'react-slick';

import Section from '../ui/section/Section';
import Button from '../ui/button/Button';
import SectionTitle from '../section-title/SectionTitle';
import featuredImg from '../../assets/images/featured-img.jpg';
import FeaturedCard from '../featured-card/FeaturedCard';
import { Link } from 'react-router-dom';

const FeaturedMovies = props => {
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

    return (
        <Section className={styles.SectionFeaturedMovies}>
            <div className="site-wrapper">
                <div className={styles.FmRow}>
                    <div className={styles.FmLeft}>
                        <div className={styles.FmContent}>
                            <SectionTitle className={styles.FmTitle}>Latest Movies</SectionTitle>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <Button className="FmBtn" to="/movies">View More</Button>
                        </div>
                    </div>
                    <div className={styles.FmRight}>
                        <div className={styles.FmList}>
                            <Slider {...slickSettings}>
                                <FeaturedCard
                                    className={styles.FeaturedMoviesCard}
                                    link="/"
                                    featuredImage={featuredImg}
                                    title="Thor: Love and Thunder"
                                />
                                <FeaturedCard
                                    className={styles.FeaturedMoviesCard}
                                    link="/"
                                    featuredImage={featuredImg}
                                    title="Thor: Love and Thunder"
                                />
                                <FeaturedCard
                                    className={styles.FeaturedMoviesCard}
                                    link="/"
                                    featuredImage={featuredImg}
                                    title="Thor: Love and Thunder"
                                />
                                <FeaturedCard
                                    className={styles.FeaturedMoviesCard}
                                    link="/"
                                    featuredImage={featuredImg}
                                    title="Thor: Love and Thunder"
                                />
                                <FeaturedCard
                                    className={styles.FeaturedMoviesCard}
                                    link="/"
                                    featuredImage={featuredImg}
                                    title="Thor: Love and Thunder"
                                />
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default FeaturedMovies;