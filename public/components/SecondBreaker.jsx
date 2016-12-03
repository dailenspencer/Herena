import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';


class SecondBreaker extends React.Component {
	constructor(props){
		super(props)

		this.state = {

		}
	}

  componentDidMount() {
      $('#second-breaker-window').parallax({
        imageSrc: 'images/alidakota_img2.jpeg'
      });
  }

  render() {

      return (
        
          <div id={"second-breaker-window"} data-parallax={"scroll"} data-position={"top"} data-bleed={"10"} data-natural-width={"1400"} data-natural-height={"900"}>
            <div class="parallax-slider">
              <h1>CRAFTED WITH LOVE</h1>
            </div>
          </div>
    	)
  	}
}

module.exports = SecondBreaker;