import React, { Component } from 'react';

class Display extends Component {
    render() {
        let displayJSX=[];
        let data = this.props.quotes;
        let paras = this.props.paragraphs;
        for (let i = 0; i < data.length; i++) {
            displayJSX.push(data[i]+ ' ');   
        }

        return (
            <div>
                {paras}<br/>
                {data}<br/>
                <p>{displayJSX}</p>
            </div>
        );
    }
}

export default Display;