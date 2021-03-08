import React, { Component } from 'react';
import Load from '../Load/Load';
import Error from '../Error/Error';
import FavoritePrompts from '../FavoritePrompts/FavoritePrompts';
import Prompt from '../Prompt/Prompt';
import FormResults from '../FormResults/FormResults';
import RhymeForm from '../RhymeForm/RhymeForm';
import SynonymForm from '../SynonymForm/SynonymForm';
import WordList from '../WordList/WordList';
import './App.css';
import apiCalls from '../../apiCalls';
import { Route, Link } from 'react-router-dom';

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
	    console.error("Something went wrong while fetching the prompt. Please try again.");
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
	        console.error("Something went wrong while fetching synonyms. Please try again.");
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
	      console.error("Something went wrong while fetching rhymes. Please try again.");
      });
    }
  }

  addToFavorites = () => {
    this.setState({favoritePrompts: [...this.state.favoritePrompts, this.state.prompt]})
  }
  
  deletePrompt = (promptId) => {
    const filteredPrompts = this.state.favoritePrompts.filter(prompt => prompt !== promptId)
    this.setState({favoritePrompts: filteredPrompts})
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
              <section className="welcomePage">
                <h2 className='welcomeTitle'>Let your ideas flow.</h2>
                <div className='welcomeAffirmations'>
                  <p className='welcome'>Take some time to create.</p>
                  <p className='welcome'>Remove your distractions.</p>
                  <p className='welcome'>Get settled in.</p>
                  <p className='welcome'>Take a deep breath.</p>
                  <p className='welcome'>Don't judge. Just write.</p>
                  <Link to='/home'>
                    <p className='enterButton'>Begin</p>
                  </Link>
                </div>
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
                {this.state.error && <h2>Happy accidents. Embrace the mistakes. Try again.</h2>}
                <section className="selectionContainer">
                  {this.state.fetchingPrompt && <Load type='prompt'/>}
                  <Prompt 
                    clickForPrompt={this.clickForPrompt} 
                    prompt={this.state.prompt}
                    addToFavorites={this.addToFavorites}
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
                  {this.state.fetchingSynonyms && <Load type='synonyms'/>}
                  {this.state.fetchingRhymes && <Load type='rhymes'/>}
                  {this.state.synonymSearchWord && this.state.similarWords === undefined && <Error type='synonyms' />}
                  {this.state.similarWords !== undefined && this.state.similarWords.length !== 0 && 
                    <FormResults
                      word={this.state.synonymSearchWord}
                      wordResults={this.state.similarWords}
                      type='synonyms'
                    />
                  }
                  {this.state.rhymeSearchWord && this.state.rhymingWords === undefined && <Error type='rhymes' />}
                  {this.state.rhymingWords !== undefined && this.state.rhymingWords.length !== 0 &&
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
          />
        </Route>

        <Route path='/favorite-prompts'>
          <FavoritePrompts 
            favPrompts={this.state.favoritePrompts}
            deletePrompt={this.deletePrompt}
          />
        </Route>
      </main>
    )
  }
}
export default App;
