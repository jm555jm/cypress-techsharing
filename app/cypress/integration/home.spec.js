import '@testing-library/cypress/add-commands';
/* eslint-disable no-undef */
describe('Home Page', () => {
  it('Find home button', () => {
    cy.visit("/");
    cy.contains('Home')
  })

  it('Go to groups', () => {
    cy.visit("/");
    cy.findByRole('link', {name: 'Groups'})
      .click()
      .then(() => {
        cy.contains('Dongguan Tech Community')
      })
  })
  it('Edit "Shenzhen Tech Community"', () => {
    cy.visit("/")
    cy.findByRole('link', {name: 'Groups'})
      .click()
    cy.findByText('Shenzhen Tech Community')
      .parent()
      .findByRole('button', {name: 'Edit'})
        .click()
        .then(() => {
          cy.contains('Edit Group')
          cy.findByRole('textbox', {name: 'Group Name'})
          .clear()
          .type('Taiwan NO.1')
          cy.findByRole('textbox', {name: 'Address'})
          .clear()
          .type('Taipei 101')
          cy.findByRole('textbox', {name: 'City'})
          .clear()
          .type('Taipei')
          cy.findByRole('textbox', {name: 'State/Province'})
          .clear()
          .type('USA')
          cy.findByRole('textbox', {name: 'Country'})
          .clear()
          .type('Taiwan')
          cy.findByRole('textbox', {name: 'Postal Code'})
          .clear()
          .type('104')
          cy.findByRole('button', {name: 'Submit'})
          .click()
          .then(() => {
            cy.contains('Taipei 101 Taipei USA Taiwan 104')
          })
        })
  })

  it('Delete "Shanghai Tech Community"', () => {
    cy.visit("/")
    cy.findByRole('link', {name: 'Groups'})
      .click()
    cy.findByText('Shanghai Tech Community')
      .parent()
      .findByRole('button', {name: 'Delete'})
        .click()
        .then(() => {
          cy.get('Shanghai Tech Community').should('not.exist');
        })
  })
})