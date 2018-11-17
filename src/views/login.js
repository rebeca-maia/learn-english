import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import {
  authenticati,
} from '../actions/authAction';

class Login extends Component {
  static propTypes = {
    authenticati: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.autenticauser = this.autenticauser.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  autenticauser(e) {
    e.preventDefault();
    // eslint-disable-next-line no-shadow
    const { authenticati, history } = this.props;
    const { username, password } = this.state;
    authenticati({ username, password }, history);
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="body-background">
        <Header />
        <div className="loginf">
          <div className="login aling-middle">
            <Form name="form" onSubmit={e => this.autenticauser(e)}>
              <FormGroup controlId="formInlineUser">
                <ControlLabel>Username: </ControlLabel>
                <FormControl
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Username"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup controlId="formInlinePassword">
                <ControlLabel>Password: </ControlLabel>
                <FormControl
                  name="password"
                  type="password"
                  value={password}
                  placeholder="password"
                  onChange={this.onChange}

                />
                <small>
                  <Link to="/#">Forgot account?</Link>
                </small>
              </FormGroup>
              <Button
                type="submit"
                onClick={this.autenticauser}
                bsStyle="primary"
                bsSize="large"
                block
              >
                Sing In
              </Button>
              <Button
                type="button"
                bsStyle="success"
                bsSize="large"
                block

              >
                <Link to="/singup">Sing Up</Link>
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  username: state.singupReducer.username,
  password: state.singupReducer.password,
});

export default connect(
  mapStateToProps,
  {
    authenticati,
  },
)(Login);
