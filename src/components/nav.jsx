import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {
            nav: window.location.pathname,
            currentNav: 'test',
            listNav: [
                {
                    name: '首页 index',
                    link: '/index'
                },
                {
                    name: '表单系列 from',
                    link: '/form'
                },
                {
                    name: '插件系列 plugins',
                    link: '/plugins',
                    children: [
                        {
                            name: '幻灯片 slider',
                            link: '/slider',
                        }
                    ]
                },
                {
                    name: '更新日志 log',
                    link: '/log'
                },
            ]
        }
    }

    handleFold(){
        let tar = document.getElementById('root');
        tar.querySelector('.xui-react-head').classList.toggle('folded');
        tar.querySelector('.main').classList.toggle('folded');
    }

    render(){
        let isMobile = 'ontouchstart' in window;
        return(
            <div className={`xui-react-head${isMobile ? ' folded' : ''}`}>
                <span className="fold" onClick={this.handleFold.bind(this)}></span>
                <ul className="nav">
                    <li><a href="https://x.xumeng.site/book" target="_blank" rel="noopener noreferrer">我的网站</a></li>
                    <li><a href="https://github.com/xumengzi/xui-react" target="blank">github</a></li>
                    {
                        this.state.listNav.map((item) =>{
                            return(
                                <li key={item.name}>
                                    <Link to={item.link} 
                                        className={item.link == window.location.pathname ? 'highlight' : null}>
                                        {item.name}
                                    </Link>
                                    {
                                        item.children ? item.children.map((childitem) => {
                                            return(
                                                <ul key={childitem.name}>
                                                    <Link to={childitem.link}
                                                        className={childitem.link == window.location.pathname ? 'highlight' : null}
                                                        >{childitem.name}</Link>
                                                </ul>
                                            )
                                        })
                                        : null
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}