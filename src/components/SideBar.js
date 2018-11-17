import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { UncontrolledCollapse } from 'reactstrap';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="painel">
        <Nav bsStyle="pills" stacked style={{ width: 280 }}>
          <NavItem eventKey={1} href="/#">
            Cursos
          </NavItem>
          <NavItem eventKey={1} href="/#">
            Graficos
          </NavItem>
          <NavItem eventKey={1} id="conf">
            Configurações
          </NavItem>
          <UncontrolledCollapse toggler="#conf">
            <Nav>
              <NavItem eventKey={1} href="/#">
                Cursos
              </NavItem>
              <NavItem eventKey={1} href="/#">
                Graficos
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
          <NavItem eventKey={1} id="mod">
            Modulos
          </NavItem>
          <UncontrolledCollapse toggler="#mod">
            <Nav>
              <NavItem eventKey={1} href="/#">
                Cursos
              </NavItem>
              <NavItem eventKey={1} href="/#">
                Graficos
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Nav>
      </div>
    );
  }
}
export default Sidebar;
