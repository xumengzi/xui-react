import React, { Component, Fragment } from 'react';
import Input from '../plugins/general/input/input';
import Button from '../plugins/general/button/button';
import Toast from '../plugins/toast';
import Codes from '../components/codes';

export default class Test1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            codes1: `<Button type="default">default button</Button>`
        }
    }
    show(){
		Toast({
			msg: 'hello, world',
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
                
                <p className="introduce">输入框<code>input</code></p>
                <Input/>
                <Input type="text" label="username"/>
                <Input type="text" label="readonly" readonly/>
                <Input type="text" label="disabled" disabled/>
                <Input type="text" label="username" required maxlength={10} placeholder="username"/>
                <Input type="password" label="password" placeholder="password"/>
			</Fragment>
		);
	}
};