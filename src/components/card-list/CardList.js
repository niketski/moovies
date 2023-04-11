import { useCallback } from 'react';
import styles from './CardList.module.css';
import FeaturedCard from "../featured-card/FeaturedCard";
import featuredImg from '../../assets/images/featured-img.jpg'

const CardList = props => {

    const CardListContent = useCallback(() => {
        
        if(props.cards.length) {

            return props.cards.map((card, index) => {
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
            });

        }  else {

            return <div className={styles.cardListMessage}>No results found.</div>;

        }
    }, []);
    
    return (
        <div className={`${styles.cardList} ${props.className ? props.className : ''}`}>
           {<CardListContent/>}
        </div>
    );
};

export default CardList;