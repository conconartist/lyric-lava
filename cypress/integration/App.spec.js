describe('Main Display', () => {
    const url = 'http://localhost:3000';

    beforeEach(() => {
        cy.visit(url)
        cy.get('.enterButton').click()
    })

    it('should be able to visit the url and see the title of the app', () => {
        cy
        .get('h1').should('contain','Lyric Lava')
    })
        
    it('should be able to click on the button to take you to the home page with visible prompt button and search bars', () => {
        cy
        .get('.prompt').should('be.visible')
        .get('.synonymSearchForm').should('be.visible')
        .get('.rhymeSearchForm').should('be.visible')
    })

    it('should take you to a new url when the button is clicked', () => {
        cy
        .location('pathname').should('eq', '/home')
    })

    it('should display a loading message when the button is rendering a prompt', () => {
        cy
        .get('.prompt').click()
        .get('.loadingMessage > .loadingText').should('contain', "Loading")
    })

    it('should display a prompt when you press the prompt button', () => {
        cy
        .get('.prompt').click()
        expect('.promptDisplay > .promptResult').to.be.a('string')
        expect('.promptDisplay > .promptResult').to.not.equal(undefined)
    })

    it('should display a search bar to find rhyming words', () => {
        cy
        .get('.rhymeWordsForm').should('be.visible')
    })

    it('should display a search bar for similar words', () => {
        cy
        .get('.similarWordsForm').should('be.visible')
    })

    it('should display an error message if a word does not display when the prompt button is clicked', () => {
        cy
        .intercept({
            "method": "GET",
            "url": "https://wordsapiv1.p.rapidapi.com/words/?random=true",
        }, {
        "statusCode": 404,
        "body": { error: "Something went wrong. Please try again." },
        "headers": {
          "x-rapidapi-key": "ab8f25f4e4msh6e7ff2ff1b339f9p198212jsn42fc0f56dbc6",
          "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
        }
        })
    })

    it('should display a loading message when the buttons are clicked to search for similar words', () => {
        cy
        .get('.prompt').click()
        .get('.synonymSearchBar').type('hello')
        .get('.buttonThesaurus').click()
        .get('.loadingMessage > .loadingText').should('contain', "Loading")
    })

    it('should display a list of words when a word is entered in the "get similar words" input field', () => {
        cy
        .get('.prompt').click()
        .get('.synonymSearchBar').type('hello')
        .get('.buttonThesaurus').click()
        .get('.resultsListSynonyms').should('contain', 'howdy')
    })

    it('should display a loading message when the buttons are clicked to search for rhyming words', () => {
        cy
        .get('.prompt').click()
        .get('.rhymeSearchBar').type('single')
        .get('.buttonRhymes').click()
        .get('.loadingMessage > .loadingText').should('contain', "Loading")
    })

    it('should display a list of rhyming words when a word is entered in the "get rhyming words" input field', () => {
        cy
        .get('.prompt').click()
        .get('.rhymeSearchBar').type('single')
        .get('.buttonRhymes').click()
        .get('.resultsListRhymes').should('contain', 'jingle')
    })

    it('should return an error if the word is not found from searching for similar words', () => {
        cy
        .intercept({
            "method": "GET",
            "url": "https://wordsapiv1.p.rapidapi.com/words/ojojie/synonyms",
        }, {
        "statusCode": 404,
        "body": { error: "Something went wrong. Please try again." },
        "headers": {
          "x-rapidapi-key": "ab8f25f4e4msh6e7ff2ff1b339f9p198212jsn42fc0f56dbc6",
          "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
        }
        })
    })

    it('should display an error if the word is not found from searching for similar words', () => {
    })

    it('should return an error if the word is not found from searching for rhyming words', () => {
        cy
        .intercept({
            "method": "GET",
            "url": "https://wordsapiv1.p.rapidapi.com/words/zxc/rhymes",
        }, {
        "statusCode": 404,
        "body": { error: "Something went wrong. Please try again." },
        "headers": {
          "x-rapidapi-key": "ab8f25f4e4msh6e7ff2ff1b339f9p198212jsn42fc0f56dbc6",
          "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
        }
        })
    })

    it('should display an error if the word is not found from searching for rhyming words', () => {
    })

    it('should display a list of words and a button to click to see more results if the returning array is longer than 10 words', () => {

    })

    it('should display a full list of words on a different page when the button to see more results is clicked', () => {

    })

    it('should display a home button when you are on the full results page', () => {

    })

    //it should let you add your favorite prompts
    //it should display a button to see your favorite prompts
    //it should display a list of your favorite prompts on a separate page when you click the button to see your prompts
    //it should display a button to go back home on the favorite prompts page
    //it should take you back to the home page when you click the home button from the prompts page
})