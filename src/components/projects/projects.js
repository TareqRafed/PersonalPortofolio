import React, { useState, useEffect } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll'
import '../../css/projects.css';
import { animateText } from "../effects/effect.js";
import ScrollAnimation from 'react-animate-on-scroll';
import { CreateProjects } from "../projects/newProject.js"

// bounce is in css/about/bounce.css

function Projects(props) {
    const [ProjectsFromApi, SetProjectFromApi] = useState(null);
    const [Loading, SetLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
        const response = fetch('http://192.168.1.20:8000/projects/');
        const data = (await response).json();
        SetProjectFromApi(CreateProjects(await data)); // convert json to jsx and assign it to "ProjectsFromApi"
        SetLoading(false);
        console.log('is it loading?', Loading);
        }
        fetchData();
      }, []);
    return <div className="projects">
        <div>

            <ScrollAnimation animateIn='fadeIn'>
                <div className="headline">
                    <h2 className="bounce">{animateText("Check out!")}</h2> 
                    <hr />
                    <p>Here you can see my latest projects!</p>
                </div>
                <ScrollContainer className="slider">
                    {Loading ? <h1>Loading...</h1> : ProjectsFromApi} 
                </ScrollContainer >
            </ ScrollAnimation>
        </div>
    </div>
}

export default Projects;