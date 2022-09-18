import styles from './DetailsPage.module.css';
import BannerGradient from '../../banner-gradient/BannerGradient';
import DetailsFeaturedImage from './details-featured-image/DetailsFeaturedImage';
import DetailsGenreTabs from './details-genre-tabs/DetailsGenreTabs';
import DetailsMeta from './details-meta/DetailsMeta';
import Cast from '../../cast/Cast';
import RelatedMovies from '../../related-movies/RelatedMovies';

const DetailsPage = props => {
    return (
        <div className={styles.detailsPage}>
            <BannerGradient/>
            <div className={styles.detailsPageContent}>
                <div className="container">
                    <div className={styles.detailsPageMain}>
                        <div className={styles.detailsPageMainLeft}>
                            <DetailsFeaturedImage/>
                        </div>
                        <div className={styles.detailsPageMainRight}>
                            <div className={styles.detailsPageMainContent}>
                                <DetailsGenreTabs/>
                                <h1>Thor: Love and Thunder</h1>
                                <DetailsMeta/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco  aboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                    <Cast className={styles.detailsPageCast}/>
                    <RelatedMovies className={styles.detailsPageRelatedMovies}/>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;