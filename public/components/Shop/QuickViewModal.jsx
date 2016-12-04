import React from 'react';
import ReactDOM from 'react-dom';
import * as jqueryHelpers from '../../helpers/jqueryHelpers.js';

class QuickViewModal extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      productElements: []
    };
  }

  componentDidMount() {
  
  }


  handleClose() {
    jqueryHelpers.fadeOutElement('#QuickViewModal');
    jqueryHelpers.addScroll();
  }
  
  render() {
    
    return (
        <div id="QuickViewModal">
          <div id="QuickViewClose" onClick={() => this.handleClose()}>
            <img src="images/cancel.png"/>
          </div>
          <div id="QuickViewContent">
            <div id="QuickViewContentImage">
              <img src={this.props.currentProduct.photo}/>
            </div>
            <h1>{this.props.currentProduct.name}</h1>
            <div id="AddToCart">
              Add To Cart
            </div>
            <p1>{this.props.currentProduct.price}</p1>
            <p2>{this.props.currentProduct.description}</p2>
          </div>
          <div id="QuickViewBlanket">

          </div>
        </div>
        
    );
  }
}

module.exports = QuickViewModal