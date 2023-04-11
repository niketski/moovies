import React from 'react';
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
            {props.tabs.map((tab, index) => {
                return (

                    <Button 
                        onClick={props.clickHandler ? (e) => { e.preventDefault();  props.clickHandler(tab.id); } : null } 
                        key={index} 
                        className={props.activeTabs.includes(tab.id) ? styles.activeTab : null}
                        to="/">
                            {tab.name}
                    </Button>

                );
            })}
        </div>
    );
};

export default React.memo(FilterTabs);