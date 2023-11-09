describe('Testes automatizados com Cypress', () => {

  it('Teste criar task ToDo', () => {
    cy.visit('http://localhost:5500/frontend/client.html')
    cy.get('#title').type('Arrumar cama')
    cy.get('#description').type('Fazer hoje')
    cy.get('#status').type('ToDo')
    cy.get('#buttonCreate').click()
    cy.wait(2000)
    })
    
  it('Teste criar task Completed', () => {
    cy.visit('http://localhost:5500/frontend/client.html')
    cy.get('#title').type('Arrumar porta')
    cy.get('#description').type('Fazer hoje')
    cy.get('#status').type('Completed')
    cy.get('#buttonCreate').click()
    cy.wait(2000)
  })

  it('Teste criar task InProgress', () => {
    cy.visit('http://localhost:5500/frontend/client.html')
    cy.get('#title').type('Arrumar azulejo')
    cy.get('#description').type('Fazer hoje')
    cy.get('#status').type('InProgress')
    cy.get('#buttonCreate').click()
    cy.wait(2000)
  })

  it('Teste busca ', () => {
    cy.visit('http://localhost:5500/frontend/client.html')
    cy.get('#buttonSearch').click()
    cy.wait(2000)
  })

  it('Teste Delete Arrumar Porta', () => {
    cy.visit('http://localhost:5500/frontend/client.html')
    cy.get('#title').type('Arrumar porta')
    cy.get('#buttonDelete').click()
  })

  it('Teste Delete Arrumar cama', () => {
    cy.visit('http://localhost:5500/frontend/client.html')
    cy.get('#title').type('Arrumar cama')
    cy.get('#buttonDelete').click() 
  })


  it('Teste Delete Arrumar Azulejo', () => {
    cy.visit('http://localhost:5500/frontend/client.html')
    cy.get('#title').type('Arrumar azulejo')
    cy.get('#buttonDelete').click()
  })

  it('Teste busca ', () => {
    cy.visit('http://localhost:5500/frontend/client.html')
    cy.get('#buttonSearch').click()
  })

})