import styles from './FilterTabs.module.css';
import Button from '../button/Button';

const FilterTabs = props => {
    const align = props.align ? props.align : '';
    let alignClass = '';

    switch(align) {
        case 'center':

            alignClass = styles.tabsCenter;
            
            break;

        case 'right':

            alignClass = styles.tabsRight;
            break;

        default:
            
            alignClass = '';

    }

    return (
        <div className={`${styles.filterTabs} ${props.className ? props.className : ''} ${alignClass}`}>
            <Button to="/">Fantasy</Button>
            <Button to="/">Drama</Button>
            <Button to="/">Romance</Button>
            <Button to="/">Action</Button>
            <Button to="/">Horror</Button>
            <Button to="/">Suspense</Button>
        </div>
    );
};

export default FilterTabs;