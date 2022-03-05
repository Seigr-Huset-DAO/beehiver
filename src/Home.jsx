import React from "react";
import Navigation from "./Navigation"
import Footer from "./Footer"
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
    return (
      <React.Fragment>
<Navigation />,
    <div id="home">
      <br/>
      <h1>Beehiver</h1><br/>
      <Footer />

      </div>
    </React.Fragment>
    );
  }
  
  