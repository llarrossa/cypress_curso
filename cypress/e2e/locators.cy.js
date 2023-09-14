/// <reference types="cypress" />

describe('Locators...', () => {
	beforeEach(() => {
		cy.visit('https://www.wcaquino.me/cypress/componentes.html');
		cy.reload();
	})

	it('usando jquery selector', () => {
		cy.get(':nth-child(1) > :nth-child(3) > [type="button"]')
		cy.get('#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3) > input').click();
	})

	it.only('usando xpath', () => {
		cy.xpath('//input[contains(@onclick, "Francisco")]');
		cy.xpath("//table[@id='tabelaUsuarios']//td[contains(., 'Francisco')]/..//input[@type='text']")
	})
})