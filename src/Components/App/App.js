import React, { Component } from 'react';
import Prompt from '../Prompt/Prompt';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      prompt: {},
      rhymingWords: [],
      similarWords: []
    }
  }
  componentDidMount() {
    //do i need this?
  }
  displayRhymingWords() {

  }
  displaySimilarWords() {

  }
  // displayRhymingWords() {

  // }
  // displaySimilarWords() {

  // }
  clickForPrompt() {
    //display new prompt on screen from examples in words
  }
  render() {
    return (
      <main>
        <h1 className='title'>Lyric Lava</h1>
        <Prompt clickForPrompt='this.clickForPrompt' />
        <Form displayRhymingWords='this.displayRhymingWords' displaySimilarWords='this.displaySimilarWords'/>
      </main>
    )
  }
}
export default App;
