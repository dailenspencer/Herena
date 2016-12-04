import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll'
import Navigation from './Navigation';
import Landing from './Landing/Landing';
import Mission from './MissionSection';
import SecondBreaker from './SecondBreaker';
import Collections from './Collections';
import ShippingNote from './ShippingNote';
import ImageSpacer from './ImageSpacer';
import Footer from './Footer';
class Home extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      
    };
    
  }

  
  
  componentWillUnmount() {
      [].forEach.call(document.querySelectorAll('.parallax-mirror'),function(e){
        e.parentNode.removeChild(e);
      });
  }

  render() {
    return (
        <div id="MainBody">
          <Navigation/>
          <Landing/>
          <Mission/>
          <SecondBreaker/>
          <Collections/>
          <ShippingNote/>
          <ImageSpacer/>
          <Footer/>
        </div>
        
    );
  }
}

module.exports = Home;