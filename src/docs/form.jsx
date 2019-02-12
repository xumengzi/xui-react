import React, { Component, Fragment } from 'react';
import Input from '../plugins/general/input/input';
import Button from '../plugins/general/button/button';
import Switch from '../plugins/general/switch';
import Toast from '../plugins/toast';
import Codes from '../components/codes';

export default class Test1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            codes1: `<Button type="default" onClick={e => { this.show() }}>default button</Button>`,
            codes2: `<Button type="default" disabled>disabled button</Button>`,
            codes3: `<Button type="danger">danger button</Button>`,
            codes4: `<Input/>`,
            codes5: `<Input type="text" label="username"/>`,
            codes6: `<Input type="text" label="readonly" readonly/>`,
            codes7: `<Input type="text" label="disabled" disabled/>`,
            codes8: `<Input type="text" label="username" required maxlength={10} placeholder="username"/>`,
            codes9: `<Input type="password" label="password" placeholder="password"/>`,
            codes10: `
<Switch on="on" off="off" onChange={e => {this.changeSwicth(e)}}>满配M4</Switch>
changeSwicth(bool){
    Toast({
        msg: bool + '',
        delay: 500
    });
}
`,
            codes11: `<Switch>none</Switch>`,
            codes12: `<Switch on="开" off="关">支持中文</Switch>`,
        }
    }
    show(){
		Toast({
			msg: 'hello, world',
			delay: 500
		});
    }
    
    changeSwicth(bool){
        Toast({
			msg: bool + '',
			delay: 500
		});
    }

	render() {
		return (
			<Fragment>
                <p className="introduce">按钮<code>button</code></p>
                <Button type="default" onClick={e => { this.show() }}>default button</Button>
                <Button type="default" disabled>disabled button</Button>
                <Button type="danger">danger button</Button>
                <Codes codes={this.state.codes1}/>
                <Codes codes={this.state.codes2}/>
                <Codes codes={this.state.codes3}/>
                
                <p className="introduce">输入框<code>input</code></p>
                <Input/>
                <Input type="text" label="username"/>
                <Input type="text" label="readonly" readonly/>
                <Input type="text" label="disabled" disabled/>
                <Input type="text" label="username" required maxlength={10} placeholder="username"/>
                <Input type="password" label="password" placeholder="password"/>
                <Codes codes={this.state.codes4}/>
                <Codes codes={this.state.codes5}/>
                <Codes codes={this.state.codes6}/>
                <Codes codes={this.state.codes7}/>
                <Codes codes={this.state.codes8}/>
                <Codes codes={this.state.codes9}/>

                <p className="introduce">开关<code>Switch</code></p>
                <Switch on="on" off="off" onChange={e => {this.changeSwicth(e)}}>满配M4</Switch>
                <Switch>none</Switch>
                <Switch on="开" off="关">支持中文</Switch>
                <Codes codes={this.state.codes10}/>
                <Codes codes={this.state.codes11}/>
                <Codes codes={this.state.codes12}/>
			</Fragment>
		);
	}
};