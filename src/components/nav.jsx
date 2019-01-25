import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class Nav extends Component{
    constructor(props){
        super(props);
    }

    handleFold(){
        let tar = document.getElementById('root');
        tar.querySelector('.xui-react-head').classList.toggle('folded');
        tar.querySelector('.main').classList.toggle('folded');
    }

    render(){
        return(
            <div className="xui-react-head">
                <span className="fold" onClick={this.handleFold.bind(this)}></span>
                <ul className="nav">
                    <li><a href="https://xumeng.site/" target="_blank">我的网站</a></li>
                    <li><a href="https://github.com/xumengzi/xui-react" target="blank">github</a></li>
                    <li><Link to="/index">首页</Link></li>
                    <li><Link to="/form">表单系列</Link></li>
                    <li>
                        <Link to="/plugins">插件系列</Link>
                        <ul>
                            <Link to="/test2">test2</Link>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}