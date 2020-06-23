import React from 'react';
import '../css/header.css';
function Header(props) {
    return (
        <div className="header d-none d-lg-block">
            <ul>
                <li>
                    <a>About me</a>
                </li>
                <li>
                    <a>Projects</a>
                </li>
                <li>
                    <a>Contact me</a>
                </li>
            </ul>
        </div>
    );
}

export default Header;