import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/style.css";

import Header from "../components/Header";
import SingUp from "./SingUp";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  showSingUpForm = () => (
    <SingUp />
  );

  render() {
    return (
      <div>
        <Header />
        <div className="loginf d-flex flex-column justify-content-center align-items-center">
          <div className="login aling-middle">
            <form>
              <FormGroup controlId="formInlineUser">
                <ControlLabel>Username: </ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.username}
                  placeholder="Username"
                />
              </FormGroup>{" "}
              <FormGroup controlId="formInlinePassword">
                <ControlLabel>Password: </ControlLabel>
                <FormControl
                  type="password"
                  value={this.state.password}
                  placeholder="password"
                />
                <small>
                  <Link to="#">Forgot account?</Link>
                </small>
              </FormGroup>{" "}
              <Button type="submit" bsStyle="primary" bsSize="large" block>
               Sing In
              </Button>
              <Button
                type="button"
                bsStyle="success"
                bsSize="large"
                block
              
              >
                 <Link to='/singup'>Sing Up</Link>
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
