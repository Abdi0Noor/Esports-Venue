import React, { Component } from 'react';
import './resources/styles.css';

import { Element } from 'react-scroll';
import Featured from './components/Featured';
import Header from './components/header_footer/header';
import VenueNfo from './components/venueNfo';
import Highlight from './components/highlights/index';
import Pricing from './components/pricing/index';
import Location from './components/location/index';
import Footer from './components/header_footer/Footer';
class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px", backgroundColor: 'cornflowerblue'}}>
      <Header />
      <Element name="Featured">
            <Featured />
      </Element>
       <Element name="VenueNfo">
            <VenueNfo />
       </Element>
       <Element name="Highlights">
            <Highlight />
       </Element>
       <Element name="Pricing">
            <Pricing />
       </Element>
       <Element name="Location">
             <Location />
       </Element>
     
       <Footer />
      </div>
    );
  }
}

export default App;
