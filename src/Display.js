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
                //main loop
                for (let i = 0; i < 8; i++) {
                    //generate random number
                    let random = Math.floor(Math.random()*43);
                    //if tank array don't have a number just push first number
                    if (tank.length < 1) {
                        tank.push(random);   
                        //if tank array has an index greater than 1     
                    } else {
                        //compare new random to other numbers in array, if duplicate i-1
                        let hold = 0;
                       tank.forEach((element)=>{
                            if (element === random) {
                                hold++;
                            }
                       });
                       if(hold > 0){
                            i--;
                       } else{
                           tank.push(random);
                       }
                    }
                };
                console.log(tank);
                tank.forEach((ele)=>{
                    paragraph.push(jsx[ele]);
                });
                return paragraph;
            }
            
            generator(jsx);

        return (
            <div>
                {paras}<br/>
                {/* {data}<br/> */}
                {/* <p>{displayJSX}</p> */}
                <p>{generator(displayJSX)}</p>
            </div>
        );
    }
}

export default Display;