import React from 'react';
import {Nav,Navbar} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Navegation(){

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/getKudos">MagicKudos</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="mr-auto">
            <Nav.Link href="/createUsers">Create User</Nav.Link>
            <Nav.Link href="/createKudos">Create Kudo</Nav.Link>
            <Nav.Link href="/getKudos">Get Kudos</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    );
}