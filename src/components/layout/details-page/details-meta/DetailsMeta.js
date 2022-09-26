import styles from './DetailsMeta.module.css';

const DetailsMeta = props => {
    const {release_date, first_air_date, lang, production} = props.meta;
    const language = lang.join(', ');
    const productions = production.join(', ');

    return (
        <ul className={styles.detailsMeta}>
            {release_date && <li><span>Realeased date:</span> {release_date}</li>}
            {first_air_date && <li><span>First air date:</span> {first_air_date}</li>}
            <li><span>Language:</span> {language}</li>
            {productions && <li><span>Production:</span> {productions}</li>}
        </ul>
    );
}

export default DetailsMeta;