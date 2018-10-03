import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Navbar } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar className='bg-dark' inverse={true} collapseOnSelect bsStyle='inverse'>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="#" className="navbar-brand" style={{color: '#FFF'}}>
                Learn English
              </Link>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

export default Header;
