import styles from './SectionTitle.module.css';

const SectionTitle = props => {
    const title               = props.children;
    const titleWordCount      = title.split(' ').length;
    let formattedText         = title;
    const firstLineWordsCount = parseInt(props.firstLineWordsCount) ? parseInt(props.firstLineWordsCount) : 1;

    if(titleWordCount < 2 || firstLineWordsCount === 1) {

        return (
            <h2 className={`${styles.SectionTitle} ${props.className ? props.className : ''}`}>{formattedText}</h2>
        );

    }
    
    // wrap the rest of the text except for the first line words
    const word                = title.split(' ');
    const firstLineWords      = [];
    let loopCount             = firstLineWordsCount;

    // save first line words, word count depends on the specified property "firstLineWordsCount"
    while(loopCount != 0) {

        firstLineWords.push(word.shift());

        loopCount--;
    }

    return (
        <h2 className={`${styles.SectionTitle} ${props.className ? props.className : ''}`}>{firstLineWords.join(' ')} <span>{word.join(' ')}</span></h2>
    );
    
};


export default SectionTitle;