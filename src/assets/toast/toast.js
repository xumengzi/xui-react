import React, { Component } from 'react';

class Toast extends Component{
    constructor(props){
        super(props);
        this.state = {
            timer: 1000,
            isShow: false,
            fn: null,
        };
        this.showToast = this.showToast.bind(this);
    }
    showToast(opt){
        let { msg, delay = 1000, fn} = opt;
        clearTimeout(this.state.timer);
        this.setState({
            msg: msg,
            delay: delay,
            isShow: true,
            fn: fn,
            timer: setTimeout(() => {
                this.setState({
                    isShow: false
                });
                clearTimeout(this.state.timer);
                this.state.fn && this.state.fn();
            }, delay)
        });
    }
    componentWillUnmount = () => {
        clearTimeout(this.state.timer);
    }
    render(){
        let msg = this.state.msg;
        return this.state.isShow ? <div className="react-message">{msg}</div> : null
    }
};

export default Toast;