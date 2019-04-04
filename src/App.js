import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.less';
import Nav from './components/nav';
import Body from './components/body';
class App extends Component {
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