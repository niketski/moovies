import React from 'react';
import styles from './FeaturedCard.module.css';
import { Link } from 'react-router-dom';
import PlayButton from "../ui/play-button/PlayButton";

const FeaturedCard = props => {
    const cardWidth = props.width ? props.width : '277';
    const cardHeight = props.height ? props.height : '374';

    return (
        <div className={`${styles.FeaturedCard} ${props.className ? props.className : ''}`}>
            <Link to={props.link}>
                <div className={styles.FeaturedCardImage}>
                    <canvas width={cardWidth} height={cardHeight}></canvas>
                    <img src={props.featuredImage} alt={props.title}/>
                    <PlayButton/>
                </div>
                <h4>{props.title}</h4>
                {
                    props.details && <p>{props.details}</p>
                }
            </Link>
        </div>
    );
};

export default React.memo(FeaturedCard);