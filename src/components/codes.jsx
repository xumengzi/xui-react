import React, { Component, Fragment} from 'react'

export default class Codes extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let codes = this.props.codes,
        reg = /([\<\>\?\/\:\[\}\{\}\'\"\-\+\=\.\(\)])+/g;
        let cc = '<code class="codes">';
        for(let i = 0; i< codes.length; i++){
            let z = codes[i],
                reg = /([\<\>\?\/\:\[\}\{\}\'\"\-\+\=\.\(\)])+/;
            if (reg.test(z)) {
                cc += `<span class="codes_symbol">${z}</span>`;
            } else{
                cc += `${z}`;
            };
        };
        cc+='</code>';
        function showCode(){
            return{
                __html: cc
            }
        }
        return(
            <pre dangerouslySetInnerHTML={showCode()}></pre>
        )
    }
}