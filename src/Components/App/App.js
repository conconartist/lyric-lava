import React, { Component } from 'react';
import Prompt from '../Prompt/Prompt';
import FormResults from '../FormResults/FormResults';
import RhymeForm from '../RhymeForm/RhymeForm';
import SynonymForm from '../SynonymForm/SynonymForm';
import './App.css';
import apiCalls from '../../apiCalls';
import { Route } from 'react-router-dom';

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
    if(searchInput) {
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
  }

  searchForRhymes = (searchInput) => {
    if(searchInput) {
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
  }

  render() {
    return (
      <main>
        <h1 className='title'>Lyric Lava</h1>
        <Route
          exact
          path='/'
          render={ () => {
            return (
              <section className="selectionContainer">
              <Prompt 
                clickForPrompt={this.clickForPrompt} 
                prompt={this.state.prompt}
              />
              <div className='formContainer'>
                <SynonymForm 
                  searchForSimilar={this.searchForSimilar}
                />
                <RhymeForm
                  searchForRhymes={this.searchForRhymes}
                />
              </div>
              </section>
            )
          }}
        />

        <section className='resultsDisplay'>
          {this.state.prompt && 
            <div className='promptDisplay'>
              <h3 className='promptHeading'>Your prompt:</h3>
              <p>{this.state.prompt}</p>
            </div>
          }
          {this.state.similarWords &&
            <FormResults
              word={this.state.synonymSearchWord}
              wordResults={this.state.similarWords}
              type='synonyms'
            />
          }

          {this.state.rhymingWords &&
            <FormResults
              word={this.state.rhymeSearchWord}
              wordResults={this.state.rhymingWords}
              type='rhymes'
            /> 
          }
        </section>
        
      </main>
    )
  }
}
export default App;
