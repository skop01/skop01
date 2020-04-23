import React, {Component} from 'react';
import './Header.scss';

class Header extends Component{
    render() {
        return(
            <div className="header-wrap">
                <div className="header-menu">
                    <ul>
                        <li onClick={()=>{document.querySelector('#Home').scrollIntoView();}}>  
                        Home
                        </li>
                        <li onClick={()=>{document.querySelector('#About').scrollIntoView();}}>  
                             About                      
                        </li>
                        <li>
                            Project
                        </li>
                        <li onClick={()=>{document.querySelector('#Skills').scrollIntoView();}}>  
                            Skills
                        </li>
                        <li>
                           Profile
                        </li>                        
                    </ul>
                </div>
            </div>
        )
    }
};

export default Header;