import React from 'react';
//import { useTranslation } from 'react-i18next';
import Menu from '../menu';
import './styles.css';

export default () => {
    //const { t } = useTranslation();
    return (
        <div className="header">
            <div className="header-img">
                <img alt='icone' src={require('../../assets/images/Icon.svg')}/>
            </div>
            <div className="menu"><Menu/></div>
            <div className="header-store">
                <label>IBMS Store</label>
                <img src={require('../../assets/images/face.png')} alt='face'/>
                <img src={require('../../assets/images/insta.png')} alt='insta'/>
                <img src={require('../../assets/images/youtube.png')} alt='youtube'/>
            </div>
        </div>
    );
};
