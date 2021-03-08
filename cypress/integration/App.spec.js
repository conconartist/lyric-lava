describe('Main Display', () => {
    const url = 'http://localhost:3000';
    
    describe('Greeting', () => {
      beforeEach(() => {
        cy
        .visit(url)  
        .get('.enterButton').click()  
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
    })

    describe('Main', () => {
        beforeEach(() => {
          cy
          .visit(url)
          .get('.enterButton').click()
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

    it('should display a loading message when the buttons are clicked to search for words', () => {
        cy
        .get('.synonymSearchBar').type('hello')
        .wait(5000)
        .get('.buttonThesaurus').click()
        .get('.resultsDisplay > .loadingMessage').should('be.visible')
    })

    it('should display a list of words when a word is entered in the "get similar words" input field', () => {
        cy
        .get('.synonymSearchBar').type('hello')
        .get('.buttonThesaurus').click()
        .wait(2000)
        .get('.resultsListSynonyms').should('contain', 'howdy')
    })

    it('should display a list of rhyming words when a word is entered in the "get rhyming words" input field', () => {
        cy
        .get('.rhymeSearchBar').type('single')
        .get('.buttonRhymes').click()
        .get('.resultsListRhymes').should('contain', 'jingle')
    })

    it('should display an error if the word is not found from searching for similar words', () => {
        cy
        .get('.synonymSearchBar').type('ojojie')
        .get('.buttonRhymes').click()
        .get('.errorMessage').should('contain', 'What a cool word!')
        .get('.errorMessage').should('be.visible')
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

    describe('Word List Display', () => {
      beforeEach(() => {
        cy
        .visit(url)
        .get('.enterButton').click()
        })
        
    it('should display a full list of words on a different page when the button to see more results is clicked', () => {
        cy
        .get('.rhymeSearchBar').type('single')
        .get('.buttonRhymes').click()
        .get('.listButton').click()
        .location('pathname').should('eq', '/rhymes')
        .get('.resultsContainer > .resultsList > .rhymeWord').should('contain', 'bingle')
        .get('.resultsContainer > .resultsList > .rhymeWord').should('contain', 'whelk tingle')
        })
    
    it('should display a home button when you are on the full results page', () => {
        cy
        .get('.rhymeSearchBar').type('single')
        .get('.buttonRhymes').click()
        .get('.listButton').click()
        .get('.resultsContainer > a > button').should('be.visible')
    })
    })

    describe('Favorite Prompts', () => {
        it('should display a button to see your favorite prompts', () => {
            cy
            .visit(url)
            .get('.enterButton').click()
            .get('.promptButtonContainer > .favoritesButton').should('be.visible')
        })

        it('should let you add your favorite prompts', () => {
            cy
            .visit(url)
            .get('.enterButton').click()
            .get('.prompt').click()
            .get('.favoritesButton').click()
        })

        beforeEach(() => {
            cy
            .visit(url)
            .get('.enterButton').click()
            .get('.prompt').click()
            .get('.favoritesButton').click()
            .get('.prompt').click()
            .get('.favoritesButton').click()
            .get('.prompt').click()
            .get('.favoritesButton').click()
        })
        it('should display a list of your favorite prompts on a separate page when you click the button to see your prompts', () => {

        })
        it('should display a button to go back home on the favorite prompts page', () => {

        })
        it('should take you back to the home page when you click the home button from the prompts page', () => {

        })
    })
   
   
    
    

    
})