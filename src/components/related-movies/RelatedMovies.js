import styles from './RelatedMovies.module.css';
import FeaturedCard from '../featured-card/FeaturedCard';
import featuredImg from '../../assets/images/featured-img.jpg';

const RelatedMovies = props => {
    return (
        <div className={`${styles.relatedMovies} ${props.className ? props.className : ''}`}>
            <h2>You May Also Like</h2>
            <div className={styles.relatedMoviesList}>
                <FeaturedCard
                    className={styles.relatedMoviesCard}
                    link="/"
                    featuredImage={featuredImg}
                    title="Thor: Love and Thunder"
                />
                <FeaturedCard
                    className={styles.relatedMoviesCard}
                    link="/"
                    featuredImage={featuredImg}
                    title="Thor: Love and Thunder"
                />
                <FeaturedCard
                    className={styles.relatedMoviesCard}
                    link="/"
                    featuredImage={featuredImg}
                    title="Thor: Love and Thunder"
                />
                <FeaturedCard
                    className={styles.relatedMoviesCard}
                    link="/"
                    featuredImage={featuredImg}
                    title="Thor: Love and Thunder"
                />
            </div>
        </div>
    );
};

export default RelatedMovies;