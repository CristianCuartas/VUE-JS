import React from 'react';
import {Switch, Route} from 'react-router-dom';
import App from './App';
import HomePage from './components/HomePage';
import CrearPrototipo from './components/CrearPrototipo';

const AppRouters = () => (
    <App>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/create" component={CrearPrototipo}/>
        </Switch>
    </App>
);
export default AppRouters;