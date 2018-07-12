import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toast from './assets/toast';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			time: null,
			isShow: true,
			list: [1,2,3,4,5],
			area: 'please write something',
		};
	}	
	show(){
		Toast({
			msg: 'hello, world',
			delay: 100000,
			fn(){
				console.log('over');
			}
		});
	}
	show1(){
		Toast({
			msg: 'please fill out this filed',
		});
	}
	render() {
		return (
			<div className="App">
				<button onClick={() => { this.show()}}>click</button>
			</div>
		)
	}
}
export default App;