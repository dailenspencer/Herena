import React from 'react';
import ReactDOM from 'react-dom';

class ImageSpacer extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      
    };
  }

  componentDidMount() {
      $('#image-spacer-window').parallax({
        imageSrc: 'images/coffeegirl.jpeg'
      });
  }

  render() {
    
    return (
        <div id="ImageSpacer">
          <div id={"image-spacer-window"} data-parallax={"scroll"} data-position={"top"} data-bleed={"10"} data-natural-width={"1400"} data-natural-height={"900"}>
              <div class="parallax-slider">
                
              </div>
          </div>
        </div>
        
    );
  }
}

module.exports = ImageSpacer;