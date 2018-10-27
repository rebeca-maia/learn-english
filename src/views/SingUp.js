import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  FormGroup, ControlLabel, FormControl, Button,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { modificaName, modificaPassword, modificaUsename } from '../actions/singupAction';

class SingUp extends Component {
  constructor(props) {
    super(props);
    this.passwordhandle = this.passwordhandle.bind(this);
    this.state = {
      retryPassword: '',
    };
  }

  getValidationState() {
    const { retryPassword } = this.state;
    const { password } = this.props;

    if (retryPassword === password) {
      return 'success';
    }
    return 'warning';
  }

  passwordhandle = (e) => {
    this.setState({ retryPassword: e.target.value });
  };

  render() {
    const { username, name, password } = this.props;
    return (
      <div className="body-background">
        <div className="loginf d-flex flex-column justify-content-center align-items-center">
          <div className="login aling-middle">
            <form>
              <FormGroup controlId="formInlineName">
                <ControlLabel>Name: </ControlLabel>
                <FormControl
                  type="text"
                  value={name}
                  placeholder="Name"
                  onChange={e => this.props.modificaName(e.target.value)}
                />
              </FormGroup>
              {' '}
              <FormGroup controlId="formInlineUser">
                <ControlLabel>Username: </ControlLabel>
                <FormControl
                  type="text"
                  value={username}
                  placeholder="Username"
                  onChange={e => this.props.modificaUsename(e.target.value)}
                />
              </FormGroup>
              {' '}
              <FormGroup controlId="formInlinePassword">
                <ControlLabel>Password: </ControlLabel>
                <FormControl
                  type="password"
                  value={password}
                  placeholder="password"
                  onChange={e => this.props.modificaPassword(e.target.value)}
                />
              </FormGroup>
              {' '}
              <FormGroup
                controlId="formInlineRetryPassword"
                validationState={this.getValidationState()}
              >
                <ControlLabel>Retry Password: </ControlLabel>
                <FormControl
                  type="password"
                  value={this.state.retryPassword}
                  placeholder="retry password"
                  onChange={this.passwordhandle}
                />
              </FormGroup>
              {' '}
              <Link to="/login">
                <Button type="button" bsStyle="primary" bsSize="large" block>
                  Sing In
                </Button>
              </Link>
              <Button type="submit" bsStyle="success" bsSize="large" block>
                Sing Up
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.singupReducer.name,
});

SingUp.propTypes = {
  password: PropTypes.string,
  name: PropTypes.string,
  username: PropTypes.string,
  modificaName: PropTypes.func.isRequired,
  modificaPassword: PropTypes.func.isRequired,
  modificaUsename: PropTypes.func.isRequired,
};
/**
SingUp.defaultProps = {
  password: '',
  name: '',
  username: '',
};
*/
export default connect(
  mapStateToProps,
  {
    modificaName,
    modificaUsename,
    modificaPassword,
  },
)(SingUp);
