import React, { Component } from 'react';
import {MDBFooter} from "mdbreact";
import './Footer.css';

import { AwesomeButtonSocial } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";

class Footer extends Component {
    render()
    {
        return (
            <MDBFooter color="blue" className="font-small">
                <div className="footerItems">
                    <span className="iconsRef">Icons made by <a href="https://www.artstation.com/pedrocruzc">Pedro Carvalho</a></span>
                    <AwesomeButtonSocial type="github" href="https://github.com/victorhugonasc?tab=repositories">
                        Source
                    </AwesomeButtonSocial>
                    <a href="https://forms.gle/8nN5u8vGsJJpBJbw6"> Give us a feedback </a>
                </div>
            </MDBFooter>
        );
    }
}

export default Footer;