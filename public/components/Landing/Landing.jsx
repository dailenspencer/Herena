import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';


class Landing extends React.Component {
	constructor(props){
		super(props)

		this.state = {

		}
	}

  componentDidMount() {
      $('#landing-window').parallax({
        imageSrc: 'images/alidakota_img1.jpeg'
      });
  }


  render() {

      return (
        <div id="Landing">
          <div id={"landing-window"} data-parallax={"scroll"} data-position={"top"} data-bleed={"10"} data-image-src={"images/rage.jpg"} data-natural-width={"1400"} data-natural-height={"900"}>
            <div class="parallax-slider">
              <h1>30% FRIENDS & FAMILY LAUNCH DISCOUNT! USE CODE 30OFF AT CHECKOUT</h1>
            </div>
          </div>
        </div>
    	)
  	}
}

module.exports = Landing;