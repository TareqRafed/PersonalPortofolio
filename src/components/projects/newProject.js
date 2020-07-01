import React from 'react';
import { AiFillGithub, AiFillCodepenCircle } from 'react-icons/ai';
import { MdAttachFile } from 'react-icons/md';

export const newProject = (background, github, codepen, other) => {
    return (
   <div className="text-white box">
   <div className="box-tile">
       <div className="tile-img">
         {github && <span href="{github}"><AiFillGithub /></span> }  
         {codepen && <span href="{codepen}"><AiFillCodepenCircle /></span >}  
         {other && <span href="{other}"><MdAttachFile /></span> }  
       </div>
   </div>
   <img src={background}></img>
</div>
   );
}

