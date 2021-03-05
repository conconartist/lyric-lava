import React, { Component } from 'react';
import Prompt from '../Prompt/Prompt';
import Form from '../Form/Form';
import './App.css';
import apiCalls from '../../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      prompt: "",
      rhymingWords: [],
      similarWords: [], 
      isFetching: false
    }
  }
  clickForPrompt = () => {
    apiCalls.getPrompt()
    .then((data) => { 
      if (data.examples.length === 0) {
        this.setState({ prompt: data.word })
      } else {
        this.setState({ prompt: data.examples[0]})
      }
    })
    .catch(err => {
	  console.error(err);
    });
  }

  render() {
    return (
      <main>
        <h1 className='title'>Lyric Lava</h1>
        <Prompt 
          clickForPrompt={this.clickForPrompt} 
          prompt={this.state.prompt}
        />
        <Form 
          displayRhymingWords={this.displayRhymingWords} 
          displaySimilarWords={this.displaySimilarWords}
        />
      </main>
    )
  }
}
export default App;
