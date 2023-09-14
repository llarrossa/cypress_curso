/// <reference types="cypress" />

describe('Alerts...', () => {
	beforeEach(() => {
		cy.visit('https://www.wcaquino.me/cypress/componentes.html');
		cy.reload();
	})

	it('Voltando ao passado', () => {
		// cy.get('#buttonNow').click();
		// cy.get('#resultado > span').should('contain', '14/09/2023');

		// cy.clock();
		// cy.get('#buttonNow').click();
		// cy.get('#resultado > span').should('contain', '31/12/1969');

		const dt = new Date(2012, 3, 10, 15, 23, 50);
		cy.clock(dt.getTime());
		cy.get('#buttonNow').click();
		cy.get('#resultado > span').should('contain', '10/04/2012');
	})

	it.only('Vai para o futuro', () => {
		cy.get('#buttonTimePassed').click();
		cy.get('#resultado > span').should('contain', '1694');
		cy.get('#resultado > span').invoke('text').then((text) => {
		  const numberValue = parseInt(text, 10); // Converte o texto em um número
		  expect(numberValue).to.be.gt(1694701557223); // Compara como número
		});

		cy.clock();
		cy.get('#buttonTimePassed').click();
		cy.get('#resultado > span').invoke('text').then((text) => {
		  const numberValue = parseInt(text, 10); // Converte o texto em um número
		  expect(numberValue).to.be.lte(0); // Compara como número
		});
		// cy.wait(1000);
		// cy.get('#buttonTimePassed').click();
		// cy.get('#resultado > span').invoke('text').then((text) => {
		//   const numberValue = parseInt(text, 10); // Converte o texto em um número
		//   expect(numberValue).to.be.lte(1000); // Compara como número
		// });

		cy.tick(5000);
		cy.get('#buttonTimePassed').click();
		cy.get('#resultado > span').invoke('text').then((text) => {
		  const numberValue = parseInt(text, 10); // Converte o texto em um número
		  expect(numberValue).to.be.gte(5000); // Compara como número
		});

		cy.tick(10000);
		cy.get('#buttonTimePassed').click();
		cy.get('#resultado > span').invoke('text').then((text) => {
		  const numberValue = parseInt(text, 10); // Converte o texto em um número
		  expect(numberValue).to.be.gte(15000); // Compara como número
		});

	})
})