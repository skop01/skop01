import React, {Component} from 'react';
import  './Skills.scss';

import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import vue from '../assets/vue.png';
import react from '../assets/react.png';


// import './Skills.scss';

class Skills extends Component{
    render() {
        return(
           <div className="container2">
               <div className="skils">
                    <h2>Skills</h2>
               </div>
               <div className="content1">
               <div className="img">
                    <div className="html"><img src={ html } alt="img" height="200" width="200" /></div>
                    <div className="css"><img src={ css } alt="img" height="220" width="220" /></div>
                    <div className="js"><img src={ js } alt="img" height="190" width="195" /></div>
                    <div className="vue"><img src={ vue } alt="img" height="170" width="160" /></div>
                    <div className="react"><img src={ react } alt="img" height="180" width="180" /></div>
               </div>
               </div>
           </div>
        )
    }
};

export default Skills;