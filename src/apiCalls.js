
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
      "x-rapidapi-key": process.env.API_KEY,
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
    }
    })
    .then(response => response.json())
}

export default apiCalls;
