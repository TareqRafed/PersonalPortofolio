import React, {useRef} from 'react';
import ScrollContainer from 'react-indiana-drag-scroll'
import '../css/projects.css';
import {animateText} from "./effects/effect.js";
import ScrollAnimation from 'react-animate-on-scroll';


function Projects(props) {
    const projectsRef = useRef();
    return <div ref={projectsRef} className="projects">
        <div>
            
            
            <div className="headline">
            <ScrollAnimation animateIn='bounceInRight'>
            <h2>{animateText("Check out!")}</h2>
            </ ScrollAnimation>
            </div>

            
            
            <ScrollContainer  className="slider">
                <div className="text-white box">Hey</div>
                <div className="text-white box">Hey</div>
                <div className="text-white box">Hey</div>
                <div className="text-white box">Hey</div>
            </ScrollContainer >
        </div>
    </div>
}

export default Projects;