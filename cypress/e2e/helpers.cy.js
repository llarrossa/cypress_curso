/// <reference types="cypress" />

describe('Helpers...', () => {
	// beforeEach(() => {
	// 	cy.visit('https://www.wcaquino.me/cypress/componentes.html');
	// 	cy.reload();
	// })

	it('Wrap', () => {
		const obj = {
			nome: 'User',
			idade: '20'
		}
		expect(obj).to.have.property('nome')
		cy.wrap(obj).should('have.property', 'nome')

		cy.visit('https://www.wcaquino.me/cypress/componentes.html');
		cy.get('#formNome').then($el => {
			cy.wrap($el).type('funciona???')
		})
	})
})