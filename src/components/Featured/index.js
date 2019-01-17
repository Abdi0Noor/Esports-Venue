import React from 'react';

import Carrousel from './Carrousel';
import Countdown from './countdown';

const Featured = () => {
    return (
        <div  style={{
                position:'relative'
        }}>
            <Carrousel />

            <div className="artist_name">
                <div className="wrapper">
                     Overwatch League: S2
                </div>
            
            </div>
            <Countdown/>

        </div>
    )
} 

export default Featured;