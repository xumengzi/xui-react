import React, { Component } from 'react';
import './index.css';

export default class Switch extends Component{
    constructor(props){
        super(props);
    }

    changeSwicth(e){
        this.props.onChange && this.props.onChange.call(null, e.target.checked);
    }

    render(){
        const { defaultChecked, children, className = '', disabled = '', on, off } = this.props;
        let random = children + Math.random().toString().substr(3, 8);
        return(
            <span className="xui-react-switch">
                <input type="checkbox"
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                    id={random}
                    onChange={e => this.changeSwicth(e)}
                    name={children}
                />
                <label
                    className={`${className} ${disabled ? 'disabled' : ''}`}
                    data-on={on}
                    data-off={off}
                    htmlFor={random}
                >{children}</label>
            </span>
        )
    }
}