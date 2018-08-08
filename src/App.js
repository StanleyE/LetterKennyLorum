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
          <div className='dropdown'>
            <button className='btn btn-secondary dropdown-toggle' type='button' id='select' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
            Ones
            </button>
            <div className='dropdown-menu' aria-labelledby='select'>
                <button className='dropdown-item' type='button'>Twos</button>
                <button className='dropdown-item' type='button'>Threes</button>
                <button className='dropdown-item' type='button'>Fours</button>
                <button className='dropdown-item' type='button'>Fives</button>
                <button className='dropdown-item' type='button'>Sixes</button>
            </div>
          </div>
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
