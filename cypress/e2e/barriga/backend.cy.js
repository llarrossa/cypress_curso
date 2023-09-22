/// <reference types="cypress" />

describe('Deve testar a nível funcional', () => {

	let token

	beforeEach(() => {
		// cy.login('lucca@gmail.com', '123');
		cy.getToken('lucca@gmail.com', '123')
			.then(tkn => {
				token = tkn;
			})

		cy.resetRest();
	})

	it('Deve inserir uma conta', () => {
		cy.request({
			url: 'https://barrigarest.wcaquino.me/contas',
			method: 'POST',
			headers: { Authorization: `JWT ${token}` },
			body: {
				nome: 'Conta via rest'
			}
		}).as('response')

		cy.get('@response').then(res => {
			expect(res.status).to.be.equal(201)
			expect(res.body).to.have.property('id')
			expect(res.body).to.have.property('nome', 'Conta via rest')
		})

	})

	it('Deve alterar uma conta', () => {
		cy.getContaByName('Conta para alterar')
			.then(contaId => {
				cy.request({
					url: `https://barrigarest.wcaquino.me/contas/${contaId}`,
					method: 'PUT',
					headers: { Authorization: `JWT ${token}` },
					body: {
						nome: 'conta alterada via rest'
					}
				}).as('response')

			})
		
		cy.get('@response').its('status').should('be.equal', 200);
	})

	it('Não deve criar uma conta com nome repetido', () => {
		cy.request({
			url: 'https://barrigarest.wcaquino.me/contas',
			method: 'POST',
			headers: { Authorization: `JWT ${token}` },
			body: {
				nome: 'Conta mesmo nome'
			},
			failOnStatusCode: false
		}).as('response')

		cy.get('@response').then(res => {
			console.log(res);
			expect(res.status).to.be.equal(400)
			expect(res.body.error).to.be.equal('Já existe uma conta com esse nome!')
		})
	})

	it('Deve criar uma movimentação', () => {
		cy.getContaByName('Conta para movimentacoes')
			.then(contaId => {
				cy.request({
					method: 'POST',
					url: 'https://barrigarest.wcaquino.me/transacoes',
					headers: { Authorization: `JWT ${token}` },
					body: {
						conta_id: contaId,
						data_pagamento: '23/09/2023',
						data_transacao: '22/09/2023',
						descricao: "desc",
						envolvido: "inter",
						status: true,
						tipo: "REC",
						valor: "123"
					}
				}).as('response')
			})

		cy.get('@response').its('status').should('be.equal', 201);
		cy.get('@response').its('body.id').should('exist');
	})

	it('Deve pegar o saldo', () => {
		
	})

	it('Deve remover uma movimentação', () => {
		
	})
})