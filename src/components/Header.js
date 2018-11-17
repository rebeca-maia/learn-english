import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Navbar, Nav, NavDropdown, MenuItem,
} from 'react-bootstrap';
import { logout } from '../actions/authAction';

class Header extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  sair = () => {
    const { history } = this.props;
    logout(history);
  };

  render() {
    return (
      <Navbar className="navbar-default" inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/#" className="navbar-brand" style={{ color: '#FFF' }}>
              Learn English
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {localStorage.getItem('@CodeApi:username') ? (
            <Nav pullRight>
              <NavDropdown
                eventKey={3}
                title={localStorage.getItem('@CodeApi:username')}
                id="basic-nav-dropdown"
              >
                <MenuItem eventKey={3.1}>Usernsme</MenuItem>
                <MenuItem eventKey={3.1} onClick={this.sair}>
                  Sair
                </MenuItem>
              </NavDropdown>
            </Nav>
          ) : (
            <p />
          )}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(connect(null, { logout })(Header));
