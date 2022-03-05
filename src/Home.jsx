import React from "react";
import Navigation from "./Navigation"
import Footer from "./Footer"
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Button, Nav, NavLink, UncontrolledDropdown, NavbarBrand, NavItem, Container, DropdownToggle, DropdownItem, NavbarText,DropdownMenu } from 'reactstrap';
import { Outlet, Link } from 'react-router-dom';

export default function Home() {
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
          <h5>About BeehiveR</h5>

⚠️The app is still in early development stage.

BeehiveR is an open source project for small scala beekeepers. With this app beekeepers can keep a log of their beehives and access information about other beehives. All information gathered is open and accessible to registered beekeepers. All registered beekeepers will also be able to ask for advice to the community.

<br/>
<br/>
<h5>Seigr Huset DAO</h5>
BeehiveR is the first open source project of the Seigr Huset's Lab. Although the DAO and it's rooms are still in early development, it is already creating the frames for the community to grow. Seigr Huset DAO has a notion <Link to="https://seigr.notion.site/">workspace</Link>. Check it for more information about the DAO and its rooms.
<br/>
<br/>
<h5>Want to join the Seigr Huset community?</h5>

We are looking for adventurous collaborators and community members, contact us at hello@seigr.app if you would like to join us.

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
  
  