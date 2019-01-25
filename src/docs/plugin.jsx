import React, { Component, Fragment } from 'react';

export default class Plugins extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Fragment>
                <h1>插件</h1>
                <blockquote>
                    <p>有人说,如果有现成的轮子,那就没必要花时间再去造一个.</p>
                </blockquote>
                <h5>对我来说,有时候造轮子可以发现不一样的境界.因为当我在造轮子的时候我会想:别人到底需要什么样的轮子呢?</h5>
                <h5>我一直在思考轮子的API是否友好,是否容易扩展,是否能够做到0bug,高兼容性呢?</h5>
                <h5>当我真正的去造一个轮子的时候,我发现其实还是蛮难的,可谓众口难调.</h5>
                <h5>不过又说回来,造了一个大家都喜欢的轮子,难道你就没有成就感吗? 哈哈!</h5>
            </Fragment>
        )
    }
}