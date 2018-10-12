import React, { Component } from 'react';
import Display from './Display';
const axios = require('axios');


class SafeForWork extends Component {
    constructor(){
        super();
        this.state = {
            quotes:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:8080/')
             .then(results =>{
                 //console.log('connected to server');
                 let mimic = Array.from(this.state.quotes);
                 let resD = results.data;
                 for (let j = 0; j < resD.length; j++) {
                    mimic.push(resD[j]);                     
                    }
                 this.setState({
                     quotes:mimic
                 });
                
             })
             .catch(error=>{
                 console.log('Giiirl, that did not work');
             });
    }

    render() {
        return (
            <div>
                <h2>To Be Fair</h2>
                <div>
                    <Display quotes={this.state.quotes} paragraphs={this.props.paragraphs}/>
                </div>
            </div>
        );
    }
}

export default SafeForWork;