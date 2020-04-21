import React, {Component} from 'react';
import  './Navigation.scss';

class Navigation extends Component{
    constructor(props){
        super(props);
        this.state={
            text1:"",
            // text2:""

        }
    };
    componentDidMount(){
        let i = 0;
        // let a = 0;
        
      

        const typing = setInterval(() => {
            const typed1 = this.state.text1;
            // const typed2 = this.state.text2;            
            const finalText1 = "안녕하세요~" ;
            // const finalText2 = "React-pages 테스트 입니다";

            if(i < finalText1.length ){
                this.setState({
                    text1: typed1 + finalText1[i],
                    // text2: typed2 + finalText2[i],
                });
                i++
            }else{
                clearInterval(typing);
            }

        },100);

        // const typing2 = setInterval(() => {
        //     const typed2 = this.state.text2;
        //     const finalText2 = "React-pages 테스트 입니다";

        //     if(a < finalText2.length){
        //         this.setState({
        //             text2: typed2 + finalText2[a],
        //         });
        //         a++
        //     }else{
        //         clearInterval(typing2);
        //     }
        // },100);   
         
    }

    render() {
        return(
            <div className="texture-wrap">
                <h1 className="texture">{this.state.text1}</h1>
                {/* <h1 className="texture">{this.state.text2}</h1> */}
            </div>
    
        )   
    }
}

export default Navigation;