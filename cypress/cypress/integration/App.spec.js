describe('Main Display', () => {
    const url = 'http://localhost:3000';

    // it('should be able to visit the url and see the title of the app')
    //     cy 
    //     .visit(url)
    //     .location()
    // });

    beforeEach(() => {
        cy.visit(url)
    })

    it('should display a prompt button', () => {

    })
    it('should display a new prompt when you press the prompt button again', () => {

    })
    it('should display a search bar to find rhyming words', () => {

    })
    it('should display a search bar for similar words', () => {

    })
    it('should display a random prompt when the prompt button is clicked', () => {

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