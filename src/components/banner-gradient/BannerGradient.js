import styles from './BannerGradient.module.css';
import banner from '../../assets/images/details-page-banner.jpg';

const BannerGradient = props => {
    return (
        <div className={styles.bannerGradient}>
            <canvas width="1600" height="450"></canvas>
            <img src={banner} alt="Banner"/>
        </div>
    );
};

export default BannerGradient;