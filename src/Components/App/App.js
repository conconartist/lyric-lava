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
      fetchingRhymes: false,
      fetchingSynonyms: false,
      favoritePrompts: [],
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
          this.setState({ synonymSearchWord: searchInput, similarWords: data.synonyms, fetchingSynonyms: true })
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
        this.setState({ rhymeSearchWord: searchInput, rhymingWords: data.rhymes.all, fetchingRhymes: true })
      })
      .catch(err => {
        this.setState({ error: true })
	      console.error(err);
      });
    }
  }
//render if error is true
//render loading component
  handleClick = () => {
    this.setState({fetchingRhymes: false, fetchingSynonyms: false})
  }

  addToFavorites = () => {
    this.setState({favoritePrompts: [...this.state.favoritePrompts, this.state.prompt]})
  }

  render() {
    return (
      <main>
        <h1 className='title'>Lyric Lava</h1>
        {/* //refactor to another component
        {this.state.favoritePrompts && <h2>{this.state.favoritePrompts}</h2>} */}
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
                <button className='favoritesButton' onClick={this.addToFavorites}>
                  Add to Favorites
                </button>
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
                  {this.state.fetchingSynonyms && this.state.similarWords && 
                    <FormResults
                      word={this.state.synonymSearchWord}
                      wordResults={this.state.similarWords}
                      type='synonyms'
                    />
                  }
                  {this.state.fetchingRhymes && this.state.rhymingWords &&
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
            word={this.state.rhymeSearchWord}
            wordResults={this.state.rhymingWords}
            type='rhymes'
            handleClick={this.handleClick}
          />
        </Route>
      </main>
    )
  }
}
export default App;
