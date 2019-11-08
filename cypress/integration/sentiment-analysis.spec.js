describe('Sentiment analysis tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.contains('Sentiment Analysis').click()
  })

  it('should be able to interpret positive and negative text', () => {

    // Check for positive sentiment

    cy.get('[data-text-input]')
      .type('this is happy positive text')
      .should('have.value', 'this is happy positive text')

    cy.get('[data-sentiment-score]')
      .invoke('text')
      .should('greaterThan', '0')

    cy.get('[data-general-sentiment]')
      .invoke('text')
      .should('eq', 'Positive')

    cy.get('[data-text-input]')
      .clear()

    // Check for negative sentiment

    cy.get('[data-text-input]')
      .type('this is negative bad text')
      .should('have.value', 'this is negative bad text')

    cy.get('[data-sentiment-score]')
      .invoke('text')
      .should('lessThan', '0')

    cy.get('[data-general-sentiment]')
      .invoke('text')
      .should('eq', 'Negative')
  })
})