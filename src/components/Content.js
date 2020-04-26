import React, {Component} from 'react';
import {faPhoneAlt,faEnvelope,faHome,} from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Content.scss';
import mypicture from '../assets/mypicture.jpg';

class Content extends Component{
    render() {
        return(
            <div className="about-wrap" id="About">
                <div className="title">
                    <h1>About me</h1>
                </div>                
                <div className="contain">
                    <div className="picture">
                        <img src={mypicture}/>
                    </div>                                            
                    <div className="content">
                        <p>Lost in your mind I wanna know Am I losing my mind? Never let me go If this night is not forever At least we are together
                            I know I'm not alone I know I'm not alone Anywhere, whenever Apart, but still together I know I'm not alone I know I'm not alone
                            I know I'm not alone I know I'm not alone Unconscious mind I'm wide awake Wanna feel one last time Take my pain away If this night is not forever
                            At least we are together I know I'm not alone I know I'm not alone Anywhere, whenever Apart, but still together I know I'm not alone I know I'm not alone
                            I know I'm not alone I know I'm not alone I'm not alone, I'm not alone I'm not alone, I know I'm not alone I'm not alone, I'm not alone I'm not alone, I know I'm not alone</p>
                    </div>                    
                </div>
                <div className="icons">
                    <ul>
                        <li>                      
                            <a href="mailto:skop01@naver.com"><FontAwesomeIcon icon={faEnvelope} size="2x" color="#4b4c4e"/></a> 
                        </li>                       
                        <li>
                            <a href="https://github.com/skop01/"><FontAwesomeIcon icon={faGithubSquare} size="2x" color="#4b4c4e"/></a>      
                        </li>
                        <li>
                            <a href="https://skop01.github.io/skop01/"><FontAwesomeIcon icon={faHome} size="2x" color="#4b4c4e"/></a>   
                        </li>
                    </ul>
                </div>
            </div>
           
        )
    }
};

export default Content;