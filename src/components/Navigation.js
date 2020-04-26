import React, {Component} from 'react';
import  './Navigation.scss';

class Navigation extends Component{
    constructor(props){
        super(props);
        this.state={
            text:"",
        }
    };
    componentDidMount(){

        let i = 0;
        
        const typing = setInterval(() => {
            const typed = this.state.text;         
            const finalText = "안녕하세요~~~!!김홍주 입니다" ;

            if(i < finalText.length ){
                this.setState({
                    text: typed + finalText[i]
                });
                i++

            }else{
                clearInterval(typing);
            }
        },100);   
    }

    render() {
        return(
            <div className="texture-wrap" id="Home">
                <div className="background"></div>
                <h1 className="texture">{this.state.text}</h1>
            </div>
        )   
    }
}

export default Navigation;