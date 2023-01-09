import styles from './DetailsTrailer.module.css';

const DetailsTrailer = props => {
    const { key, name } = props.video;
    return (
        <div className={styles.detailsPageTrailer}>
            <h3>Watch Trailer:</h3>
            <div className={styles.trailerVideo}>
                <iframe width="1140" height="640" src={`https://www.youtube.com/embed/${key}`} frameBorder="0" title={name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
        </div>  
    );
};

export default DetailsTrailer;