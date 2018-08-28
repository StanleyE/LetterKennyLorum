import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import SafeForWork from './SafeForWork';
import NotSafeForWork from './NotSafeForWork';

class App extends Component {
  constructor(){
    super();
    this.state={
      dummy:['dummy data.', 'I\'s thinks I\'m havings a stroke.', 'the internets.', 'whitefish.', 'sushi.', 'and thats what I appreciates abouts you.', 'whos a dad?'],
      paras: 0,
    }
 
  }
  selectPars=(event)=>{
    //on submit refresh is prevented and the current value is collected
    event.preventDefault();
    let parNums = this.refs.parNumbers.value; 
    //duplicate state is made then changed to current value and reassigned
    let mimic = Array.from(this.state.paras);
    mimic = parNums;
    this.setState({
      paras:mimic
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">LetterKenny Lorem Ipsum</h1>
        </header>
        <div>
          <p>Now don't be a pupper, you can class up your website with a little Letterkenny Lorum ispum! Fill any empty space with your favourite quotes from this great Canadian comedy. Regular safe for work or the Shorsey not so safe for work versions, be careful which ply you choose there bud.</p>
        </div>
        <nav>
          <Link className='link safe' to='/'> Safe for Work</Link>
          <Link className='link notsafe' to='/nsfw'> Not Safe for Work</Link>
        </nav>
        <div>
          <p>Well pitter patter, let's get at'er!</p>
          <form onSubmit ={this.selectPars} className= 'numberOfParas'>
            <select className='btn btn-secondary' ref='parNumbers' >
              <option value="1">Ones</option>
              <option value="2">Twos</option>
              <option value="3">Threes</option>
              <option value="4">Fours</option>
              <option value="5">Fives</option>
              <option value="6">Sixes</option>
              <option value="7">Sevens</option>
            </select>
            <button className='btn btn-secondary' type='submit' >Someone get this guy a Puppers</button>
          </form>
        </div>
        <Switch>
          <Route exact path='/' render = {() => {return <SafeForWork quotes={this.state.dummy} paragraphs={this.state.paras}/>} } />
          <Route path='/nsfw' render = {() => {return <NotSafeForWork />} } />
        </Switch>
      </div>
    );
  }
}

export default App;
