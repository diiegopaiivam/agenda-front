import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Dashboard from './../components/dashboard/index';
import Alunos from './../components/alunos/index';
import Responsavel from '../components/responsaveis/index';

export default props => {
    return (
        <Router history={hashHistory}>
            <Route exact path="/" component={Dashboard} />
            <Route path="alunos" component={Alunos} />
            <Route path="responsaveis" component={Responsavel} />
            <Redirect path="*" to="/" />
        </Router>
    )
}