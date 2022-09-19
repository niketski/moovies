import styles from './RelatedMovies.module.css';
import FeaturedCard from '../featured-card/FeaturedCard';
import featuredImg from '../../assets/images/featured-img.jpg';
import Slider from 'react-slick';

const RelatedMovies = props => {
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
                slidesToShow: 3,
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
        <div className={`${styles.relatedMovies} ${props.className ? props.className : ''}`}>
            <h2>You May Also Like</h2>
            <div className={styles.relatedMoviesList}>
                <Slider {...slickSettings}>
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
                </Slider>
            </div>
        </div>
    );
};

export default RelatedMovies;