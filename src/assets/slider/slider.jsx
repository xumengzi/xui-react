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

	imgContent = React.createRef()

	_x = 0
	_y = 0
	_time = 500

	componentDidMount() {
		const { list, isAutoPlay, delay = 3000} = this.props.options;
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
				autoTimer: setInterval(() => {this.handleChange(undefined, 1)}, delay)
			}
		});
		// this.imgContent.current.addEventListener('mousedown', this.handleDown.bind(this));
	}

	componentWillUnmount(){
		clearInterval(this.state.autoTimer);
		this.setState({
			autoTimer: null
		});
	}

	handleChange(e, type){
		if (this.props.options.list.length === 1) {
			return;
		};
		if (+new Date() - this._time < 500) {
			return;
		};
		this._time = +new Date();
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
			(currentInx === totalLength - 1) && setTimeout(() => {this.reStore(1)}, 500);
			(currentInx === 0) && setTimeout(() => {this.reStore(totalLength - 2)}, 500);
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
		const { isAutoPlay, delay = 3000 } = this.props.options;
		isAutoPlay && this.setState(() => {
			return {
				autoTimer: setInterval(() => {this.handleChange(undefined, 1)}, delay)
			}
		})
	}

	handleDown(e){
		return
		// e.stopPropagation();
		// this._x = e.clientX || e.pageX;
		// e.target.addEventListener('mousemove', this.handleMove.bind(this));
		// e.target.addEventListener('mouseup', this.handleUp.bind(this));
	}

	handleMove(e){
		e.stopPropagation();
		this._x = e.clientX || e.pageX;
		let pos = -this._x + 'px';
		console.log('move');
		this.imgContent.current.style.cssText += `
                                              ;transform: translate3D(${pos}, 0, 0);
                                              webkitTransform: translate3D(${pos}, 0, 0);
                                              mozTransform: translate3D(${pos}, 0, 0);
                                              MsTransform: translate3D(${pos}, 0, 0);
                                              `;
	}

	handleUp(e){
		e.stopPropagation();
		console.log('up');
		e.target.removeEventListener('mousemove', this.handleMove);
		e.target.removeEventListener('mouseup', this.handleUp);
	}

	render() {
		const { list, isShowDot } = this.props.options;
		return (
			<div className="slider_container">
				<div className="show_index">
					<button onClick={e => { this.handleChange(e, -1) }}>prev</button>
					<span> {this.state.active} </span>
					<button onClick={e => { this.handleChange(e, 1) }}>next</button>
				</div>
				<div className="slider_content" ref={this.imgContent}
					style={{
						transform: `translateX(-${this.state.active*100}%)`,
						transitionDuration: `${this.state.duration}ms`
					}}
					onMouseDown={e => { this.handleDown(e) }}
				>
					{
						this.state.list.map((item, index) => {
							let imgStyle = {
								background: `url(${item}) center center / cover`
							}
							return(
								<div key={item.toString() + index} className="slider_url">
									<div className="slider_each" style={imgStyle}></div>
								</div>
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