import React, { Component } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import Login from './pages/Login';
import Browse from './pages/Browse';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Switch>
    );
  }
}
