import React from "react";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link } from 'react-router-dom';
import Home from "./Home";
import User from "./User";
import Apiary from "./Apiary";
import { Col, Row, Navbar, NavbarToggler, Collapse, Nav, NavLink, UncontrolledDropdown, NavbarBrand, NavItem, Container, DropdownToggle, DropdownItem, NavbarText,DropdownMenu } from 'reactstrap';
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function App() {
  return (
    <React.Fragment>
        
    <Container>
<Navigation />,
<Col>

<div id="home">
  <br/>
  <br/>
  <h3>Beehiver</h3>
  
  <container fluid="sm">
    <Row>
      <Col xs="5">
      <h5>Welcome to BeehiveR</h5>


</Col>
</Row>

<br/>
<br/>
<br/>
<Footer />
  </container>


  </div>
  </Col>

  </Container>
</React.Fragment>
);
}
