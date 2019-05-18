import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './components/Landings.jsx';
import LoginForm from './components/Login.jsx';
import RegistrationForm from './components/Register.jsx';
import Layouts from './components/Layouts.jsx';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Route exact path="/" component={Landing} />
					<div className="">
						<Route exact path="/register" component={RegistrationForm} />
						<Route exact path="/login" component={LoginForm} />
						<Route exact path="/layout" component={Layouts} />
					</div>
				</div>
			</Router>
		);
	}
}
ReactDOM.render(<App />, document.getElementById('app'));
