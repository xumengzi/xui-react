import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch, Link} from 'react-router-dom';
import test2 from './test2';
import firstpage from '../docs/index';
import form from '../docs/form';
import plugins from '../docs/plugin';
export default class Body extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="xui-react-body">
                <div className="main markdown-section">
                    <Switch>
                        <Route path="/index" component={firstpage}></Route>
                        <Route path="/form" component={form}></Route>
                        <Route path="/plugins" component={plugins}></Route>
                        <Route path="/test2" component={test2}></Route>
                    </Switch>
                </div>
            </div>
        )
    }
}