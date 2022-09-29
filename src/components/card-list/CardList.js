import styles from './CardList.module.css';
import FeaturedCard from "../featured-card/FeaturedCard";
import featuredImg from '../../assets/images/featured-img.jpg'

const CardList = props => {
    return (
        <div className={`${styles.cardList} ${props.className ? props.className : ''}`}>
            {props.cards.map((card, index) => {
                return (
                    <FeaturedCard
                        key={index}
                        width="209"
                        height="282"
                        className={styles.cardListCard}
                        link={card.link}
                        featuredImage={card.featuredImage}
                        title={card.title}
                        details={card.details}
                    />
                );
            })}
        </div>
    );
};

export default CardList;