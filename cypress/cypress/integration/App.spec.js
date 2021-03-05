describe('Main Display', () => {
    const url = 'http://localhost:3000';

    beforeEach(() => {
        cy.visit(url)
    })

    it('should be able to visit the url and see the title of the app', () => {
        cy
        .get('h1').should('contain','Lyric Lava')
    })
        
    it('should display a prompt button', () => {
        cy
        .get('.prompt').should('be.visible')
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

    it('should display a list of words when a word is entered in the search similar words input field', () => {

    })

    it('should display a list of rhyming words when a word is entered in the search rhyming words field', () => {

    })

    it('should display an error if the word is not found from searching', () => {

    })
})