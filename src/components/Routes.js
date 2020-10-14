import React from 'react'

import { Router, Switch, Route } from 'react-router'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import NotFound from '../NotFound'

import {history} from '../history'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route component={Login} exact path= "/login" />
            <Route component={Register} exact path= "/register" />
            <Route component={Home} exact path= "/" />
            <Route component={NotFound}/>
        </Switch>
    </Router>
)

export default Routes