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
        .get('.synonymSearchBar').type('hello')
        .get('.buttonThesaurus').click()
        .get('.resultsDisplay > .loadingMessage').should('be.visible')
    })

    it('should display a list of words when a word is entered in the "get similar words" input field', () => {
        cy
        .get('.synonymSearchBar').type('hello')
        .get('.buttonThesaurus').click()
        .get('.resultsListSynonyms').should('contain', 'howdy')
    })

    it('should display a loading message when the buttons are clicked to search for rhyming words', () => {
        cy
        .get('.rhymeSearchBar').type('single')
        .get('.buttonRhymes').click()
        .get('.resultsDisplay > .loadingMessage').should('be.visible')
    })

    it('should display a list of rhyming words when a word is entered in the "get rhyming words" input field', () => {
        cy
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
        cy
        .get('.synonymSearchBar').type('ojojie')
        .get('.buttonRhymes').click()
        .get('.errorMessage').should('contain', 'What a cool word!')
        .get('.errorMessage').should('be.visible')
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
        cy
        .get('.rhymeSearchBar').type('zxc')
        .get('.buttonRhymes').click()
        .get('.errorMessage').should('contain', 'You\'re so creative')
        .get('.errorMessage').should('be.visible')
    })
        

    it('should display a list of words and a button to click to see more results if the returning array is longer than 10 words', () => {
        cy
        .get('.rhymeSearchBar').type('single')
        .get('.buttonRhymes').click()
        .get('.resultsListRhymes > .rhymeWord').should('contain', 'bingle')
        .get('.resultsContainerRhymes > a > .listButton').should('be.visible')
    })
    it('should go to a different page when the "Click to See All Results" button is clicked', () => {
        cy
        .get('.rhymeSearchBar').type('single')
        .get('.buttonRhymes').click()
        .get('.listButton').click()
        .location('pathname').should('eq', '/rhymes')
    })
    
})