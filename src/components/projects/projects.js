import React, { useRef } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll'
import '../../css/projects.css';
import { animateText } from "../effects/effect.js";
import ScrollAnimation from 'react-animate-on-scroll';
import { newProject } from "../projects/newProject.js"

// bounce is in css/about/bounce.css

function Projects(props) {
    return <div className="projects">
        <div>

            <ScrollAnimation animateIn='fadeIn'>
                <div className="headline">
                    <h2 className="bounce">{animateText("Check out!")}</h2> 
                    <hr />
                    <p>Here you can see my latest projects!</p>
                </div>
                <ScrollContainer className="slider">
                    {newProject("https://engineeringgate.com/wp-content/uploads/2019/08/pm-general.jpg","test")}
                    {newProject("https://engineeringgate.com/wp-content/uploads/2019/08/pm-general.jpg","test", "test", "test")}
                    {newProject("https://engineeringgate.com/wp-content/uploads/2019/08/pm-general.jpg","test", "test", "test")}
                    {newProject("https://engineeringgate.com/wp-content/uploads/2019/08/pm-general.jpg","test", "test", "test")}
                    {newProject("https://engineeringgate.com/wp-content/uploads/2019/08/pm-general.jpg","test", "test", "test")}
                    {newProject("https://engineeringgate.com/wp-content/uploads/2019/08/pm-general.jpg","test", "test", "test")}
                    {newProject("https://engineeringgate.com/wp-content/uploads/2019/08/pm-general.jpg","test", "test", "test")}

                </ScrollContainer >
            </ ScrollAnimation>
        </div>
    </div>
}

export default Projects;