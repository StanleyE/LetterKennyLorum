import React, { Component } from 'react';

class Display extends Component {
    render() {
        let displayJSX=[];
        let data = this.props.quotes;
        let paras = this.props.paragraphs;
            for (let i = 0; i < data.length; i++) {
                displayJSX.push(data[i]+ ' ');   
            }
            console.log(displayJSX.length);
            //need a function that is going to take the paras number and make X# paragraph(s) using math.random to randomly pick (via index position) quotes from displayJSX
            function generator(jsx) {
                let tank = [];
                let paragraph = [];
                for (let i = 0; i < 7; i++) {
                    let random = Math.floor(Math.random()*43);
                    if (tank.length > 0) {
                        //if random is === to something already in the tank i minus 1
                        for (let j = 0; j < tank.length; j++) {
                            
                            
                        }
                    } else {
                        tank.push(random);
                    }
                };
                console.log(tank);
                tank.forEach((ele)=>{
                    paragraph.push(jsx[ele]);
                });
                return paragraph;
            }
            // generator(displayJSX);

        return (
            <div>
                {paras}<br/>
                {/* {data}<br/> */}
                <p>{displayJSX}</p>
                <p>{generator(displayJSX)}</p>
            </div>
        );
    }
}

export default Display;