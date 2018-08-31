import React, { Component } from 'react';
import Display from './Display';
const axios = require('axios');

class NotSafeForWork extends Component {
    constructor(){
        super();
        this.state = {
            quotes: ['dummy data.', 'I\'s thinks I\'m havings a stroke.', 'the internets.', 'whitefish.', 'sushi.', 'and thats what I appreciates abouts you.', 'whos a dad?']
        }
    }
    render() {
        return (
            <div>
                <h2>I'm Coming Shorsey!</h2>
                <div>
                    <Display quotes = {this.state.quotes} paragraphs = {this.props.paragraphs}/>
                </div>
            </div>
        );
    }
}

export default NotSafeForWork;