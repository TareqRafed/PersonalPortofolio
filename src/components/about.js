import React from 'react';
import "../css/about/about.css"
import "../css/about/bounce.css";
import { animateText } from "./effects/effect.js";
import ScrollAnimation from 'react-animate-on-scroll';
import Arrow from "../assets/arrow-down.png";
import { AiFillGithub, AiFillCodepenCircle, AiTwotoneMail } from 'react-icons/ai';



let myBio = `I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction. I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand.
 `

function About(props) {
   

    return <div className="about">
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
                    <p className="text-white mt-5 ">{myBio} <hr /> <a href="http://github.com/tareqrafed"><AiFillGithub /></a>  <a href="http://codepen.io/tareqrafed"><AiFillCodepenCircle /></a>  <a href="mailto:tareq.rafed22@gmail.com"><AiTwotoneMail /></a></p>
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