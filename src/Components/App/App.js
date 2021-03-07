import React, { Component } from 'react';
import Prompt from '../Prompt/Prompt';
import FormResults from '../FormResults/FormResults';
import RhymeForm from '../RhymeForm/RhymeForm';
import SynonymForm from '../SynonymForm/SynonymForm';
import WordList from '../WordList/WordList';
import './App.css';
import apiCalls from '../../apiCalls';
import { Route, Link, Switch } from 'react-router-dom';

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
      apiCalls.getSynonyms(searchInput)
        .then(data => {
          this.setState({ synonymSearchWord: searchInput, similarWords: data.synonyms })
        })
        .catch(err => {
          this.setState({ error: true })
	        console.error(err);
        });
    }  
  }

  searchForRhymes = (searchInput) => {
    if(searchInput) {
      apiCalls.getRhymes(searchInput)
      .then(data => {
        this.setState({ rhymeSearchWord: searchInput, rhymingWords: data.rhymes.all })
      })
      .catch(err => {
        this.setState({ error: true })
	      console.error(err);
      });
    }
  }
//render if error is true
//render loading component

  render() {
    return (
      <main>
        <h1 className='title'>Lyric Lava</h1>

        <Route
          exact
          path='/'
          render={ () => {
            return (
              <section className="welcomePage">
                <h1>Let your ideas flow.</h1>
                <Link to='/home'>
                  <p>Here</p>
                </Link>
              </section>
            )
          }}
        />
        <Route 
          exact
          path='/home'
          render={ () => {
            return (
              <div className='homePage'>
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
                <section className='resultsDisplay'>
                  {this.state.prompt && 
                    <Prompt 
                      clickForPrompt={this.clickForPrompt}
                      prompt={this.state.prompt}
                    />
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
              </div>
            )
          }}
        />
        <Route path='/synonyms'>
          <WordList 
            word={this.state.synonymSearchWord}
            wordResults={this.state.similarWords}
            type='synonyms'
          />
        </Route> 
        <Route path='/rhymes'>
          <WordList
            word={this.state.rhymingWords}
            wordResults={this.state.rhymingWords}
            type='rhymes'
          />
        </Route>
      </main>
    )
  }
}
export default App;
