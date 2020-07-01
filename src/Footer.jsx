import React, { Component } from 'react';
import {MDBFooter} from "mdbreact";
import './Footer.css';

class Footer extends Component {
    render()
    {
        return (
            <MDBFooter color="blue" className="font-small pt-4 mt-4">
                    <div className="iconsRef">Icons made by <a href="https://www.artstation.com/pedrocruzc">Pedro Carvalho</a></div>
                   
                    <div className="feedback"><a href="https://forms.gle/8nN5u8vGsJJpBJbw6"> Give us a feedback </a></div>
          </MDBFooter>
        );
    }
}

export default Footer;