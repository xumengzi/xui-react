import React, { Component, Fragment } from 'react';
import Toast from '../../plugins/toast';
import Codes from '../../components/codes';
import Button from '../../plugins/general/button';

export default class toast1 extends Component{
  constructor(props){
    super(props);

    this.state = {
      example: `
Toast({
  msg: string,
  delay: number,
  fn: callback
});
      `,
      show:`
Toast({
  msg: 'hello world'
});
      `,
      show1: `
Toast({
  msg: '2s后消失',
  delay: 2000
});
      `,
      show2: `
Toast({
  msg: '1s后消失, 且有回调',
  fn(){
    Toast({
      msg: '这是回调'
    });
  }
});
      `
    }
  }

  show(){
    Toast({
      msg: 'hello world'
    });
  }

  show1() {
    Toast({
      msg: '2s后消失',
      delay: 2000
    });
  }

  show2() {
    Toast({
      msg: '1s后消失, 且有回调',
      fn(){
        Toast({
          msg: '这是回调'
        });
      }
    });
  }

  render(){
    const { test } = this.state;
    return(
      <Fragment>
        <h1>toast</h1>
        <blockquote>
          <p>说明: 需要给用户提示一些信息的时候展示</p>
        </blockquote>
        <h5 id="使用及参数说明">使用及参数说明:</h5>
        <Codes codes={this.state.example} />
        <ul>
          <li><code>msg</code>提示信息文案 <strong>必传</strong></li>
          <li><code>delay</code>多长时间后消失, 默认值<code>1000ms</code></li>
          <li><code>fn</code>提示信息消失后的回调</li>
          <li>没有你想要的功能? 快联系我: <code>xumeng0611@gmail.com</code>添加吧</li>
        </ul>
        <h3>效果展示 {test}</h3>
        <p>1.按照惯例, 我们先来看一个最简单配置的幻灯片</p>
        <Button type="default" onClick={e => { this.show() }}>click</Button>
        <Codes codes={this.state.show} />
        <p>2.同样, 你可以设置一下消失的时间</p>
        <Button type="default" onClick={e => { this.show1() }}>click</Button>
        <Codes codes={this.state.show1} />
        <p>3.最后增加一个消失后的回调</p>
        <Button type="default" onClick={e => { this.show2() }}>click</Button>
        <Codes codes={this.state.show2} />
      </Fragment>
    )
  }
}