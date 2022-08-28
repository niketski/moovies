import styles from './PlayButton.module.css';

const PlayButton = props => {
    return (
        <button className={`${styles.PlayBtn} ${props.className ? props.className : ''}`} aria-label="Play">
            <span className={styles.IconPlay}></span>
        </button>
    );
};

export default PlayButton;