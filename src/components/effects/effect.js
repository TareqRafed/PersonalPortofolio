import React from 'react';


export const animateText = (title) => { // add a class for every letter to animate it in css.
    let animated = title.split('').map( (i,y) => i ===' '? i : <span key={i+y} className="changeColorLetter">{i}</span>)
    
    return animated;
}


