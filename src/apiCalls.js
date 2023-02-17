
const apiCalls = {

  getPrompt: () => {
    return getData("https://wordsapiv1.p.rapidapi.com/words/?random=true")
    .then(data => {
      return getData(`https://wordsapiv1.p.rapidapi.com/words/${data.word}/examples`)
    })

  },

  getRhymes: (searchInput) => {
    return getData(`https://wordsapiv1.p.rapidapi.com/words/${searchInput}/rhymes`)
  },

  getSynonyms: (searchInput) => {
    return getData(`https://wordsapiv1.p.rapidapi.com/words/${searchInput}/synonyms`)
  }

}

const getData = (url) => {
  return fetch(url, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "ab8f25f4e4msh6e7ff2ff1b339f9p198212jsn42fc0f56dbc6",
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
    }
    })
    .then(response => response.json())
}

export default apiCalls;
