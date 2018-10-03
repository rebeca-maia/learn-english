import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./views/login";
import SingUp from "./views/SingUp";
import "./App.css";
import store from "./store";
import ModuleBar from "./components/ModuleBar";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <div>
              <Route path="/login" component={Login} />
              <Route path="/singup" component={SingUp} />
              <Route path='/bar' component={ModuleBar}/>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
