import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRouter';

import Login from '../views/login';
import SingUp from '../views/SingUp';
import Lesson from '../views/Lesson';
import ModuleRegister from '../views/ModuleRegister';
import Panel from '../views/Panel';
import Alternative from '../views/Alternative';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/singup" component={SingUp} />
      <PrivateRoute exact path="/" component={Lesson} />
      <PrivateRoute path="/module" component={ModuleRegister} />
      <PrivateRoute path="/panel" component={Panel} />
      <PrivateRoute path="/alternative" component={Alternative} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
