import styles from './BurgerMenuButton.module.css';

const BurgerMenuButton = props => {
    return (
        <button className={`${styles.BurgerMenuButton} ${props.className ? props.className : ''}`}  onClick={props.onClick} type="button" aria-label="Menu">
            <em></em>
            <em></em>
            <em></em>
        </button>
    );
};

export default BurgerMenuButton;