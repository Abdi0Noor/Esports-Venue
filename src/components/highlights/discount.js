import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utilis/MyButton';
class Discount extends Component {
    
    state = {
        discountStart: 0,
        discountEnd: 30
    }


    percentage = () => {
        if(this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }
    componentDidUpdate(){
        setTimeout(()=>{
            this.percentage()
        },70)
    }

    render () {
        return (
            <div className="center_wrapper">
              <div className="discount_wrapper">
                 
                 <Fade
                    onReveal={()=> this.percentage()}
                 >
                 <div className="discount_percentage">
                    <span>{this.state.discountStart}%</span>
                    <span>OFF</span>
                 </div>
                 </Fade>
                 
                 <Slide right>
                     <div className="discount_description">
                        <h3>Buy a tickets before JAN 21st</h3>
                        <p>Aliquam erat volutpat. Integer id nibh. Aliquam at nulla id feugiat consectetur. Quisque volutpat elit quis velit euismod, vitae egestas dui vestibulum. </p>
                         <div>
                         <MyButton 
                                text="Buy Your Ticket Now!"
                         
                         />
                        </div>
                    </div>
                 </Slide>

                
            </div>
        </div>
        );
    }
}

export default Discount;