import styles from './Hero.module.css';
import Button from '../ui/Button';

const Hero = props => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroInner}>
                <div className={styles.heroBanner}>
                    <canvas width="1600" height={props.height}></canvas>
                    <img className="heroBannerImage" src={props.bannerImage} alt={props.bannerTitle}/>
                </div>
                <div className={styles.heroContent}>
                    <div className="container">
                        <h2>{props.bannerTitle}</h2>
                        <p>{props.bannerDescription}</p>
                        <Button className="bannerCta" to={props.ctaLink}>Watch Now</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;