import React, { Component, Fragment } from 'react';
import './index.css';

export default class Radio extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    changeSwicth(e){
        this.props.onChange && this.props.onChange.call(null, e.target.checked);
    }

    render(){
        const { children, on, off } = this.props;
        return(
            <span className="xui-react-switch">
                <input type="checkbox" id={children} onChange={e => this.changeSwicth(e)} name={children}/>
                <label data-on={on} data-off={off} htmlFor={children}>{children}</label>
            </span>
        )
    }
} 
