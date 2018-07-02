import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import SafeForWork from './SafeForWork';
import NotSafeForWork from './NotSafeForWork';

class App extends Component {
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
          <Link class='link safe' to='/'SafeForWork > Safe for Work</Link>
          <Link class='link notsafe' to='/nsfw'NotSafeForWork > Not Safe for Work</Link>
        </nav>
        <Switch>
          <Route exact path='/' render = {() => {return <SafeForWork />} } />
          <Route path='/nsfw' render = {() => {return <NotSafeForWork />} } />
        </Switch>
      </div>
    );
  }
}

export default App;
