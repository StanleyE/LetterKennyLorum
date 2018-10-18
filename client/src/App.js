import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import SafeForWork from './components/SafeForWork';
import NotSafeForWork from './components/NotSafeForWork';

class App extends Component {
  constructor(){
    super();
    this.state = {
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
    let scroll = document.getElementById("display");
    scroll.scrollIntoView();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Letterkenny Lorem Ipsum</h1>
          <nav>
          <Link className='link safe' to='/safe'> Safe for Work</Link>
          <Link className='link notsafe' to='/nsfw'> Not Safe for Work</Link>
        </nav>
        </header>
        <div className='opener'>
          <h5>Now don't be a pupper, you can class up your website with a little Letterkenny lorum ispum! Fill any empty space with your favourite quotes from this great Canadian comedy. The Super soft Safe for work or the Shorsey not so safe for work versions, be careful which ply you choose there bud.</h5>
        </div>
        <div>
          <h2>Well pitter patter, let's get at'er!</h2>
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
          <Route exact path='/safe' render = {() => {return <SafeForWork paragraphs={this.state.paras} />} } />
          <Route path='/nsfw' render = {() => {return <NotSafeForWork paragraphs = {this.state.paras} />} } />
        </Switch>
        <div className="disclaim">
          <p>
            Still need a fix? Check out the Official Site and grab some sweet merch <a href="http://www.letterkenny.tv" target= '_blank' rel="noopener noreferrer">Here</a> or binge watch all available seasons on <a href="https://www.cravetv.ca/show/letterkenny-34584" target= '_blank'rel='noopener noreferrer'>CraveTV</a>
            <br/>
            And Thank God for Canadian Country Boys
          </p>
        </div>
        <footer>
          <span>
            <p>Who the heck made this? Just a fan that happens to be a junior web developer, you can check out my site <a href="http://www.ericasweb.com" target='_blank' rel='noopener noreferrer' >here!</a></p>
          </span>
          <span>
            <p>I love the field background! Check out the photographer from unsplash <a href="https://unsplash.com/photos/tylohxbj5tg" target="_blank" rel='noopener noreferrer'>here!</a></p>
          </span>
        </footer>
      </div>
    );
  }
}

export default App;
