describe('response check', () => {
    // it('should get movie data upon fetch', () => {
    //     cy.intercept({
    //         method: 'GET',
    //         url: 'http//localhost:3000'
    //     },
    //         {
    //             body: "Here is a new string"
    //         }).as('apiCheck')
    //     cy.wait('@apiCheck').then((interception) => {
    //         assert.isNotNull(interception.response.body, '1st API call has data')
    //     })
    // })
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
