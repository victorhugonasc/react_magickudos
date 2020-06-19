import React, { Component } from 'react';
import {MDBContainer, MDBFooter,MDBRow,MDBCol} from "mdbreact";
import './Footer.css';

class Footer extends Component {
    render()
    {
        return (
            <MDBFooter color="blue" className="font-small pt-4 mt-4">
                  <div className="iconsRef">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    <div className="copyright">&copy; {new Date().getFullYear()} Copyright: <a href="https://www.daitan.com/"> Daitan Group </a></div>
                    <div className="feedback"><a href="https://forms.gle/8nN5u8vGsJJpBJbw6"> Give us a feedback </a></div>
          </MDBFooter>
        );
    }
}

export default Footer;