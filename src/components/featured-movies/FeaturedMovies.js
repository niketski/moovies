import styles from './FeaturedMovies.module.css';

import Section from '../ui/section/Section';
import Button from '../ui/button/Button';
import SectionTitle from '../section-title/SectionTitle';
import featuredImg from '../../assets/images/featured-img.jpg';
import FeaturedCard from '../featured-card/FeaturedCard';
import { Link } from 'react-router-dom';

const FeaturedMovies = props => {
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
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default FeaturedMovies;