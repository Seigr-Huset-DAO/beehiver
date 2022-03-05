import React from "react";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link } from 'react-router-dom';
import Home from "./Home";
import User from "./User";
import Apiaries from "./Apiaries";
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
                <NavItem>
                <NavLink>
                  <Link to="/Apiaries" element={Apiaries}>
                  Apiaries
                  </Link>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown
                inNavbar
                nav
              >
                <DropdownToggle
                  caret
                  nav
                >
                  Seigr Huset DAO
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    DAO's webpage
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    The Lab
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