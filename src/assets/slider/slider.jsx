import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './slider.css';

class Slider extends Component{
	constructor(props){
		super(props);

		this.state = {
			selected: 0,
			active: 1,
			duration: 500,
			list: [],
			length: 0,
			autoTimer: null
		}
	}

	componentDidMount() {
		const { list, isAutoPlay} = this.props.options;
		let arr = list;
		if (!arr.length) {
			throw new Error('at least one picture');
		};
		if (arr.length === 1) {
			this.setState(() => {
				return{
					list: arr,
					active: 0
				};
			});
			console.warn("a picture can't roll or change");
			return;
		}
		arr = [arr.slice(-1), ...arr, arr.slice(0, 1)];
		this.setState(() => {
			return{
				list: arr,
				length: arr.length
			};
		});
		isAutoPlay && this.setState(() => {
			return {
				autoTimer: setInterval(this.handleChange.bind(this, undefined, 1), 2000)
			}
		})
	}

	handleChange(e, type){
		if (this.props.options.list.length === 1) {
			return;
		};
		let currentInx = this.state.active,
			showInx = this.state.selected,
			totalLength = this.state.length;
		currentInx = type > 0 ? ++currentInx : --currentInx;
		showInx = type > 0 ? ++showInx : --showInx;
		if (showInx > totalLength - 3) {
			showInx = 0;
		}
		if (showInx < 0) {
			showInx = totalLength - 3;
		}
		this.setState(() => {
			(currentInx === totalLength - 1) && setTimeout(this.reStore.bind(this, 1), 500);
			(currentInx === 0) && setTimeout(this.reStore.bind(this, totalLength - 2), 500);
			return {
				active: currentInx,
				selected: showInx,
				duration: 500
			}
		});
	}

	handleHover(e, index){
		clearInterval(this.state.autoTimer);
		this.setState(() =>{
			return{
				autoTimer: null,
				selected: index,
				active: index+1,
				duration: 500
			}
		})
	}

	reStore(num){
		this.setState(() => {
			return {
				active: num,
				duration: 0
			}
		});
	}

	handleOut(){
		const { isAutoPlay } = this.props.options;
		isAutoPlay && this.setState(() => {
			return {
				autoTimer: setInterval(this.handleChange.bind(this, undefined, 1), 2000)
			}
		})
	}

	render() {
		const { list, isShowDot } = this.props.options;
		return (
			<div className="slider_container">
				<div className="show_index">
					<button style={{display: 'none'}} onClick={e => { this.handleChange(e, -1) }}>prev</button>
					<span> {this.state.active} </span>
					<button style={{display: 'none'}} onClick={e => { this.handleChange(e, 1) }}>next</button>
				</div>
				<div className="slider_content" style={{
					transform: `translateX(-${this.state.active*100}%)`,
					transitionDuration: `${this.state.duration}ms`
				}}>
					{
						this.state.list.map((item, index) => {
							let imgStyle = {
								background: `url(${item}) center center / cover`
							}
							return(
								<a href="javascript:void(0)" key={item.toString() + index} className="slider_url">
									<div className="slider_each" style={imgStyle}></div>
								</a>
							)
						})
					}
				</div>
				{
					isShowDot && <div className="slider_nav">
					{
						list.map((item, index) => {
							return(
								<span key={item.toString() + index}
									onMouseEnter={e => {this.handleHover(e, index)}}
									onMouseLeave={e => {this.handleOut()}}
									className={'slider_dot ' + (this.state.selected === index ? 'selected' : '')}
								>
								</span>
							)
						})
					}
				</div>
				}
			</div>
		);
	}
}

Slider.propTypes = {
	options: PropTypes.object
}

export default Slider;