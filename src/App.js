import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import Body from './components/body';
class App extends Component {
	constructor(props){
		super(props);
	}
	
	render() {
		return (
			<Router>
				<div className="App">
					<Nav/>
					<Body/>
				</div>
			</Router>
		)
	}
}
export default App;