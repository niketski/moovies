import styles from './BannerGradient.module.css';
import banner from '../../assets/images/details-page-banner.jpg';

const BannerGradient = props => {
    let image = props.image;

    return (
        <div className={`${styles.bannerGradient} ${props.className ? props.className : ''}`}>
            <canvas width="1600" height="450"></canvas>
            {image != null ? <img src={props.image} alt={props.alt}/> : null }
        </div>
    );
};

export default BannerGradient;