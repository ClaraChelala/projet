import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="secondary" variant="dark" >
  <ReactBootStrap.Navbar.Brand href="#home">IECD internal app</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto"> 
    <Link to="/topics">
    <ReactBootStrap.Nav.Link href="#topics">Topics</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/favorites">
    <ReactBootStrap.Nav.Link href="#favorites">Favorites</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/more">
    <ReactBootStrap.Nav.Link href="#more">
        More
      </ReactBootStrap.Nav.Link>
    </Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;