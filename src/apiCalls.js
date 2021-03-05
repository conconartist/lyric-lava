
const apiCalls = {
  getPrompt: () => {
    return fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "ab8f25f4e4msh6e7ff2ff1b339f9p198212jsn42fc0f56dbc6",
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
      }
    })
    .then(response => response.json())
    .then(data => { 
      return fetch(`https://wordsapiv1.p.rapidapi.com/words/${data.word}/examples`, {
	      "method": "GET",
	      "headers": {
		    "x-rapidapi-key": "ab8f25f4e4msh6e7ff2ff1b339f9p198212jsn42fc0f56dbc6",
		    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
	      }
      })
    })
    .then(response => response.json())
  }
}




export default apiCalls;