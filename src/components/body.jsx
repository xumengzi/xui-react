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

    componentDidUpdate(){
        window.scrollTo(0,0);
    }

    render(){
        let isMobile = 'ontouchstart' in window;
        return(
            <div className="xui-react-body">
                <div className={`main markdown-section${isMobile ? ' folded' : ''}`}>
                    <Switch>
                        <Route path="/xui-react/index" component={firstpage}></Route>
                        <Route path="/xui-react/form" component={form}></Route>
                        <Route path="/xui-react/plugins" component={plugins}></Route>
                        <Route path="/xui-react/slider" component={slider}></Route>
                        <Route path="/xui-react/log" component={log}></Route>
                    </Switch>
                </div>
            </div>
        )
    }
}