import React from 'react';
import ReactDOM from 'react-dom';
import * as jqueryHelpers from '../helpers/jqueryHelpers';
import { Router, Route, Link, browserHistory } from 'react-router'

class Nav extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      
    };
  }

  changeView(view) {
    browserHistory.push(view);
  }
  getMainNav() {
  	return (
  		<div id="MainNav">
  			<div id="MainNavNavigation">
  				<h1 onClick={() => this.changeView("/")}>HOME</h1>
	  			<h1 onClick={() => this.changeView("/shop")}>SHOP</h1>
	  			<h1 onClick={() => this.changeView("/contact")}>CONTACT</h1>
  			</div>
  			<img id="MainNavLogo" src="images/AliDakotaLogo.jpeg"/>
  			<img id="MainNavCart" src="images/shopping-bag.png"/>
  		</div>
  	)
  }
  getMobileNav() {
  	return (
  		<div id="MainNav">
        <div id="MainNavNavigation">
          <h1 onClick={() => this.changeView("/")}>HOME</h1>
          <h1 onClick={() => this.changeView("/shop")}>SHOP</h1>
          <h1 onClick={() => this.changeView("/contact")}>CONTACT</h1>
        </div>
  			<img id="MainNavLogo" src="images/AliDakotaLogo.jpeg"/>
        <img id="MainNavCart" src="images/shopping-bag.png"/>
      </div>
  		)
  }

  render() {
  	var navigation = jqueryHelpers.isMobile() ? this.getMobileNav() : this.getMainNav();
    return (
        navigation
    )
  }
}

module.exports = Nav;