import React, {useRef} from 'react';
import "../css/about/about.css"
import "../css/about/bounce.css";
import { animateText } from "./effects/effect.js";
import ScrollAnimation from 'react-animate-on-scroll';
import Arrow from "../assets/arrow-down.png";




let myBio = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, `

function About(props) {
   

    return <div ref={props.ref} className="about">
        <ScrollAnimation animateIn='fadeIn'>
            <div>
                <div className="fixed-div">
                    <h1 className="bounce text-white">{animateText("Hey I'm Tareq ;)")}</h1>
                </div>
                <div className="fixed-div">
                    <h1 className="bounce text-white">{animateText("I build amazing experiences")}</h1>
                </div>
                <div className="mt-2">
                    <p className="secondary-color-text bounce ">Fullstack Developer/ Mobile apps developer</p>
                </div>
                <div>
                    <p className="text-white mt-5 ">{myBio}</p>
                </div>
                <div className="mt-5">
                    <h3 className="text-white">See my work!</h3>
                    <img onClick={() => props.scrollTo("projects")} src={Arrow} className=" arrow-down"></img>
                </div>
            </div>
        </ScrollAnimation>
    </div>

}

export default About;