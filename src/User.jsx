import React from "react";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Login"
import Navigation from "./Navigation"
import Footer from "./Footer"

export default function User() {
    return (
      <React.Fragment>
<Navigation />,
    <div id="login">
      <br/>
      <br/>
      <Login />
      </div>
      <Footer />
    </React.Fragment>
  );
  }