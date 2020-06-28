import React from 'react';
import '../css/header/header.css';
function Header(props) {
    return (
        
        <div className="header d-none d-lg-block">
            <ul>
                <li>
                    <a onClick={() => props.scrollTo("about")}>About me</a>
                </li>
                <li>
                    <a onClick={() => props.scrollTo("projects")}>Projects</a>
                </li>
                <li>
                    <a onClick={() => props.scrollTo("contact")}>Contact me</a>
                </li>
            </ul>
        </div>
    );
}

export default Header;