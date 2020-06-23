import React, {useState} from 'react';
import MenuIcon from "../assets/menu.png";
import '../css/sideBar.css';
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
    
        <div className="sideBar"><Menu isOpen={isOpen} handeClick={handleClick()}  /> </div>
        
       
        
    </div>
      
    );
}

function Menu(props){
    return(
        <div className={props.isOpen ? "open":"closed"}>
        <a href="#">About me</a>
        <a href="#">Projects</a>
        <a href="#">Contact me</a>
        <a onClick={() => props.handeClick()}  href="#">X</a>
        </div>
    );
}

export default MenuButton;