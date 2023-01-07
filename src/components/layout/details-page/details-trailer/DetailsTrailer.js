import styles from './DetailsTrailer.module.css';

const DetailsTrailer = props => {
    return (
        <div className={styles.detailsPageTrailer}>
            <h3>Watch Trailer:</h3>
            <div className={styles.trailerVideo}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ScMzIvxBSi4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>  
    );
};

export default DetailsTrailer;