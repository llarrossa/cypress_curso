/// <reference types="cypress" />

it('Igualdade', () => {
	const a = 1;

	expect(a).equal(1);
	expect(a, 'Deveria ser 1').equal(1);
	expect(a).to.be.equal(1);
	expect(a).not.to.be.equal('b');
})

it('Truthy', () => {
	const a = true;
	const b = null;
	let c;

	expect(a).to.be.true;
	expect(b).to.be.null;
	expect(a).not.to.be.null;
	expect(c).to.be.undefined;
})

it('Igualdade de objetos', () => {
	const obj = {
		a: 1,
		b: 2
	};

	expect(obj).eq(obj);
	expect(obj).eql({a:1, b:2});
	expect(obj).include({b:2});
	expect(obj).property('a', 1);
	expect(obj).to.not.be.empty;
})

it('Igualdade de arrays', () => {
	const arr = [1, 2, 3];

	expect(arr).to.have.members([1,2,3]);
	expect(arr).to.include.members([1,2]);
	expect(arr).to.not.be.empty;
})

it('Tipos', () => {
	const num = 1;
	const str = 'String';

	expect(num).to.be.a('number');
	expect(str).to.be.a('string');
	expect({}).to.be.an('object');
	expect([]).to.be.an('array');
})

it('String', () => {
	const str = 'String de teste';

	expect(str).equal('String de teste');
	expect(str).length('15');
	expect(str).contains('de');
	expect(str).to.match(/^String/);
	expect(str).to.match(/teste$/);
	expect(str).to.match(/.{15}/);
	expect(str).to.match(/\w+/);
	expect(str).to.match(/\D+/);
})

it.only('Números', () => {
	const number = 4;	
	const floatNumber = 5.2123;

	expect(number).equal(4);
	expect(number).above(3);
	expect(number).below(7);

	expect(floatNumber).closeTo(5.2, 0.1);
})