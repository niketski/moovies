import styles from './DetailsGenreTabs.module.css';

const DetailsGenreTabs = props => {
   
    return (
        <div className={styles.detailsGenreTabs}>
            <ul>
                {props.genres.map((genre, index) => {
                    return (
                        <li key={index}>{genre}</li>
                    );
                })}
            </ul>
        </div>
    );
};

export default DetailsGenreTabs;