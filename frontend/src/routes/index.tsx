import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/registro" component={SingUp} />
  </Switch>
);

export default Routes;
