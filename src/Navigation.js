import React from "react";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link } from 'react-router-dom';
import Home from "./Home";
import User from "./User";
import Apiary from "./Apiary";
import ApiaryRegister from "./ApiaryRegister"
import { Navbar, NavbarToggler, Collapse, Nav, NavLink, UncontrolledDropdown, NavbarBrand, NavItem, Container, DropdownToggle, DropdownItem, NavbarText,DropdownMenu } from 'reactstrap';


export default function Navigation() {

  return (
    <div>
          <nav>
          <Container>
  
  <Navbar
    color="warning"
    expand="md"
    fixed="top"
    full
    light
  >
  <NavbarBrand>
    <Link to="/Home" element={Home}>
  Beehiver
  </Link>
  </NavbarBrand>
  <NavbarToggler onClick={function noRefCheck(){}} />
          <Collapse navbar>
            <Nav className="me-auto"
              navbar>

              <NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/User" element={User}>
                 User
                 </Link>
                 </NavLink>
              </NavItem>
              </NavItem>
              <UncontrolledDropdown
                inNavbar
                nav
              >
                <DropdownToggle
                  caret
                  nav
                >
                  Apiaries
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <Link to="/ApiaryRegister" element={ApiaryRegister}>
                    Register new apiary
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    View registered apiaries
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>
              put hello user name here
            </NavbarText>
          </Collapse>
          </Navbar>
        </Container>
  
          </nav>
          <Outlet />
      </div>
    );
  }