import React from 'react';
import { Link } from 'react-router-dom';
//import { useTranslation } from 'react-i18next';
import './styles.css';

export default props => {
    //const { t } = useTranslation();
    return (
        <>
            <div className={props.menuSelected==='home' ? "menu-selected" : undefined}><Link to="/">Home</Link></div>
            <div className={props.menuSelected==='about' ? "menu-selected" : undefined}><Link to="/sobre">A IBMS</Link></div>
            <div className={props.menuSelected==='resource' ? "menu-selected" : undefined}><Link to="/recursos">Recursos</Link></div>
            <div className={props.menuSelected==='course' ? "menu-selected" : undefined}><Link to="/cursos">Cursos</Link></div>
            <div className={props.menuSelected==='ministery' ? "menu-selected" : undefined}><Link to="/ministerios">Ministérios</Link></div>
            <div className={props.menuSelected==='mission' ? "menu-selected" : undefined}><Link to="/missao">Missōes</Link></div>
            <div className={props.menuSelected==='donate' ? "menu-selected" : undefined}><Link to="/contribua">Contribua</Link></div>
        </>
    );
};
