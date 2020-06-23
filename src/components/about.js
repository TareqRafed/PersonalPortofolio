import React from 'react';
import "../css/about/about.css"
import "../css/about/bounce.css";

function animateText(title){ // add a class for every letter that changes the color and the font.
    let animated = [];
    for(let i=0;i<title.length;i++){
        animated.push(<span className="changeColorLetter">{title[i]}</span>);
        }
    return animated;

}



let myBio = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`

function About (props){
    return <div className="about">
        <h1 className="bounce text-white">{animateText("Hey I'm Tareq ;)")}</h1>
        <h1 className="bounce text-white">{animateText("A web developer.")}</h1>
        <p className="text-muted bounce">Fullstack Developer/ Mobile apps developer</p>
<p className="text-white mt-5">{myBio}</p>
    </div>
}

export default About;