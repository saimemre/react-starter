import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {  PrivateRoute, PublicRoute } from "./helpers";

import { setToken } from './utils/axios';

import Header from './pages/Header';
import Sidebar from './pages/Sidebar';
import Login from './pages/Login';
import PlayerList from './pages/PlayerList';

const AppRouter = () => (
  <Router>
    <div>
      
      <Switch>
        <PublicRoute path="/" component={PlayerList} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

