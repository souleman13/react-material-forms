import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NotFound from './pages/NotFound'
import Login from './pages/login'
import ForgotPW from './pages/forgotPW'
import RegisterUser from './pages/registration/newUser'
import Dashboard from './pages/dashboard'

export default () => (
    <Router>
        <Switch>

            <Route exact path="/" component={Dashboard}/>

            <Route exact path="/login" component={Login}/>

            <Route exact path="/user/signup" component={RegisterUser}/>

            <Route exact path="/user/reset" component={ForgotPW}/>

            <Route component={NotFound}/>

        </Switch>
    </Router>
)