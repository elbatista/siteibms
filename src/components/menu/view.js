import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default props => {
    const MenuItem = propsItem => (
        <div className="dd-wrapper" onMouseEnter={propsItem.onMouseEnter} onMouseLeave={propsItem.onMouseLeave}>
            <div className={`dd-header ${props.menuSelected === propsItem.menuSelected ? 'dd-header-selected' : ''}`}>
                <div className="dd-header-title"><Link to={propsItem.link}>{propsItem.title}</Link></div>
            </div>
            {propsItem.children && propsItem.showSubmenu && <div className="dd-list">{propsItem.children}</div>}
        </div>
    );

    return (
        <div className="header-menu">
            <MenuItem title="Home" link="/" menuSelected = "home"/>
            <MenuItem title="A IBMS" link="/sobre" menuSelected = "about" 
                showSubmenu={props.submenuopened==="about"} 
                onMouseEnter={()=>props.setSubmenu("about")}
                onMouseLeave={()=>props.setSubmenu("")}>
                <Link to="/sobre">Nossos Valores</Link>
                <Link to="/sobre">Membresia</Link>
                <Link to="/sobre">Células</Link>
                <Link to="/sobre">Horários</Link>
                <Link to={{pathname: "/sobre", state: {pagina: "historia"}}}>Nossa história</Link>
                <Link to={{pathname: "/sobre", state: {pagina: "pastores"}}}>Famílias Pastorais</Link>
            </MenuItem>
            <MenuItem title="Recursos" link="/recursos" menuSelected = "resource"/>
            <MenuItem title="Cursos" link="/cursos" menuSelected = "course"/>
            <MenuItem title="Ministérios" link="/ministerios" menuSelected = "ministery"
                showSubmenu={props.submenuopened==="ministery"} 
                onMouseEnter={()=>props.setSubmenu("ministery")}
                onMouseLeave={()=>props.setSubmenu("")}>
                <Link to="/ministerios">Criancas: Hangares</Link>
                <Link to="/ministerios">Aborrecentes: Amontoado</Link>
                <Link to="/ministerios">Festa de Levi</Link>
                <Link to="/ministerios">Solteiroes</Link>
                <Link to="/ministerios">Homens</Link>
                <Link to="/ministerios">Donne</Link>
                <Link to="/ministerios">Vechiaia</Link>
                <Link to="/ministerios">Misirica</Link>
                <Link to="/ministerios">Retiro do Jacques</Link>
                <Link to="/ministerios">CR do Gerson</Link>
                <Link to={{pathname: "/ministerios", state: {pagina: "institute"}}}>Instituto</Link>            </MenuItem>
            <MenuItem title="Missōes" link="/missao" menuSelected = "mission"/>
            <MenuItem title="Contribua" link="/contribua" menuSelected = "donate"/>
        </div>
    );

    // return (
    //     <>
    //         <div className={props.menuSelected==='home' ? "menu-selected" : undefined}><Link to="/"><div>Home</div></Link></div>
    //         <div className={props.menuSelected==='about' ? "menu-selected" : undefined} 
    //             onMouseEnter={()=>props.setSubmenu("about")}
    //             onMouseLeave={()=>props.setSubmenu("")}>
    //             <Link to="/sobre"><div>A IBMS</div></Link>
    //             {props.submenuopened==="about" && 
    //             <div className={`menu-dropdown ${props.menuSelected!=='about' ? 'menu-dropdown-margin-up' : ''}`}>
    //                 <Link to="/sobre">Nossos valores</Link>
    //                 <Link to="/sobre">Membresia</Link>
    //                 <Link to="/sobre">Células</Link>
    //                 <Link to="/sobre">Horários</Link>
    //                 <Link to="/sobre">Nossa história</Link>
    //                 <Link to={{pathname: "/sobre", state: {pagina: "pastores"}}}>Famílias Pastorais</Link>
    //             </div>}
    //         </div>
    //         <div className={props.menuSelected === 'resource'  ? "menu-selected" : undefined}><Link to="/recursos"><div>Recursos</div></Link></div>
    //         <div className={props.menuSelected === 'course'    ? "menu-selected" : undefined}><Link to="/cursos"><div>Cursos</div></Link></div>
    //         <div className={props.menuSelected === 'ministery' ? "menu-selected" : undefined}
    //             onMouseEnter={()=>props.setSubmenu("ministery")}
    //             onMouseLeave={()=>props.setSubmenu("")}>
    //             <Link to="/ministerios"><div>Ministérios</div></Link>
    //             {props.submenuopened==="ministery" && 
    //             <div className={`menu-dropdown ${props.menuSelected!=='ministery' ? 'menu-dropdown-margin-up' : ''}`}>
                    // <Link to="/ministerios">Criancas: Hangares</Link>
                    // <Link to="/ministerios">Aborrecentes: Amontoado</Link>
                    // <Link to="/ministerios">Festa de Levi</Link>
                    // <Link to="/ministerios">Solteiroes</Link>
                    // <Link to="/ministerios">Homens</Link>
                    // <Link to="/ministerios">Donne</Link>
                    // <Link to="/ministerios">Vechiaia</Link>
                    // <Link to="/ministerios">Misirica</Link>
                    // <Link to="/ministerios">Retiro do Jacques</Link>
                    // <Link to="/ministerios">CR do Gerson</Link>
                    // <Link to={{pathname: "/ministerios", state: {pagina: "institute"}}}>Instituto</Link>
    //             </div>}
    //         </div>
    //         <div className={props.menuSelected === 'mission'   ? "menu-selected" : undefined}><Link to="/missao"><div>Missōes</div></Link></div>
    //         <div className={props.menuSelected === 'donate'    ? "menu-selected" : undefined}><Link to="/contribua"><div>Contribua</div></Link></div>
    //     </>
    // );
};
