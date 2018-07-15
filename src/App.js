import React, { Component } from 'react';
import './App.css';
import Toast from './assets/toast';
import Slider from './assets/slider/slider';
import Input from './assets/general/input/input';
import Button from './assets/general/button/button';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			time: null,
		};
	}	
	show(){
		Toast({
			msg: 'hello, world',
			delay: 1000,
			fn(){
				Toast({
					msg: 'callback'
				});
			}
		});
	}
	render() {
		const options = {
			list: [
				'http://img.infinitynewtab.com/wallpaper/111.jpg',
				'http://img.infinitynewtab.com/wallpaper/222.jpg',
				'http://img.infinitynewtab.com/wallpaper/333.jpg',
				'http://img.infinitynewtab.com/wallpaper/444.jpg',
				'http://img.infinitynewtab.com/wallpaper/555.jpg',
				'http://img.infinitynewtab.com/wallpaper/666.jpg'
			],
			isAutoPlay: false,
			isShowDot: true,
			isShowArrow: true,
			delay: 3000,
		}
		return (
			<div className="App">
				<h3>slider</h3>
				<Slider options={options}/>
				<h3>toast</h3>
				<Button type="default" onClick={e => { this.show() }}>click me</Button>
				<h3>button</h3>
				<Button type="default">default button</Button>
				<Button type="default" disabled>disabled button</Button>
				<Button type="danger">danger button</Button>
				<h3>input</h3>
				<Input/>
				<Input type="text" label="readonly" readonly/>
				<Input type="text" label="disabled" disabled/>
				<Input type="text" label="username" required maxlength={10} placeholder="username"/>
				<Input type="password" label="password" placeholder="password"/>
			</div>
		)
	}
}
export default App;