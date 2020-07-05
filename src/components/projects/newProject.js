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
          {project.github && <span href={project.github}><AiFillGithub /></span> }  
          {project.codepen && <span href={project.codepen}><AiFillCodepenCircle /></span >}  
          {project.other && <span href={project.other}><MdAttachFile /></span> }  
        </div>
    </div>
    <img alt='' src={project.background}></img>
 </div>
    ); 
}

