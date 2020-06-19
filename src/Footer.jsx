import React, { Component } from 'react';
import {MDBContainer, MDBFooter } from "mdbreact";
import './Footer.css';

class Footer extends Component {
    render()
    {
        return (
            <MDBFooter color="blue" className="font-small pt-4 mt-4">
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.daitan.com/"> Daitan Group </a>
                </MDBContainer>
            </div>
            </MDBFooter>
        );
    }
}

export default Footer;