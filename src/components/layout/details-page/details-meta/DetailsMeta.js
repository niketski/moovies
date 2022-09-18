import styles from './DetailsMeta.module.css';

const DetailsMeta = props => {
    return (
        <ul className={styles.detailsMeta}>
            <li><span>Realeased date:</span> 2022-10-12</li>
            <li><span>Language:</span> English</li>
            <li><span>Production:</span> Marvel Studios, Square Enix</li>
        </ul>
    );
}

export default DetailsMeta;