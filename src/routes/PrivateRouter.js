import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRouter = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (localStorage.getItem('@CodeApi:username') ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    ))
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default withRouter(connect(
  mapStateToProps,
)(PrivateRouter));
