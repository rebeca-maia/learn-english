import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRouter';

import Login from '../views/login';
import SingUp from '../views/SingUp';
import Lesson from '../views/Lesson';
import ModuleRegister from '../views/ModuleRegister';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/singup" component={SingUp} />
      <PrivateRoute exact path="/" component={Lesson} />
      <PrivateRoute path="/module" component={ModuleRegister} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
