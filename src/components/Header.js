import React, {Component} from 'react';
import './Header.scss';

class Header extends Component{
    render() {
        return(
            <div className="header-wrap">
                <div className="header-menu">
                    <ul>
                        <li>
                            <a href="#">Project</a>
                        </li>
                        <li>
                            <a href="#">Skills</a>
                        </li>
                        <li>
                            <a href="#">Profile</a>
                        </li>                        
                    </ul>
                </div>
            </div>
        )
    }
};

export default Header;