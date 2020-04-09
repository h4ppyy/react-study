import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './static/css/style.css'

import Header from './components/common/Header'
import Footer from './components/common/Footer'

import Index from './components/pages/Index'
import Test from './components/pages/Test'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route exact path="/test">
            <Test />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App;
