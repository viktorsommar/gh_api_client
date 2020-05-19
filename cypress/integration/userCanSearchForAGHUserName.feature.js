describe('Search for GitHub user', () => {
  before('', ()=> {
    cy.server()
    cy.route('GET', 'https://api.github.com/search/users?q=Barack', 'fixture:barackResponse.json')
    cy.visit('/')
  })

  it('by entering search term', () => {
    cy.get('input').type('Barack')
    cy.get('button').click()
    cy.get('#search-results').should('contain', 'PresidentObama')
  });
});