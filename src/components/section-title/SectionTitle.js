import styles from './SectionTitle.module.css';

const SectionTitle = props => {
    const title = props.children;
    const titleWordCount = title.split(' ').length;
    let formattedText = title;

    if(titleWordCount < 2) {

        return (
            <h2>{formattedText}</h2>
        );

    }
    
    // wrap the rest of the text except for the first word
    const word      = title.split(' ');
    const firstWord = word.shift();
    
    return (
        <h2 className={`${styles.SectionTitle} ${props.className ? props.className : ''}`}>{firstWord} <span>{word.join(' ')}</span></h2>
    );
    
};


export default SectionTitle;