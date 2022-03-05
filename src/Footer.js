import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavLink, NavbarBrand, NavItem, NavbarText } from 'reactstrap';
import React from 'react'
import { Container } from 'reactstrap'
import { Link, Route, HashRouter,
    NavLink as RRNavLink } from "react-router-dom"
import Home from "./Home";
      
function Footer() {
  return (
    <div>
    <Container>

  <Navbar
    color="secondary"
    dark
    expand="md"
    fixed="bottom"
    full
    light
  >
  <NavbarBrand>
    <Link to="/Home" element={Home}>
  Beehiver
  </Link>
  </NavbarBrand>


      <NavbarText>
        Developed at the Seigr Huset's Lab
      </NavbarText>
  </Navbar>
  </Container>
  </div>
 );
}

export default Footer;