import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, Nav, NavDropdown, MenuItem,
} from 'react-bootstrap';

const Header = () => (
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
      {localStorage.getItem('@CodeApi:username')
        ? (
          <Nav pullRight>
            <NavDropdown
              eventKey={3}
              title={localStorage.getItem('@CodeApi:username')}
              id="basic-nav-dropdown"
            >
              <MenuItem eventKey={3.1}>Usernsme</MenuItem>
            </NavDropdown>
          </Nav>
        ) : (
          <p />
        ) }

    </Navbar.Collapse>
  </Navbar>
);

export default Header;
