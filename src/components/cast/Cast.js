import styles from './Cast.module.css';
import featuredImage from '../../assets/images/featured-img.jpg';

const Cast = props => {
    const cast = props.cast;

    return (
        <div className={`${styles.cast} ${props.className ? props.className : ''}`}>
            <h2>Cast</h2>
            <div className={styles.castList}>
                {cast.map((castItem, index) => {
                    return (
                        <div key={index} className={styles.castItem}>
                            <div className={styles.castImg}>
                                <canvas width="185" height="249"></canvas>
                                <img src={castItem.image} alt={cast.name}/>
                            </div>
                            <div className={styles.castDetails}>
                                <h3>{castItem.name}</h3>  
                                {castItem.character_name && <p>Character: {castItem.character_name}</p>}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Cast;