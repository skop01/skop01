import React, {Component} from 'react';
import  './Skills.scss';

import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import vue from '../assets/vue.png';
import react from '../assets/react.png';


class Skills extends Component{
    render() {
        return(
          
            <div className="Skills-wrap" id="Skills">
                <div className="Skills_title">
                    <h1>Skills</h1>
                </div>
                <div className="img-icon">       
                    <div className="langu"><img src={ html } alt="img" height="140" width="140" /></div>
                    <div className="langu"><img src={ css } alt="img" height="150" width="150" /></div>
                    <div className="langu"><img src={ js } alt="img" height="130" width="135" /></div>
                    <div className="langu"><img src={ vue } alt="img" height="100" width="100" /></div>
                    <div className="langu"><img src={ react } alt="img" height="120" width="120" /></div>                
                </div>
            </div>
        )
    }
};

export default Skills;