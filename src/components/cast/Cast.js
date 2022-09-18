import styles from './Cast.module.css';
import featuredImage from '../../assets/images/featured-img.jpg';

const Cast = props => {
    return (
        <div className={`${styles.cast} ${props.className ? props.className : ''}`}>
            <h2>Cast</h2>
            <div className={styles.castList}>
                <div className={styles.castItem}>
                    <div className={styles.castImg}>
                        <canvas width="185" height="249"></canvas>
                        <img src={featuredImage} alt="Cast Image"/>
                    </div>
                    <div className={styles.castDetails}>
                        <h3>John Doe</h3>  
                        <p>Character: Sample Character</p>
                    </div>
                </div>
                <div className={styles.castItem}>
                    <div className={styles.castImg}>
                        <canvas width="185" height="249"></canvas>
                        <img src={featuredImage} alt="Cast Image"/>
                    </div>
                    <div className={styles.castDetails}>
                        <h3>John Doe</h3>  
                        <p>Character: Sample Character</p>
                    </div>
                </div>
                <div className={styles.castItem}>
                    <div className={styles.castImg}>
                        <canvas width="185" height="249"></canvas>
                        <img src={featuredImage} alt="Cast Image"/>
                    </div>
                    <div className={styles.castDetails}>
                        <h3>John Doe</h3>  
                        <p>Character: Sample Character</p>
                    </div>
                </div>
                <div className={styles.castItem}>
                    <div className={styles.castImg}>
                        <canvas width="185" height="249"></canvas>
                        <img src={featuredImage} alt="Cast Image"/>
                    </div>
                    <div className={styles.castDetails}>
                        <h3>John Doe</h3>  
                        <p>Character: Sample Character</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cast;