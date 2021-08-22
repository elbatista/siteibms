import React, { useState, useEffect } from 'react';
import firebase from "firebase";
//import { useTranslation } from 'react-i18next';
import './styles.css';

export default () => {
    const [footer, setFooter] = useState();

    useEffect(() => {
        firebase.database()
        .ref("footer")
        .once("value")
        .then(snapshot => setFooter(snapshot.toJSON()));
    }, []);

    return (
        <div className="footer">
            <div className="footer-img"><img alt="logo" src={require('../../assets/images/ibms 2020 w 1.png')}/></div>
            <div className="footer-vl"/>
            <div className="footer-text">
                {footer && Object.keys(footer.linhas["pt-br"]).map(key=><p key={key}>{footer.linhas["pt-br"][key]}</p>) }
                <p>&#169; {new Date().getFullYear()} {footer?.copyright['pt-br']}</p>
            </div>
        </div>
    );
};
