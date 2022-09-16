import styles from './CardList.module.css';
import FeaturedCard from "../featured-card/FeaturedCard";
import featuredImg from '../../assets/images/featured-img.jpg'

const CardList = props => {
    return (
        <div className={`${styles.cardList} ${props.className ? props.className : ''}`}>
            <FeaturedCard
                width="209"
                height="282"
                className={styles.cardListCard}
                link="/"
                featuredImage={featuredImg}
                title="Thor: Love and Thunder"
                details="2022 . Horror | Drama"
            />
            <FeaturedCard
                width="209"
                height="282"
                className={styles.cardListCard}
                link="/"
                featuredImage={featuredImg}
                title="Thor: Love and Thunder"
                details="2022 . Horror | Drama"
            />
            <FeaturedCard
                width="209"
                height="282"
                className={styles.cardListCard}
                link="/"
                featuredImage={featuredImg}
                title="Thor: Love and Thunder"
                details="2022 . Horror | Drama"
            />
            <FeaturedCard
                width="209"
                height="282"
                className={styles.cardListCard}
                link="/"
                featuredImage={featuredImg}
                title="Thor: Love and Thunder"
                details="2022 . Horror | Drama"
            />
            <FeaturedCard
                width="209"
                height="282"
                className={styles.cardListCard}
                link="/"
                featuredImage={featuredImg}
                title="Thor: Love and Thunder"
                details="2022 . Horror | Drama"
            />
            <FeaturedCard
                width="209"
                height="282"
                className={styles.cardListCard}
                link="/"
                featuredImage={featuredImg}
                title="Thor: Love and Thunder"
                details="2022 . Horror | Drama"
            />
            <FeaturedCard
                width="209"
                height="282"
                className={styles.cardListCard}
                link="/"
                featuredImage={featuredImg}
                title="Thor: Love and Thunder"
                details="2022 . Horror | Drama"
            />
            <FeaturedCard
                width="209"
                height="282"
                className={styles.cardListCard}
                link="/"
                featuredImage={featuredImg}
                title="Thor: Love and Thunder"
                details="2022 . Horror | Drama"
            />
            <FeaturedCard
                width="209"
                height="282"
                className={styles.cardListCard}
                link="/"
                featuredImage={featuredImg}
                title="Thor: Love and Thunder"
                details="2022 . Horror | Drama"
            />
            <FeaturedCard
                width="209"
                height="282"
                className={styles.cardListCard}
                link="/"
                featuredImage={featuredImg}
                title="Thor: Love and Thunder"
                details="2022 . Horror | Drama"
            />
            <FeaturedCard
                width="209"
                height="282"
                className={styles.cardListCard}
                link="/"
                featuredImage={featuredImg}
                title="Thor: Love and Thunder"
                details="2022 . Horror | Drama"
            />
            <FeaturedCard
                width="209"
                height="282"
                className={styles.cardListCard}
                link="/"
                featuredImage={featuredImg}
                title="Thor: Love and Thunder"
                details="2022 . Horror | Drama"
            />
            <FeaturedCard
                width="209"
                height="282"
                className={styles.cardListCard}
                link="/"
                featuredImage={featuredImg}
                title="Thor: Love and Thunder"
                details="2022 . Horror | Drama"
            />
            <FeaturedCard
                width="209"
                height="282"
                className={styles.cardListCard}
                link="/"
                featuredImage={featuredImg}
                title="Thor: Love and Thunder"
                details="2022 . Horror | Drama"
            />
            <FeaturedCard
                width="209"
                height="282"
                className={styles.cardListCard}
                link="/"
                featuredImage={featuredImg}
                title="Thor: Love and Thunder"
                details="2022 . Horror | Drama"
            />
        </div>
    );
};

export default CardList;