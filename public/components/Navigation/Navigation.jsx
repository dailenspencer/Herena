import React from 'react';
import ReactDOM from 'react-dom';
import * as jqueryHelpers from '../../helpers/jqueryHelpers';

class Nav extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      
    };
  }

  getMainNav() {
  	return (
  		<div id="MainNav">
  			<div id="MainNavNavigation">
  				<h1>HOME</h1>
	  			<h1>SHOP</h1>
	  			<h1>CONTACT</h1>
  			</div>
  			<img id="MainNavLogo" src="images/AliDakotaLogo.jpeg"/>
  			<img id="MainNavCart" src="images/shopping-bag.png"/>
  		</div>
  	)
  }
  getMobileNav() {
  	return (
  		<div id="MobileNav">
  			<img src=""/>
  			<img src=""/>
  		</div>
  		)
  }

  render() {
  	var navigation = jqueryHelpers.isMobile() ? this.getMobileNav() : this.getMainNav();
  	console.log(navigation);
    return (
        navigation
    )
  }
}

module.exports = Nav;