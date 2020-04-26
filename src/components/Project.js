import React, { Component } from 'react';
import './Project.scss';
import Mattina from '../assets/mattina.PNG';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Project extends Component {
    render() {
        return(
            <div className="project_wrap" id="Project">
                <div className="project_title">
                    <h1>Project</h1>
                </div>               
                <div className="project_box">
                    <div className="project_img">
                        <a href="https://github.com/wjdrk70/mattina"><img src={Mattina} width="100%" height="400px" className="imges"/></a>
                    </div>
                    <div className="project_info">
                        <p>Skyscanner API를 활용한 실시간 항공권 검색</p>
                        <a href="https://github.com/wjdrk70/mattina"><FontAwesomeIcon icon={faGithubAlt} size="2x"/>GitHub</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Project;