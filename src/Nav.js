import React from 'react';
import {Link} from 'react-router-dom';


export default function Nav(){

    const navStyle = {
        color : 'white'
    };

    return (
        <nav>
            <ul className="nav-links">
                <Link style={navStyle} to="/getKudos">
                    <li>Get Kudos</li>
                </Link>
            </ul>
        </nav>
    );
}