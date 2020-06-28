import React, { useRef } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll'
import '../css/projects.css';
import { animateText } from "./effects/effect.js";
import ScrollAnimation from 'react-animate-on-scroll';


function Projects(props) {
    const projectsRef = useRef();
    return <div ref={projectsRef} className="projects">
        <div>

            <ScrollAnimation animateIn='fadeIn'>
                <div className="headline">
                    <h2>{animateText("Check out!")}</h2>
                </div>
                <ScrollContainer className="slider">
                    <div className="text-white box"><img src="https://engineeringgate.com/wp-content/uploads/2019/08/pm-general.jpg"></img></div>
                    <div className="text-white box">Hey</div>
                    <div className="text-white box">Hey</div>
                    <div className="text-white box">Hey</div>
                </ScrollContainer >
            </ ScrollAnimation>
        </div>
    </div>
}

export default Projects;