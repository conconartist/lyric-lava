import React, { Component } from 'react';
import Prompt from './Prompt/Prompt'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      words: []

    }
  }
  componentDidMount() {

  }
  handleClick() {
    //display new prompt on screen from examples in words
  }
  render() {
    return (
      <main>
        <h1 className='title'>Lyric Lava</h1>
        <Prompt handleClick={this.handleClick} />
      </main>
    )
  }
}
export default App;
