describe("User can search for other users on Github", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/search/users",
      response: "fixture:example.json"
    })
    cy.visit("/")
    cy.get("input").type("barack")
    cy.get("button").click()
  })
  it("user can see results", () => {
    cy.get("items-id-681626")
  })
})