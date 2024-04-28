describe('Home page', () => {
  it('Deve renderizar o título', () => {
    cy.visit('/')

    cy.get('h1').contains('Home page')
  })
})