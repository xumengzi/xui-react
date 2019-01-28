import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch, Link} from 'react-router-dom';
// modules
import firstpage from '../docs/index';
import form from '../docs/form';
// plugins
import plugins from '../docs/plugin';
import slider from '../docs/plugins/slider';
// log
import log from '../docs/log';
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
                        <Route path="/slider" component={slider}></Route>
                        <Route path="/log" component={log}></Route>
                    </Switch>
                </div>
            </div>
        )
    }
}