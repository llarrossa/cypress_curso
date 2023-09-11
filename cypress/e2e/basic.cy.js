/// <reference types="cypress" />

describe('Cypress basic', () => {
	it.only('Deve visitar uma página e fazer um assert no título', () => {
		cy.visit('https://www.wcaquino.me/cypress/componentes.html');

		// const title = cy.title();
		// console.log(title);

		// cy.pause();

		cy.title().should('be.equal', 'Campo de Treinamento');
		cy.title().should('contain', 'Campo');

		cy.title()
			.should('be.equal', 'Campo de Treinamento')
			.and('contain', 'Campo');

		cy.title().then(title => {
			console.log(title);
		})
	})

	it('Deve procurar e interagir com um elemento', () => {
		cy.visit('https://www.wcaquino.me/cypress/componentes.html');

		cy.get('#buttonSimple')
			.click()
			.should('have.value', 'Obrigado!');
	})
})