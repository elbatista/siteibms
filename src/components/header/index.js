import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../menu';
import './styles.css';

export default () => {
    return (
        <div className="header">
            <Link to="/"><div className="header-img"><img alt='icone' src={require('../../assets/images/Icon.svg')}/></div></Link>
            <Menu/>
            <div className="header-store">
                <a href="https://ibmsstore.smartpos.app/" target="_blank" rel="noopener noreferrer">
                    IBMS Store
                </a>
                <a href="https://www.facebook.com/igrejabatista.montserrat" target="_blank" rel="noopener noreferrer">
                    <img src={require('../../assets/images/face.svg')} alt='face'/>
                </a>
                <a href="https://www.instagram.com/ibmspoa/" target="_blank" rel="noopener noreferrer">
                    <img src={require('../../assets/images/insta.svg')} alt='insta'/>
                </a>
                <a href="https://www.youtube.com/user/IBMSVIDEO" target="_blank" rel="noopener noreferrer">
                    <img src={require('../../assets/images/youtube.svg')} alt='youtube'/>
                </a>
            </div>
        </div>
    );
};
