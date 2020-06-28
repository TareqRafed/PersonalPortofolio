import React, {useState} from 'react';
import MenuIcon from "../assets/menu.png";
import '../css/header/sideBar.css';
function MenuButton(props) {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        console.log(isOpen);
       return () => setIsOpen(!isOpen);
    }

    return (
        <div>
        <div className="d-lg-none menu">
            <img src={MenuIcon} onClick={handleClick()} ></img>    
        </div> 
    
        <div className="sideBar"><Menu scrollTo={props.scrollTo} isOpen={isOpen} handeClick={handleClick()}  /> </div>
        
       
        
    </div>
      
    );
}

function Menu(props){
    const handleMenuClick = (position) => { 
        position && props.scrollTo(position);
        props.handeClick();
    }
    return(
        <div className={props.isOpen ? "open":"closed"}>
        <a onClick={() => handleMenuClick("about")}>About me</a>
        <a onClick={() => handleMenuClick("projects")}>Projects</a>
        <a onClick={() => handleMenuClick("contact")}>Contact me</a>
        <a onClick={() => handleMenuClick()}>X</a>
        </div>
    );
}

export default MenuButton;