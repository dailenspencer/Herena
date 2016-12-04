import React from 'react';
import ReactDOM from 'react-dom';
import * as jqueryHelpers  from '../../helpers/jqueryHelpers';

class ProductEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };

  }

  handleProductClick() {
    this.props.changeCurrentProduct(this.props.data);
  }

  handleMouseEnter() {
    var bottomImageElement = "#BottomImage_" + this.props.identity;
     $(bottomImageElement).animate({
        opacity: 0.0,
      }, 200, function() {
        // Animation complete.
      });
     var quickViewButtonElement = "#QuickViewButton_" + this.props.identity;
     $(quickViewButtonElement).animate({
        opacity: 1.0,
      }, 200, function() {
        // Animation complete.
      });

  }
  handleMouseLeave() {
    var bottomImageElement = "#BottomImage_" + this.props.identity;
     $(bottomImageElement).animate({
        opacity: 1.0,
      }, 200, function() {
        // Animation complete.
      });
     var quickViewButtonElement = "#QuickViewButton_" + this.props.identity;
     $(quickViewButtonElement).animate({
        opacity: 0.0,
      }, 200, function() {
        // Animation complete.
      });
  }

  handleQuickView() {
    jqueryHelpers.fadeInElement('#QuickViewModal', 500);
    jqueryHelpers.removeScroll();
  }
  
  render() {
    var bottomImageId = "BottomImage_" + this.props.identity;
    var quickViewButtonId = "QuickViewButton_" + this.props.identity;
    return (
        <div className="Product" onClick={() => this.handleProductClick()} >
          <div className="ProductImage" onMouseEnter={() => this.handleMouseEnter()} onMouseLeave={() => this.handleMouseLeave()}>
            <img className="bottom" id={bottomImageId} src={this.props.data.photo} />
             <img className="top" src={this.props.data.hoverPhoto}/>
             <div className="QuickViewButton" id={quickViewButtonId} onClick={() => this.handleQuickView()}>QUICK VIEW</div>
          </div>
          <h1>{this.props.data.name}</h1>
          <h2>{this.props.data.price}</h2>
        </div>

        
    );
  }
}

module.exports = ProductEntry;