import React, { Component } from 'react';
import Load from '../Load/Load';
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
    this.setState({fetchingPrompt: true})
    apiCalls.getPrompt()
    .then((data) => { 
      if (data.examples.length === 0) {
        this.setState({ prompt: data.word, fetchingPrompt: false })
      } else {
        this.setState({ prompt: data.examples[0], fetchingPrompt: false })
      }
    })
    .catch(err => {
      this.setState({ error: true, fetchingPrompt: false})
	    console.error(err);
    });
  }

  searchForSimilar = (searchInput) => {
    this.setState({fetchingSynonyms: true})
    if(searchInput) {
      apiCalls.getSynonyms(searchInput)
        .then(data => {
          this.setState({ synonymSearchWord: searchInput, similarWords: data.synonyms, fetchingSynonyms: false })
        })
        .catch(err => {
          this.setState({ error: true, fetchingSynonyms: false })
	        console.error(err);
        });
    }  
  }

  searchForRhymes = (searchInput) => {
    this.setState({fetchingRhymes: true})
    if(searchInput) {
      apiCalls.getRhymes(searchInput)
      .then(data => {
        this.setState({ rhymeSearchWord: searchInput, rhymingWords: data.rhymes.all, fetchingRhymes: false })
      })
      .catch(err => {
        this.setState({ error: true, fetchingRhymes: false })
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
                {/* //add nav bar to show favorites and home button */}
                <section className="selectionContainer">
                  {/* add error handling for prompt */}
                  {this.state.fetchingPrompt && <Load />}
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
                  {this.state.fetchingSynonyms && <Load />}
                  {this.state.similarWords.length !== 0 && 
                    <FormResults
                      word={this.state.synonymSearchWord}
                      wordResults={this.state.similarWords}
                      type='synonyms'
                    />
                  }
                  {this.state.fetchingRhymes && <Load />}
                  {this.state.rhymingWords.length !== 0 &&
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
