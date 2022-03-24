import { useState } from 'react';
import { FcTodoList } from 'react-icons/fc'
//import { GiBeehive } from 'react-icons/io'
import { TiDeleteOutline } from 'react-icons/ti'
import { GiBeehive } from "react-icons/gi";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApiariesAdd from "./ApiariesAdd"
import { Alert, Row, Col, Button, Nav, NavLink, CardText, CardTitle, Card, Container, DropdownToggle, DropdownItem, NavbarText,DropdownMenu } from 'reactstrap';
import Navigation from './Navigation';
import Footer from './Footer';

const Apiaries = () => {
  const [count] = useState(0);
  const [apiaries] = useState([]);

  return (
    <Container>
      <Navigation />
      <br/>
      <br/>
      <br/>
      <br/>
      <Alert color="warning">
    <div className="Apiaries-card">
      <div className="App-header">
        <h3><GiBeehive style={{ position: "relative", top: "-0.1rem", paddingRight: "0.25rem" }} />Register a new apiary</h3>
      </div>
      <ApiariesAdd />
      <div className="List-view">
        {apiaries && apiaries.map((apiariesItem) => (
          <Apiaries key={apiariesItem.id} {...apiariesItem} />
        ))}
      </div>
    </div>
    </Alert>
    <Footer />
    </Container>
  );
}

export default Apiaries;
