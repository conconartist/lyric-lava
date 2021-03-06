import React, { Component } from 'react';
import Prompt from '../Prompt/Prompt';
import Form from '../Form/Form';
import Synonyms from '../Synonyms/Synonyms';
import './App.css';
import apiCalls from '../../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      prompt: "",
      synonymSearchWord: "",
      rhymingWords: [],
      similarWords: [], 
      isFetching: false,
      error: false
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
      this.setState({ error: true })
	    console.error(err);
    });
  }
  searchForSimilar = (searchInput) => {

    console.log("input", searchInput)
    this.setState({ synonymSearchWord: searchInput })
    return fetch(`https://wordsapiv1.p.rapidapi.com/words/${this.state.synonymSearchWord}/synonyms`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "ab8f25f4e4msh6e7ff2ff1b339f9p198212jsn42fc0f56dbc6",
		"x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(data => {
  this.setState({ similarWords: data.synonyms })
})
.catch(err => {
	console.error(err);
});
  }
  searchForRhymes = (event, userInput) => {
    event.preventDefault()
    //fetch similarWords
    // this.displaySimilarWords(similarWords)
    console.log(userInput)
    this.render()
  }
  displayRhymingWords = (rhymingWords) => {
    //handleClick for rhyming search
    // this.setState({rhymingWords: {rhymingWords}})
    this.render()
  }
  displaySimilarWords = (similarWords) => {
    //handleClick for Similar words search
    // this.setState({similarWords: {similarWords}})
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
          searchForSimilar={this.searchForSimilar}
        />
        <Synonyms 
          word={this.state.synonymSearchWord}
          synonyms={this.state.similarWords}
        />
      </main>
    )
  }
}
export default App;
