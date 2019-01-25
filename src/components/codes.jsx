import React, { Component} from 'react'

export default class Codes extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let codes = this.props.codes,
        reg = /([\<\>\?\/\:\[\}\{\}\'\"\-\+\=\.\(\)])+/g;
        // codes = codes.replace(reg,'<span class="codes_symbol">' + $0 + '</span>')
        return(
            <pre>
                <code>{codes}</code>
            </pre>
        )
    }
}