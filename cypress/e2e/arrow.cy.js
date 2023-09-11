/// <reference types="cypress" />

it('a function test...', function() {
  console.log('Function', this);
})

it('an arrow test...', () => {
  console.log('Arrow', this);
})