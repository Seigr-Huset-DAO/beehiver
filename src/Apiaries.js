import React from "react";
import Navigation from "./Navigation"
import Footer from "./Footer"
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Button, Nav, NavLink, UncontrolledDropdown, NavbarBrand, NavItem, Container, DropdownToggle, DropdownItem, NavbarText,DropdownMenu } from 'reactstrap';

export default function Apiaries() {
  return (
    <React.Fragment>
      <Container>
<Navigation />,
<div>
  <br/>
  <br/>
<h1>Apiaries</h1>
<br/>
<p>Here you will be able to  register your apiaries and update beehives. All work done in the beehives can be updated through a simple form. All info will be accesible, downloadable and visualized.</p>
</div>
<Footer />
</Container>
</React.Fragment>

  );
}

