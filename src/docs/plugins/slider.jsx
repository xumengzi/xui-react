import React, { Component, Fragment } from 'react';
import Slider from '../../plugins/slider/slider';
import Codes from '../../components/codes';

export default class slider extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            codes1: '<Slider options={this.state.option1}/>',
            codes2: `{
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
}`,
            option1: {
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
        }
    }

    render(){
        return(
            <Fragment>
                <h1>cascader</h1>
                <blockquote>
                <p>说明: 需要凸显网站特色以及展示多张图片等场景</p>
                </blockquote>
                <h5 id="使用及参数说明">使用及参数说明:</h5>
                <ul>
                    <li><code>list</code>幻灯片等数据源 <strong>必传</strong></li>
                    <li><code>isAutoPlay</code>是否自动播放</li>
                    <li><code>isShowDot</code>是否显示幻灯片下边等小圆点</li>
                    <li><code>isShowArrow</code>是否显示幻灯片的左右箭头</li>
                    <li><code>delay</code>幻灯片播放的间隔时间，单位：ms</li> 
                    <li>没有你想要的功能? 快联系我: <code>me@xumeng.site</code>添加吧</li>
                </ul>
                <h3>效果展示</h3>
                <p>1.按照惯例, 我们先来看一个最简单配置的幻灯片</p>
                <Slider options={this.state.option1}/>
                <Codes codes={this.state.codes1}/>
                <Codes codes={this.state.codes2}/>
            </Fragment>
        )
    }
}