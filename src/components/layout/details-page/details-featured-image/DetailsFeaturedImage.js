import styles from './DetailsFeaturedImage.module.css';
import FeaturedImg from '../../../../assets/images/featured-img.jpg';

const DetailsFeaturedImage = props => {
    return (
        <div className={styles.detailsPageFeaturedImg}>
            <canvas width="359" height="484"></canvas>
            <img src={FeaturedImg} alt="Featured Image"/>
        </div>
    );
};

export default DetailsFeaturedImage;