
describe('response check', () => {
    it('should get all movies data upon request', () => {
        cy.visit('http://localhost:3000/')
        cy.intercept('/', { fixture: "test_films.js" })
        cy.get(".mainCoverImage")

    })

    it('should get movie data upon request', () => {

        cy.intercept('/581392', { fixture: "test_movie.js" }).get('.mainCoverImage')
    })
})
describe('As a user', () => {
    beforeEach('go to site', () => {
        cy.visit('http://localhost:3000/')
    })
    it('displays the home page', () => {
        cy.get("header").contains("h4", "RANCID")
            .get('.gridDisplay')
    })

    it('executes a movie search', () => {
        cy.get('input[type=text]').type('rogue')
            .wait(100)
            .should('have.value', 'rogue')
            .get(".submit-btn").click()
        cy.get(".mainCoverImage").click()
        cy.url().should('include', '/')
    })

    it('can display movie details', () => {
        cy.get('input[type=text]').type('mulan')
            .get(".submit-btn").click()
        cy.get(".mainCoverImage").click()
        cy.url().should('include', '/337401')
        cy.get('.small-specs-box').contains('h4', "September")
        cy.get('.specs-box').contains('5')
    })

    it('should go back to main view by clicking go Back button', () => {
        cy.get('input[type=text]').type('peninsula')
            .get(".submit-btn").click()
        cy.get(".mainCoverImage").click()
        cy.url().should('include', '/581392')
        cy.get('.backArrow').click()
        cy.url().should('include', '/')

    })

})
