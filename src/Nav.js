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
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to="/createUsers">
                    <li>Create Users</li>
                </Link>
                <Link style={navStyle} to="/getUsers">
                    <li>Get Users</li>
                </Link>
                <Link style={navStyle} to="/createKudos">
                    <li>Create Kudos</li>
                </Link>
                <Link style={navStyle} to="/getKudos">
                    <li>Get Kudos</li>
                </Link>
            </ul>
        </nav>
    );
}