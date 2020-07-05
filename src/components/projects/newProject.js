import React from 'react';
import { AiFillGithub, AiFillCodepenCircle } from 'react-icons/ai';
import { MdAttachFile } from 'react-icons/md';

export const CreateProjects = (ProjectsfromApi) => {
  let jsxReturn = [], i;
  if(!ProjectsfromApi) return <h1 className="text-white">Error loading projects,</h1>
  for(i=0;  i<ProjectsfromApi.length; i++){
      jsxReturn.push(turnProjectIntoJsx(ProjectsfromApi[i]));
  }
  return jsxReturn;
    
}

const turnProjectIntoJsx = (project) =>{
  return (
    <div className="text-white box">
    <div className="box-tile">
        <div className="tile-img">
          {project.github && <a href={project.github}><AiFillGithub /></a> }  
          {project.codepen && <a href={project.codepen}><AiFillCodepenCircle /></a >}  
          {project.other && <a href={project.other}><MdAttachFile /></a> }  
        </div>
    </div>
    <img alt='' src={project.background}></img>
 </div>
    ); 
}

