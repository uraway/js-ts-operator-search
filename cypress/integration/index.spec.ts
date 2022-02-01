/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('filters options', () => {
    cy.get('#lookup').type('??')
    cy.get('[data-cy=option-item]')
      .should('have.length', 2)
      .first()
      .should('contain.text', '??=')
      .click()

    cy.get('[data-cy=heading]').should('contain.text', 'Null合体代入演算子')
    cy.get('[data-cy=description]').should(
      'contain.text',
      '左の変数が null または undefined である場合のみ、右の値を代入します'
    )
  })

  it('clicks button', () => {
    cy.get('[data-cy=option-item]').last().click()

    cy.get('#lookup').should('have.value', '>>>=')
    cy.get('[data-cy=heading]').should(
      'contain.text',
      '符号なし右シフト代入演算子'
    )
    cy.get('[data-cy=description]').should(
      'contain.text',
      '代入演算子の符号なし右シフト版です。符号なし右シフトの結果を変数に代入します。'
    )
  })
})
