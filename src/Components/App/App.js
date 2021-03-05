import React, { Component } from 'react';
import Prompt from '../Prompt/Prompt';
import Form from '../Form/Form';
import './App.css';
import apiCalls from '../../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      prompt: " ",
      rhymingWords: [],
      similarWords: [], 
      isFetching: false
    }
  }
  componentDidMount() {
    this.setState({isFetching: true})
    fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "ab8f25f4e4msh6e7ff2ff1b339f9p198212jsn42fc0f56dbc6",
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
      }
    })
    .then(response => response.json())
    .then(data => { 
    return fetch(`https://wordsapiv1.p.rapidapi.com/words/${data.word}/examples`, {
	      "method": "GET",
	      "headers": {
		    "x-rapidapi-key": "ab8f25f4e4msh6e7ff2ff1b339f9p198212jsn42fc0f56dbc6",
		    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
	    }
    })
    .then(response => response.json())
    .then(data => { 
      console.log(data)
      if (data.examples.length === 0) {
          this.setState({prompt: data.word})
      } else {
      this.setState({ prompt: data.examples[0], isFetching: false })
      }
    })
    .catch(err => {
	  console.error(err);
  })
})
  }

  render() {
    return (
      <main>
        <h1 className='title'>Lyric Lava</h1>
        <h2>Prompt:</h2>
        <h2>{this.state.prompt}</h2>
        <Prompt clickForPrompt='this.clickForPrompt' />
        <Form displayRhymingWords='this.displayRhymingWords' displaySimilarWords='this.displaySimilarWords'/>
      </main>
    )
  }
}
export default App;
