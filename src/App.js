import React, { Component } from 'react';
import './App.css';
import Toast from './assets/toast';
import Slider from './assets/slider/slider';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			time: null,
			isShow: true,
			area: 'please write something',
			
		};
	}	
	show(){
		Toast({
			msg: 'hello, world',
			delay: 1000,
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
		const options = {
			list: [
				'http://img.infinitynewtab.com/wallpaper/111.jpg',
				'http://img.infinitynewtab.com/wallpaper/222.jpg',
				'http://img.infinitynewtab.com/wallpaper/333.jpg',
				'http://img.infinitynewtab.com/wallpaper/444.jpg'
			],
			isAutoPlay: true,
			isShowDot: true,
			isDrag: true
		}
		return (
			<div className="App">
				<Slider options={options}/>
			</div>
		)
	}
}
export default App;