import React, { Component, Fragment} from 'react';

export default class Index extends Component{
    constructor(props){
        super(props);

        this.state = {
            projectName: 'xui-react'
        }
    }

    render(){
        return(
            <Fragment>
                <h1 id="简介">简介</h1>
                <h2 id="项目名称-xui">项目名称: <code>{this.state.projectName}</code></h2>
                <ul>
                    <li>
                        <p>简介: 一个基于<code>reactJs16.3.0</code>,可以提供丰富的方法,组件,插件的组件库.</p>
                    </li>
                    <li>
                        <p>依赖: <code>reactJs</code></p>
                    </li>
                    <li>
                        <p>兼容性: IE9及以上高级浏览器</p>
                    </li>
                    <li>
                        <p>使用方法: 在你的框架(<code>react</code>)中引用<code>plugins</code>里的各个组件</p>
                    </li>
                </ul>
                <h5>个人项目,如有问题还请指出,不胜感激.</h5>
                <h5>欢迎不吝赐教</h5>
                <h6>联系我: <em>me@xumengzi.top</em></h6>
            </Fragment>
        )
    }
}