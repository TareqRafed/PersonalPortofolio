import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll'
import '../css/projects.css';

function Projects(props) {
    return <div className="projects">
        <div>
            <h2 className="mt-5 mb-5">Check out!</h2>
            <ScrollContainer className="slider">
                <div className="text-white box">Hey</div>
                <div className="text-white box">Hey</div>
                <div className="text-white box">Hey</div>
                <div className="text-white box">Hey</div>
            </ScrollContainer >
        </div>
    </div>
}

export default Projects;