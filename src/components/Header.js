import React, {Component} from 'react';
import './Header.scss';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component{
    
    constructor(){
        super();
        this.state={
            open:false,
        }
        this.showMenu=this.showMenu.bind(this);
        this.closeMenu=this.closeMenu.bind(this);
    }

    showMenu(e){
        e.preventDefault();
        this.setState({open:true},() =>{
            document.addEventListener('click',this.closeMenu);
            // const ab = document.querySelector('.toggle_icon');
            // ab.style.background= "white";
            // ab.style.display = "none";
            
        });
    }

    closeMenu(e){
        if(!this.dropMenu.contains(e.target)){
            this.setState({open:false}, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }

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
                        <li onClick={()=>{document.querySelector('#Project').scrollIntoView();}}> 
                            Project
                        </li>
                        <li onClick={()=>{document.querySelector('#Skills').scrollIntoView();}}>  
                            Skills
                        </li>                                           
                    </ul>
                </div>
                <div className="toggle_menu">
                    <FontAwesomeIcon className="toggle_icon" icon={faBars} size="2x" onClick={this.showMenu}/>
                        {this.state.open ? ( 
                        <div className="menu" ref={(element) =>{this.dropMenu=element;}}>
                            <ul>
                                <li className="menu-bottom" onClick={()=>{document.querySelector('#Home').scrollIntoView();}}>  
                                    Home
                                </li>
                                <li className="menu-bottom" onClick={()=>{document.querySelector('#About').scrollIntoView();}}>  
                                    About                      
                                </li>
                                <li  className="menu-bottom" onClick={()=>{document.querySelector('#Project').scrollIntoView();}}> 
                                    Project
                                </li>
                                <li onClick={()=>{document.querySelector('#Skills').scrollIntoView();}}>  
                                    Skills
                                </li>                                           
                            </ul>   
                        </div>
                        )
                        :(null)
                        }
                </div>
            </div>
        )
    }
};

export default Header;


