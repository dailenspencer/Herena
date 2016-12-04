import React from 'react';
import ReactDOM from 'react-dom';
import * as jqueryHelpers from '../helpers/jqueryHelpers';
import { Router, Route, Link, browserHistory } from 'react-router'

class Nav extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      screenWidth: $(document).width()
    };
  }

  componentDidMount() {
    var that = this
    window.addEventListener("resize", function() {
      that.setState({screenWidth:$(document).width()})
    })
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
        <div id="MobileNavNavigation" onClick={() => this.handleMobileMenuClick()}>
          <img src="images/menu-button.png"/>
        </div>
  			<img id="MainNavLogo" src="images/AliDakotaLogo.jpeg"/>
        <img id="MainNavCart" src="images/shopping-bag.png"/>
        <div id="MobileNavSlideOut">
            <h1 onClick={() => this.handleMobileNavClick("/")}>HOME</h1>
            <h1 onClick={() => this.handleMobileNavClick("/shop")}>SHOP</h1>
            <h1 onClick={() => this.handleMobileNavClick("/contact")}>CONTACT</h1>
            <img src="images/cancel.png" onClick={() => this.handleCloseMobileNav()}/>
          </div>
      </div>
  		)
  }

  handleMobileNavClick(view) {
    this.changeView(view);
    this.handleCloseMobileNav();
  }
  handleMobileMenuClick() {

     $("#MobileNavSlideOut").animate({
        left:'0px',
      }, 200, function() {
        // Animation complete.
      });
  }
  handleCloseMobileNav() {
    console.log('close mobile');
    $("#MobileNavSlideOut").animate({
        left:'-200px',
      }, 200, function() {
        // Animation complete.
      });
  }

  render() {
    var navigation = this.getMainNav()
    if(jqueryHelpers.isMobile() || this.state.screenWidth <= 640) {
      navigation = this.getMobileNav();
    }
    return (
        navigation
    )
  }
}

module.exports = Nav;