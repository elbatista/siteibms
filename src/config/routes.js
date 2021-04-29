import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from '../screens/home';
import Mission from '../screens/mission';
import About from '../screens/about';
import Resource from '../screens/resource';
import Course from '../screens/course';
import Ministery from '../screens/ministery';
import Donate from '../screens/donate';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/missao">
                <Mission/>
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
        </Switch>
    </BrowserRouter>
);
