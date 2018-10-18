import React, { Component } from 'react';
import Display from './Display';
const axios = require('axios');

class NotSafeForWork extends Component {
    constructor(){
        super();
        this.state = {
            quotes: []
        }
    }
    componentDidMount(){
        axios.get('https://letterkennylorem.herokuapp.com/nsfw')
             .then(results=>{
                 let mimic = Array.from(this.state.quotes);
                 let resultsData = results.data;
                 for (let x = 0; x < resultsData.length; x++) {
                     mimic.push(resultsData[x]);  
                 }
                 this.setState({
                     quotes:mimic
                 });
             })
             .catch(error=>{
                 console.log(error);
             });
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