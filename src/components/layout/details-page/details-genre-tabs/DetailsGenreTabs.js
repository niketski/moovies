import styles from './DetailsGenreTabs.module.css';

const DetailsGenreTabs = props => {
    return (
        <div className={styles.detailsGenreTabs}>
            <ul>
                <li>Fantasy</li>
                <li>Drama</li>
            </ul>
        </div>
    );
};

export default DetailsGenreTabs;