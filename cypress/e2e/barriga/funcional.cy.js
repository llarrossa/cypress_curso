/// <reference types="cypress" />

import loc from '../../support/locators';
import '../../support/commandsContas';

describe('Deve testar a nível funcional', () => {
	beforeEach(() => {
		cy.login('lucca@gmail.com', '123');
	})

	it('Deve inserir uma conta', () => {
		cy.resetApp();
		cy.acessarMenuConta();
		cy.inserirConta('Conta de teste');
		cy.get(loc.MESSAGE)
			.should('contain', 'Conta inserida com sucesso');
	})

	it('Deve alterar uma conta', () => {
		cy.acessarMenuConta();

		cy.xpath(loc.CONTAS.XP_BTN_ALTERAR)
			.click();
		cy.get(loc.CONTAS.NOME)
			.clear()
			.type('Conta alterada');
		cy.get(loc.CONTAS.BTN_SALVAR).click();
		cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso');
	})

	it('Não deve criar uma conta com nome repetido', () => {
		cy.acessarMenuConta();

		cy.inserirConta('Conta alterada');
		cy.get(loc.MESSAGE).should('contain', 'code 400');
	})

	it('Deve criar uma movimentação', () => {
		cy.get(loc.MENU.MOVIMENTACAO).click();

		cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Desc');
		cy.get(loc.MOVIMENTACAO.VALOR).type('123')
		cy.get(loc.MOVIMENTACAO.INTERESSADO).type('Inter')
		cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click();
		cy.get(loc.MESSAGE).should('contain', 'sucesso');

		cy.get(loc.EXTRATO.LINHAS).should('have.length', 7);
		cy.xpath(loc.EXTRATO.XP_BUSCA_ELEMENTO).should('exist');
	})
})