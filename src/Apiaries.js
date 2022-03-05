import React, { useState }  from "react";
import Navigation from "./Navigation"
import Footer from "./Footer"
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Button, Nav, NavLink, CardText, CardTitle, Card, Container, DropdownToggle, DropdownItem, NavbarText,DropdownMenu } from 'reactstrap';
import ApiaryRegister from "./ApiaryRegister"

export default function Apiaries() {

  //popup apiary register //

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
 


  return (
    <React.Fragment>
      <Container>
<Navigation />,
<div>
  <br/>
  <br/>
<h1>Apiaries</h1>
<br/>
</div>
<p>Register your apiary</p>

<div>
  <Button
    color="warning"
    size="sm" value="Register"
    onClick={togglePopup}
  >
    Register
  </Button>

    {isOpen && <ApiaryRegister
     content={<>
      <Card body color="warning" inverse>
         <CardTitle tag="h5">Register your apiary</CardTitle>
         <CardText>put the code here</CardText>
         <Button>Save</Button>
         </Card>
      </>}
      handleClose={togglePopup}
    />}


</div>
<Footer />
</Container>
</React.Fragment>

  );
}

