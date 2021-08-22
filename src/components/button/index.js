import React from 'react';
import './styles.css';

export default props => {
    return (
        <button disabled={props.disabled} onClick={props.onClick} className={`button ${props.outline ? 'button-outline' : ''}`}>
            {props.icon && <i><img src={props.icon} alt="Icon" /></i>}
            {props.text}
        </button>
    );
};
