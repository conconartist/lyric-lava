describe('Main Display', () => {
    const url = 'http://localhost:3000';

    beforeEach(() => {
        cy.visit(url)
    })

    it('should be able to visit the url and see the title of the app', () => {
        cy
        .get('h1').should('contain','Lyric Lava')
    })
        
    it('should be able to click on the button to take you to the home page with visible prompt button and search bars', () => {
        cy
        .get('.enterButton').click()
        .get('.prompt').should('be.visible')
        .get('.synonymSearchForm').should('be.visible')
        .get('rhymeSearchForm').should('be.visible')
    })

    it('should take you to a new url when the button is clicked', () => {

    })

    it('should display a prompt when you press the prompt button', () => {
        cy
        .get('h3').should('contain', '')
        .get('.prompt').click()
        expect('h3').to.be.a('string')
        expect('h3').to.not.equal(undefined)
    })

    it('should display a search bar to find rhyming words', () => {
        cy
        .get('.rhymingWordsForm').should('be.visible')
    })

    it('should display a search bar for similar words', () => {
        cy
        .get('.similarWordsForm').should('be.visible')
    })

    it('should display a loading image when the button is rendering a prompt', () => {

    })

    it('should display an error message if a word does not display when the prompt button is clicked', () => {

    })

    it('should display a loading message when the buttons are clicked to search for similar words', () => {

    })

    it('should display a list of words when a word is entered in the "get similar words" input field', () => {

    })

    it('should display a loading message when the buttons are clicked to search for rhyming words', () => {

    })

    it('should display a list of rhyming words when a word is entered in the "get rhyming words" input field', () => {

    })

    it('should display an error if the word is not found from searching for similar words', () => {

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