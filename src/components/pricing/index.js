import React, { Component } from 'react'
import Zoom from 'react-reveal/Zoom'
import MyButton from '../utilis/MyButton';
export default class Pricing extends Component {
    state = {
        prices:[20, 75, 600],
        positions: ['basic pass','Team pass','all-season pass' ],
        desc:['General Admission. Access to snacks + more. ',
              'Backstage pass for the team of your choice. Access to T-shirt signings, meet the team.',
              'One Ticket to rule them all, get access to all premium events, all star games. T-shirt signings + more.'
            ],
            linkto:['https://www.axs.com/series/6168/overwatch-league-tickets?skin=blizzardowl'
                    ,'https://www.axs.com/series/6168/overwatch-league-tickets?skin=blizzardowl'
                ,'https://www.axs.com/series/6168/overwatch-league-tickets?skin=blizzardowl'
            ],delay:[500,0,500]
    }
    showBoxes = () => (
       this.state.prices.map((box,i)=>(
           <Zoom delay={this.state.delay[i]}>
           <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${this.state.prices[i]}</span>
                        <span>{this.state.positions[i]}</span>
                    </div>
                    <div className="pricing_description">
                        {this.state.desc[i]}
                    </div>
                    <div className="pricing_buttons">
                        <MyButton
                            text="Purchase"
                            bck='#ffa800'
                            color='#ffffff'
                            link={this.state.linkto[i]}
                        />
                    </div>
                </div>

           </div>
           </Zoom>
       ))
    )
 
    render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
            <h2>Ticket Prices</h2>

            <div className="pricing_wrapper">
                {this.showBoxes()}
            </div>
        </div>
      </div>
    )
  }
}
