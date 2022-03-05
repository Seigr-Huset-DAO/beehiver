import React from "react";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Login"
import Navigation from "./Navigation"
import Footer from "./Footer"
import { Row, Col, Button, Nav, NavLink, UncontrolledDropdown, NavbarBrand, NavItem, Container, DropdownToggle, DropdownItem, NavbarText,DropdownMenu } from 'reactstrap';

export default function User() {
    return (
      <React.Fragment>
<Navigation />,
<Container>
    <div id="login">
      <br/>
      <br/>
      <Login />
      </div>
      <Footer />
      </Container>
    </React.Fragment>
  );
  }