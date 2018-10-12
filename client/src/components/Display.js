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
            // console.log(displayJSX);

            //need a function that is going to take the paras number and make X# paragraph(s) using math.random to randomly pick (via index position) quotes from displayJSX
            function generator(jsx, par) {
                let tank = [];
                let paragraph = [];
                if (par === 0 || par === undefined) {
                    return ('How\'re You Now?');
                } else {
                    //main loop
                    for (let i = 0; i < 15; i++) {
                        //generate random number
                        let random = Math.floor(Math.random()*51);
                        //if tank array don't have a number just push first number
                        if (tank.length < 1) {
                            tank.push(random);   
                            //if tank array has an index greater than 1     
                        } else {
                            //compare new random to other numbers in array, if duplicate i-1
                            let hold = 0;
                            tank.forEach((element)=>{
                            //loops through the array, if random is === an element in the array then hold is increased by 1
                                if (element === random) {
                                    hold++;
                                }
                            });
                            hold === 0 ? tank.push(random) : i-- 
                        }
                    };

                    console.log(tank);
                    //now that we have an array of random numbers in the tank we will collect those numbers to our db array and create a paragraph
                    tank.forEach((ele)=>{
                        paragraph.push(jsx[ele]);
                    });
                    return paragraph; 
                }
            }


        return (
            <div id='display' className ='container'>
                <h5>How're you now?</h5>
                {/* <p>{generator(displayJSX, paras)}</p> */}
                <p>{paras > 0 ? generator(displayJSX, paras) : null }</p>

                <p className = {paras> 1 ? null : 'hide' } >{paras > 1 ? generator(displayJSX, paras) : null }</p>

                <p className = {paras> 2 ? null : 'hide' } >{paras > 2 ? generator(displayJSX, paras) : null }</p>

                <p className = {paras> 3 ? null : 'hide' } >{paras > 3 ? generator(displayJSX, paras) : null }</p>

                <p className = {paras> 4 ? null : 'hide' } >{paras > 4 ? generator(displayJSX, paras) : null }</p>

                <p className = {paras> 5 ? null : 'hide' } >{paras > 5 ? generator(displayJSX, paras) : null }</p>

                <p className = {paras> 6 ? null : 'hide' } >{paras > 6 ? generator(displayJSX, paras) : null }</p>
            </div>
        );
    }
}

export default Display;