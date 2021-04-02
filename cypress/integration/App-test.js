
describe('response check', () => {
    // const movie = {
    //     "movie": {
    //         "id": 581392,
    //         "title": "Peninsula",
    //         "poster_path": "https://image.tmdb.org/t/p/original//sy6DvAu72kjoseZEjocnm2ZZ09i.jpg",
    //         "backdrop_path": "https://image.tmdb.org/t/p/original//gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg",
    //         "release_date": "2020-07-15",
    //         "overview": "A soldier and his team battle hordes of post-apocalyptic zombies in the wastelands of the Korean Peninsula.",
    //         "genres": [
    //             "Action",
    //             "Horror",
    //             "Thriller"
    //         ],
    //         "budget": 17000000,
    //         "revenue": 35878266,
    //         "runtime": 114,
    //         "tagline": "Escape The Apocalypse",
    //         "average_rating": 7
    //     }
    // }
    it('should get all movies data upon request', () => {
        cy.visit('http://localhost:3000/')
        cy.intercept('/', { fixture: "test_films.js" })
        cy.get(".mainCoverImage")//.should('have.css')

    })

    it('should get movie data upon request', () => {

        cy.intercept('/581392', { fixture: "test_movie.js" })
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
