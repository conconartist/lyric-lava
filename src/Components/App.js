import React, { useState } from 'react';
import Load from './Load';
import Error from './Error';
import FavoritePrompts from './FavoritePrompts';
import Nav from './Nav';
import Prompt from './Prompt';
import FormResults from './FormResults';
import Form from './Form';
import WordList from './WordList';
import Welcome from './Welcome';
import '../assets/App.css';
import apiCalls from '../apiCalls';
import { Route, Link } from 'react-router-dom';

const App = () => {
  const [prompt, setPrompt] = useState('');
  const [rhymeSearchWord, setRhymeSearchWord] = useState('');
  const [synonymSearchWord, setSynonymSearchWord] = useState('');
  const [rhymingWords, setRhymingWords] = useState([]);
  const [similarWords, setSimilarWords] = useState([]);
  const [isFetchingPrompt, setIsFetchingPrompt] = useState(false);
  const [isFetchingRhymes, setIsFetchingRhymes] = useState(false);
  const [isFetchingSynonyms, setIsFetchingSynonyms] = useState(false);
  const [favoritePrompts, setFavoritePrompts] = useState([]);
  const [hasError, setHasError] = useState(false)

  const clickForPrompt = () => {
    setIsFetchingPrompt(true)
    apiCalls.getPrompt()
    .then((data) => { 
      if (data.examples.length === 0) {
        setPrompt(data.word)
        setIsFetchingPrompt(false)
      } else {
        setPrompt(data.examples[0])
        setIsFetchingPrompt(false)
      }
    })
    .catch(err => {
      setHasError(true)
      setIsFetchingPrompt(false)
	    console.error("Something went wrong while fetching the prompt. Please try again.");
    });
  }

  const searchForSimilar = (searchInput) => {
    setIsFetchingSynonyms(true)
    if(searchInput) {
      apiCalls.getSynonyms(searchInput)
        .then(data => {
          setSynonymSearchWord(searchInput)
          setSimilarWords(data.synonyms)
          setIsFetchingSynonyms(false)
        })
        .catch(err => {
          setHasError(true)
          setIsFetchingSynonyms(false)
	        console.error("Something went wrong while fetching synonyms. Please try again.");
        });
    }  
  }

  const searchForRhymes = (searchInput) => {
    setIsFetchingRhymes(true)
    if(searchInput) {
      apiCalls.getRhymes(searchInput)
      .then(data => {
        setRhymeSearchWord(searchInput)
        setRhymingWords(data.rhymes.all)
        setIsFetchingRhymes(false)
      })
      .catch(err => {
        setHasError(true)
        setIsFetchingRhymes(false)
	      console.error("Something went wrong while fetching rhymes. Please try again.");
      });
    }
  }

  const addToFavorites = () => {
    setFavoritePrompts([...favoritePrompts, prompt])
  }
  
  const deletePrompt = (promptId) => {
    const filteredPrompts = favoritePrompts.filter(prompt => prompt !== promptId)
    setFavoritePrompts(filteredPrompts)
  }
    return (
      <main>
        <Nav />
        <Route exact path='/'
          render={ () => {
            return (
              <Welcome />
            )
          }}
        />

        <Route exact path='/home'
          render={ () => {
            return (
              <div className='homePage'>
                {hasError && <h2>Happy accidents. Embrace the mistakes. Try again.</h2>}
                <section className="selectionContainer">
                  {isFetchingPrompt && <Load type='prompt'/>}
                  <Prompt 
                    clickForPrompt={clickForPrompt} 
                    prompt={prompt}
                    addToFavorites={addToFavorites}
                  />
                  <div className='formContainer'>
                    <Form 
                      searchForRhymes={searchForRhymes}
                      searchForSimilar={searchForSimilar}
                    />
                  </div>
                </section>   
                <section className='resultsDisplay'>
                  {isFetchingSynonyms && <Load type='synonyms'/>}
                  {isFetchingRhymes && <Load type='rhymes'/>}
                  {synonymSearchWord && similarWords === undefined && <Error type='synonyms' />}
                  {similarWords !== undefined && similarWords.length !== 0 && 
                    <FormResults
                      word={synonymSearchWord}
                      wordResults={similarWords}
                      type='synonyms'
                    />
                  }
                  {rhymeSearchWord && rhymingWords === undefined && <Error type='rhymes' />}
                  {rhymingWords !== undefined && rhymingWords.length !== 0 &&
                    <FormResults
                      word={rhymeSearchWord}
                      wordResults={rhymingWords}
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
            word={synonymSearchWord}
            wordResults={similarWords}
            type='synonyms'
          />
        </Route> 

        <Route path='/rhymes'>
          <WordList
            word={rhymeSearchWord}
            wordResults={rhymingWords}
            type='rhymes'
          />
        </Route>

        <Route path='/favorite-prompts'>
          <FavoritePrompts 
            favPrompts={favoritePrompts}
            deletePrompt={deletePrompt}
          />
        </Route>
      </main>
    )
  }

export default App;
