import React from 'react';
import {Nav,Navbar} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navegation.css';


export default function Navegation(){

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/getKudos">MagicKudos</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/createKudos">Give a kudo</Nav.Link>
            <Nav.Link href="https://docs.google.com/forms/d/1w3yBJwgJNfDJme0cprs1NMd8puLrEqZEKo-_2dPITgA/edit?ts=5eed000c">Give a Feedback</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}