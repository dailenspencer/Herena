import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';


class ShippingNote extends React.Component {
	constructor(props){
		super(props)

		this.state = {

		}
	}

  componentDidMount() {
      
  }

  render() {

      return (
          <div id="ShippingNote">
            <div className="LineBreak"></div>
            <h1>Shipping included on all U.S. Orders!</h1>
          </div>
    	)
  	}
}

module.exports = ShippingNote;