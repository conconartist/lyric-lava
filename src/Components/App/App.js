import React, { Component } from 'react';
import Prompt from '../Prompt/Prompt';
import Rhymes from '../Rhymes/Rhymes';
import RhymeForm from '../RhymeForm/RhymeForm';
import SynonymForm from '../SynonymForm/SynonymForm';
import Synonyms from '../Synonyms/Synonyms';
import './App.css';
import apiCalls from '../../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      prompt: "",
      rhymeSearchWord: "",
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
    return fetch(`https://wordsapiv1.p.rapidapi.com/words/${searchInput}/synonyms`, {
	    "method": "GET",
	    "headers": {
		    "x-rapidapi-key": "ab8f25f4e4msh6e7ff2ff1b339f9p198212jsn42fc0f56dbc6",
		    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
	  }
  })
  .then(response => response.json())
  .then(data => {
    this.setState({ synonymSearchWord: searchInput, similarWords: data.synonyms })
  })
  .catch(err => {
	  console.error(err);
  });
  }
  searchForRhymes = (searchInput) => {
    fetch(`https://wordsapiv1.p.rapidapi.com/words/${searchInput}/rhymes`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "ab8f25f4e4msh6e7ff2ff1b339f9p198212jsn42fc0f56dbc6",
		"x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(data => {
  this.setState({ rhymeSearchWord: searchInput, rhymingWords: data.rhymes.all })
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
        <SynonymForm 
          searchForSimilar={this.searchForSimilar}
        />
        <RhymeForm
          searchForRhymes={this.searchForRhymes}
        />
        <Synonyms 
          word={this.state.synonymSearchWord}
          synonyms={this.state.similarWords}
        />
        <Rhymes 
          word={this.state.rhymeSearchWord}
          rhymes={this.state.rhymingWords}
        />
      </main>
    )
  }
}
export default App;
