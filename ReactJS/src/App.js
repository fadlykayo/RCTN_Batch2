import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from "react-redux";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import store from './configs';

import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      isLogin: false
    };
  };

  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/logout' render={(props) => <Logout isLogin={this.state.isLogin}/>} />
            <Route path='/home' component={Home} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
