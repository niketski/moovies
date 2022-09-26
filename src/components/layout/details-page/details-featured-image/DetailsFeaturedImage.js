import styles from './DetailsFeaturedImage.module.css';

const DetailsFeaturedImage = props => {
    let image = props.image;

    return (
        <div className={styles.detailsPageFeaturedImg}>
            <canvas width="359" height="484"></canvas>
            {image != null ? <img src={props.image} alt={props.alt}/> : null}
        </div>
    );
};

export default DetailsFeaturedImage;