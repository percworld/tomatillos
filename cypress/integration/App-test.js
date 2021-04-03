
describe('Rancid Tomotillo', () => {
    beforeEach(() => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/581392', { fixture: 'test_movie.js' })
            .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'test_films.js' })
            .visit('http://localhost:3000/')
    })
    it('displays the home page', () => {
        cy.get("header").contains("h4", "RANCID")
            .get('.home').should('be.visible').and('have.class', 'nav-btn')
            .get('.nav-btn').should('be.visible').contains('PROFILE')
            .get('.gridDisplay').children().should('have.class', 'movie')

    })
    it('Should display all movies', () => {
        cy.get('.gridDisplay')
            .get('.movie').children()
            .should('exist').and('have.attr', 'href')
    });
    it('Should select a single movie', () => {
        cy.get('.gridDisplay')
            .get('.movie')
            .first().click()
    })
    it('can display movie details route', () => {
        cy.get(".mainCoverImage").eq(2).click()
            .url().should('include', '/337401')
        //.get('.small-specs-box').contains('h4', "September")
        //.get('.specs-box').contains('82')
    })
    it('Should display all movie details', () => {
        cy.get('.gridDisplay')
            .get('.movie')
            .first().click().get('.movie-details-container')
            .get('[alt="Movie Poster"]').should('be.visible')
            .get('h1').contains('Peninsula')
            .get('h4').contains('Escape The Apocalypse')
            .get('p').contains('7')
            .get('p').contains('114')
            .get('h3').should('have.class', 'overview')
            .get('p').contains('$17,000,000')
            .get('p').contains('$35,878,266')
            .get('h4').contains('July 14, 2020')
    });
    it('Should have a functional back button', () => {
        cy.get('.gridDisplay')
            .get('.movie')
            .first().click()
            .get('.backArrow').children().should('have.length', '2')
    });
    it('Should see a navigation bar', () => {
        cy.get('header')
            .get('h4').contains('RANCID TOMATILLOS')
            .get('img').should('have.class', 'tomato')
            .get('button').should('have.class', 'nav-btn')
    });
    it('Should have a search bar', () => {
        cy.get('form')
            .get('input')
            .should('exist')
    });
    it('Should execute a movie search', () => {
        cy.get('input[type=text]').type('Peninsula')
            .should('have.value', 'Peninsula')
            .get(".submit-btn").click()
            .get('.movie')
            .first().click()
    });

    it('should handle searchField casetypes', () => {
        cy.get('input[type=text]').type('rogue')
            .should('have.value', 'rogue')
            .get(".submit-btn").click()
        cy.get(".mainCoverImage").first().click()
        cy.url().should('include', '/')
    })


    it('should go back to main view by clicking go Back button', () => {
        cy.get('input[type=text]').type('peninsula')
            .get(".submit-btn").click()
        cy.get(".mainCoverImage").first().click()
        cy.url().should('include', '/581392')
        cy.get('.backArrow').click()
        cy.url().should('include', '/')

    })

})

