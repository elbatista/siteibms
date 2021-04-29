import React from 'react';
//import { useTranslation } from 'react-i18next';
import './styles.css';

export default () => {
    //const { t } = useTranslation();
    return (
        <div className="footer">
            <div className="footer-img"><img alt="logo" src={require('../../assets/images/ibms 2020 w 1.png')}/></div>
            <div className="footer-vl"/>
            <div className="footer-text">
                <p>Rua 18 de Novembro, Navegantes - Porto Alegre-RS</p>
                <p>Plantão pastoral: Seg a Sex: 8h às 12h e 13h às 18h</p>
                <p><a href={"tel:+55 51 33305187"}>(51) 3330-5187</a> / <a href={"tel: +55 51 997825968"}>9.9782-5968</a> ou <a href={"mailto:secretaria@igrejabatista.org.br"}>secretaria@igrejabatista.org.br</a></p>
                <p>&#169; 2020 por Igreja Batista Mont’Serrat</p>
            </div>
        </div>
    );
};
