import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from '../screens/home';
import Mission from '../screens/mission';
import MissionEngagement from '../screens/mission/engagement';
import About from '../screens/about';
import Resource from '../screens/resource';
import Course from '../screens/course';
import Ministery from '../screens/ministery';
import Donate from '../screens/donate';
import Admin from '../screens/admin';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/missao">
                <Mission/>
            </Route>
            <Route path="/missao/campanha/:id">
                <MissionEngagement/>
            </Route>
            <Route path="/sobre">
                <About/>
            </Route>
            <Route path="/recursos">
                <Resource/>
            </Route>
            <Route path="/cursos">
                <Course/>
            </Route>
            <Route path="/ministerios">
                <Ministery/>
            </Route>
            <Route path="/contribua">
                <Donate/>
            </Route>
            <Route path="/admin">
                <Admin/>
            </Route>
        </Switch>
    </BrowserRouter>
);
