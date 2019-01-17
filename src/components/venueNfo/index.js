import React from 'react';
import Bounce from 'react-reveal/Bounce';
import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

const VenueNfo = () => {
    return (
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">
                   <Bounce left>
                   <div className="vn_item">
                            <div className="vn_outer">
                             <div className="vn_inner">
                                <div className="vn_icon_square bck_left"></div>
                                <div 
                                    className="vn_icon"
                                    style={{
                                        background:`url(${icon_calendar})`
                                    }}
                                ></div>
                           <div className="vn_title">
                                    Event Date & Time
                           </div>
                           <div className="vn_desc">
                                    14 Feburary, 2019
                                      6:00pm EDT/ 3pm PDT
                           </div>

                            </div>
                          </div>
                           
                        </div>
                   </Bounce> 
                     
                <Bounce delay={500}>
                <div className="vn_item">
                        <div className="vn_outer">
                             <div className="vn_inner">
                                <div className="vn_icon_square bck_right"></div>
                                <div 
                                    className="vn_icon"
                                    style={{
                                        background:`url(${icon_location})`
                                    }}
                                ></div>
                           <div className="vn_title">
                                    Location
                           </div>
                           <div className="vn_desc">
                           3000 W Alameda Ave, Burbank, CA 91523 
                           </div>

                            </div>
                          </div>
                           
                        </div>
                </Bounce>
                
               
                </div>

            </div>
        </div>
    )
}

export default VenueNfo;