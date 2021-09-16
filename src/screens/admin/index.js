import React, { useState } from "react";
import firebase from "firebase";
import Button from '../../components/button';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import Footer from './footer';
import Valores from './values';
import 'react-pro-sidebar/dist/css/styles.css';
import './styles.css';

export default () => {
    
    const pages = {};
    pages["home"] = "Home Page";
    pages["values"] = <Valores/>;
    pages["history"] = "Historia Page";
    pages["pastors"] = "Pastores Page";
    pages["footer"] = <Footer/>;
    const [pageSelected, setPage] = useState(pages["home"]);
    const [user, setUser] = useState();
    const [userName, setUserName] = useState("ibms.site.firebase@gmail.com");
    const [userPwd, setUserPwd] = useState("aquioamornaopara");
    const auth = firebase.auth();
    auth.onAuthStateChanged(userSigned => setUser(userSigned));

    if(!user){
        return (
            <>
            <p>Login</p>
            <input type="text" placeholder="e-mail" onChange={event => setUserName(event.target.value)} value={userName} />
            <input type="password" placeholder="senha" security="true" onChange={event => setUserPwd(event.target.value)} value={userPwd} />
            <Button text="Entrar" onClick={()=>{auth.signInWithEmailAndPassword(userName, userPwd).catch(error=>alert(error.message || error));}}/>
            </>
        );
    }

    return (
        <div className="app">
            <ProSidebar >
                <SidebarHeader>
                    <h2>Site IBMS Adm Page</h2>
                    <p>Usuário Logado: {user.email}</p>
                </SidebarHeader>
                <SidebarContent>
                    <Menu>
                        <MenuItem onClick={()=>setPage(pages["home"])}>Home</MenuItem>
                        <SubMenu title="A IBMS">
                            <MenuItem onClick={()=>setPage(pages["values"])}>Nossos Valores</MenuItem>
                            <MenuItem onClick={()=>setPage(pages["history"])}>Nossa história</MenuItem>
                            <MenuItem onClick={()=>setPage(pages["pastors"])}>Familias pastorais</MenuItem>
                        </SubMenu>
                        <MenuItem onClick={()=>setPage(pages["footer"])}>Footer</MenuItem>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    <Button text="Sair" onClick={() => {
                        auth.signOut();
                        setUserName("");
                        setUserPwd("");
                    }}/>
                </SidebarFooter>
            </ProSidebar>
            <main>{pageSelected}</main>
        </div>
    );
}