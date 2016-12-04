import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';
import ProductEntry from './ProductEntry';
import QuickViewModal from './QuickViewModal';
import {Products} from '../../products/Products.js';

class Shop extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      productElements: [],
      currentProduct: ''
    };
    this.changeCurrentProduct  = this.changeCurrentProduct.bind(this);
  }

  componentDidMount() {
  
  }

  changeCurrentProduct(product) {
    console.log(product);
    this.setState({currentProduct:product})
  }

  createProducts(productCategory) {
    var productElements = []
    var that = this
    Products.filter(function(product){
      if(productCategory === 'All') {
        return product;
      } else {
        return product.category === productCategory;
      }
    }).forEach(function(product, index){
      productElements.push(<ProductEntry key={index} identity={index} data={product} changeCurrentProduct={that.changeCurrentProduct}/>)
    })
    return productElements;
  }
  render() {
    var productElements = this.createProducts('All');
    return (
        <div id="MainBody">
          <Navigation/>
          <div id="ShopSection">
            <div id="ShopSectionNav">
              <h1>All</h1>
              <h1>Conception</h1>
              <h1>Pristine</h1>
              <h1>Reunited</h1>
              <h1>Roots</h1>
              <h1>Scarves</h1>
            </div>
            <div id="ShopSectionItemsContainer">
              {productElements}
            </div>
          </div>
          <QuickViewModal currentProduct={this.state.currentProduct}/>
          <Footer/>
        </div>
        
    );
  }
}

module.exports = Shop;