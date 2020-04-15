import React from 'react';
import {Link} from 'react-router-dom';


export default function Nav(){

    const navStyle = {
        color : 'white'
    };

    return (
        <nav>
            <ul className="nav-links">
                <Link style={navStyle} to="/">
                    <li>Magic Kudo</li>
                </Link>
                <Link style={navStyle} to="/user">
                    <li>Create User</li>
                </Link>
                
                <Link style={navStyle} to="/kudo">
                    <li>Create Kudo</li>
                </Link>
            </ul>
        </nav>
    );
}