describe('Testes automatizados com Cypress', () => {

  it('Teste IMC baixo peso', () => {
    cy.visit('http://localhost:8080/frontend/imc.html')
    cy.get('#peso').type(50)
    cy.get('#altura').type(1.80)
    cy.get('#btn-calc').click()
    cy.get('#mensagem').should('have.text', 'Baixo peso');
    })
    
  it('Teste IMC peso normal', () => {
    cy.visit('http://localhost:8080/frontend/imc.html')
    cy.get('#peso').type(65)
    cy.get('#altura').type(1.80)
    cy.get('#btn-calc').click()
    cy.get('#mensagem').should('have.text', 'Peso normal');
  })
      

  it('Teste IMC sobrepeso', () => {
    cy.visit('http://localhost:8080/frontend/imc.html')
    cy.get('#peso').type(90)
    cy.get('#altura').type(1.80)
    cy.get('#btn-calc').click()
    cy.get('#mensagem').should('have.text', 'Sobrepeso');
  })
        
  it('Teste IMC Obesidade grau I', () => {
    cy.visit('http://localhost:8080/frontend/imc.html')
    cy.get('#peso').type(100)
    cy.get('#altura').type(1.80)
    cy.get('#btn-calc').click()
    cy.get('#mensagem').should('have.text', 'Obesidade grau I');
  })

  it('Teste IMC Obesidade grau II', () => {
    cy.visit('http://localhost:8080/frontend/imc.html')
    cy.get('#peso').type(120)
    cy.get('#altura').type(1.80)
    cy.get('#btn-calc').click()
    cy.get('#mensagem').should('have.text', 'Obesidade grau II');
  })

it('Teste IMC Obesidade grau III', () => {
  cy.visit('http://localhost:8080/frontend/imc.html')
  cy.get('#peso').type(140)
  cy.get('#altura').type(1.80)
  cy.get('#btn-calc').click()
  cy.get('#mensagem').should('have.text', 'Obesidade grau III');
})
         
})