import React, { Component } from 'react';

class Display extends Component {
    render() {
        let displayJSX=[];
        let data = this.props.quotes;
        for (let i = 0; i < data.length; i++) {
            displayJSX.push(data[i]);
            
        }

        return (
            <div>
                <p>I have connected.</p>
                {displayJSX}
            </div>
        );
    }
}

export default Display;