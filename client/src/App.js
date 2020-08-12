import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar.js';
import Landing from './components/layout/Landing.js';
import Routes from './components/routing/Routes.js';

import { Provider } from 'react-redux';
import { loadUser } from './actions/auth.js';
import setAuthToken from './utils/setAuthToken.js';
import store from './store.js';

import './App.css';

const App = () => {
  <Provider>
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route component={Routes} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>;
};

export default App;
