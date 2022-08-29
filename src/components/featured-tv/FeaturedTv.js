import styles from './FeaturedTv.module.css';
import Slider from 'react-slick';

import Section from '../ui/section/Section';
import SectionTitle from '../section-title/SectionTitle';
import Button from '../ui/button/Button';
import featuredImg from '../../assets/images/featured-img.jpg';
import FeaturedCard from '../featured-card/FeaturedCard';
import { Link } from 'react-router-dom';

const FeaturedTv = props => {
    const slickSettings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <Section className={styles.SectionFeaturedTv}>
            <div className='site-wrapper'>
                <div className={styles.FTvRow}>
                    <div className={styles.FTvRight}>
                        <div className={styles.FTvContent}>
                            <SectionTitle className={styles.FTvTitle}>Latest Tv Series</SectionTitle>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <Button className={styles.FTvBtn} to="/tv-series">View More</Button>
                        </div>
                    </div>
                    <div className={styles.FTvLeft}>
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
        </Section>
    );
};

export default FeaturedTv;