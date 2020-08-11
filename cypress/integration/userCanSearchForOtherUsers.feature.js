describe('Search for Github user', () => {
  before(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'https://api.github.com/search/users?q=Barack', 
      response: 'fixture:barackResponse.json',
    })
    cy.visit('/')
    cy.get('input').type('Barack')
    cy.get('button#search').click()
  })

  it('by entering search term', () => {
    cy.get('#search-results').should('contain', 'PresidentObama')
  })
})