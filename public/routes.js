import React from 'react'
import {Route, IndexRoute, Router, browserHistory} from 'react-router'


import App from './components/App'
import Home from './components/Home'
import Shop from './components/Shop/Shop';
import Checkout from './components/Checkout/Checkout'
import hashHistory  from 'react-router'

export default (
	<Router history={hashHistory}>
  		<Route path="/" component={App}>
  			<IndexRoute component={Home}/>
  			<Route path="/Shop" component={Shop}/>
  			<Route path="/Checkout" component={Checkout}/>
  		</Route>
    </Router>
)