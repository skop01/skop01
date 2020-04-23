import React, {Component} from 'react';
import './Content.scss';

class Content extends Component{
    render() {
        return(
           
            <div className="about" id="About">
                <div className="container">
                    <div className="row">
                        <div className="aside">
                            <h2>About me</h2>
                        </div>
                        <div className="content">
                            <p>Lost in your mind I wanna know Am I losing my mind? Never let me go If this night is not forever At least we are together
                                I know I'm not alone I know I'm not alone Anywhere, whenever Apart, but still together I know I'm not alone I know I'm not alone
                                I know I'm not alone I know I'm not alone Unconscious mind I'm wide awake Wanna feel one last time Take my pain away If this night is not forever
                                At least we are together I know I'm not alone I know I'm not alone Anywhere, whenever Apart, but still together I know I'm not alone I know I'm not alone
                                I know I'm not alone I know I'm not alone I'm not alone, I'm not alone I'm not alone, I know I'm not alone I'm not alone, I'm not alone I'm not alone, I know I'm not alone</p>
                        </div>
                    </div>
                </div>
            </div>
           
        )
    }
};

export default Content;