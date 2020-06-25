import React from 'react';


export const animateText = (title) => { // add a class for every letter to animate it in css.
    let animated = title.split('').map( (i) => i===' '? i :<span className="changeColorLetter">{i}</span>)
    return animated;

}


