import styles from './RelatedMovies.module.css';
import FeaturedCard from '../featured-card/FeaturedCard';
import featuredImg from '../../assets/images/featured-img.jpg';
import Slider from 'react-slick';
import TMDBApi from '../../api/tmdb-api';
const movieApi = new TMDBApi;

const RelatedMovies = props => {
    const similarList = props.similarList;
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

                    {similarList.map((similarItem, index) => {

                        return (
                            <FeaturedCard
                                key={index}
                                className={styles.relatedMoviesCard}
                                link={similarItem.link}
                                featuredImage={similarItem.image}
                                title={similarItem.name}
                            />
                        );

                    })}
                </Slider>
            </div>
        </div>
    );
};

export default RelatedMovies;