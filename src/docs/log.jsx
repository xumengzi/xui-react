import React, { Component, Fragment } from 'react';

export default class Log extends Component{
    constructor(props){
        super(props);
        this.state = {
            logList: [
                {
                    version: 'v0.5.2',
                    time: '2019/01/02',
                    tag: 'bug&fix',
                    description: `
                        <div>1.修复手机端展示问题和一些细节优化</div>
                        `,
                    isCompatible: true
                },
                {
                    version: 'v0.5.1',
                    time: '2018/12/22',
                    tag: 'bug&fix',
                    description: `
                        <div>1.修复路由问题</div>
                        `,
                    isCompatible: true
                },
                {
                    version: 'v0.4.1',
                    time: '2018/12/12',
                    tag: 'add&fix',
                    description: `
                        <div>1.增加代码高亮显示</div>
                        <div>2.修复导航栏没有高亮的问题</div>
                        `,
                    isCompatible: true
                },
                {
                    version: 'v0.3.1',
                    time: '2018/11/22',
                    tag: 'add',
                    description: '<a href="/slider">幻灯片</a>',
                    isCompatible: true
                },
                {
                    version: 'v0.2.1',
                    time: '2018/10/12',
                    tag: 'add',
                    description: '<a href="/plugin">插件系列</a>',
                    isCompatible: true
                },
                {
                    version: 'v0.1.1',
                    time: '2018/09/08',
                    tag: 'add',
                    description: '<a href="/form">表单系列</a>',
                    isCompatible: true
                },
                {
                    version: 'v0.0.1',
                    time: '2018/08/10',
                    tag: 'init',
                    description: '1.基于vue的ui框架<a href="https://github.com/xumengzi/xui-react" target="_blank">github</a>'
                },
            ]
        }
    }

    render(){
        function changeToHtml(content){
            return{
                __html: content
            }
        }
        return(
            <Fragment>
                <h1>日志</h1>
                <h6>当前版本: <span className="version">{this.state.logList[0].version}</span></h6>
                <blockquote>
                    <p>版本说明: 次版本号代表新增一个插件或者比较大的改动 修订版本号代表修复bug,优化之类</p>
                </blockquote>
                {
                    this.state.logList.map(item=>{
                        return(
                            <Fragment key={item.version.toString() + Math.random().toFixed(3)}>
                                <h3>{item.version}  <span style={{fontSize: 16}}>{item.time}</span></h3>
                                <h5>{item.tag}：</h5>
                                <p className="log" dangerouslySetInnerHTML={changeToHtml(item.description)}></p>
                                {
                                    item.isCompatible && <blockquote>
                                                            <p>是否兼容现有代码：是</p>
                                                        </blockquote>
                                }
                            </Fragment>
                        )
                    })
                }
                
            </Fragment>
        )
    }
}