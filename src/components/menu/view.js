import React from 'react';
import { Link } from 'react-router-dom';
//import { useTranslation } from 'react-i18next';
import './styles.css';

export default props => {
    //const { t } = useTranslation();
    return (
        <>
            <div className={props.menuSelected==='home' ? "menu-selected" : undefined}><Link to="/"><div>Home</div></Link></div>
            <div className={props.menuSelected==='about' ? "menu-selected" : undefined} 
                onMouseEnter={()=>props.setSubmenu("about")}
                onMouseLeave={()=>props.setSubmenu("")}>
                <Link to="/sobre"><div>A IBMS</div></Link>
                {props.submenuopened==="about" && <div className="menu-dropdown">
                    <Link to="/sobre">Nossos valores</Link>
                    <Link to="/sobre">Membresia</Link>
                    <Link to="/sobre">Celulas</Link>
                    <Link to="/sobre">Horarios</Link>
                    <Link to="/sobre">Contatos</Link>
                    <Link to="/missao">Pastores</Link>
                </div>}
            </div>
            <div className={props.menuSelected === 'resource'  ? "menu-selected" : undefined}><Link to="/recursos"><div>Recursos</div></Link></div>
            <div className={props.menuSelected === 'course'    ? "menu-selected" : undefined}><Link to="/cursos"><div>Cursos</div></Link></div>
            <div className={props.menuSelected === 'ministery' ? "menu-selected" : undefined}><Link to="/ministerios"><div>Ministérios</div></Link></div>
            <div className={props.menuSelected === 'mission'   ? "menu-selected" : undefined}><Link to="/missao"><div>Missōes</div></Link></div>
            <div className={props.menuSelected === 'donate'    ? "menu-selected" : undefined}><Link to="/contribua"><div>Contribua</div></Link></div>
        </>
    );
};
