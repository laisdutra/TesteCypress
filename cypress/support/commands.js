Cypress.Commands.add('AccessQAStore', () => {
    cy.visit('https://qastoredesafio.lojaintegrada.com.br/') 
    cy.title().should('be.equal', 'QA Store Desafio')
})

Cypress.Commands.add('Login', (LoginEmail, LoginPassword) => {
    cy.get('.bem-vindo').should('exist')
    cy.get('.bem-vindo').click()
    cy.get('.controls #id_email').should('exist')
    cy.get('.controls #id_email').type(LoginEmail)
    cy.get('.controls #id_senha').should('exist')
    cy.get('.controls #id_senha').type(LoginPassword)
    cy.get('.controls .botao.principal').should('exist')
    cy.get('.controls .botao.principal').click()
    cy.get('#corpo .conteiner .breadcrumbs.borda-alpha  a').should('exist')
    cy.get('#corpo .conteiner .breadcrumbs.borda-alpha  a').click()
})

Cypress.Commands.add('GoToImages', () => {
    cy.get('#cabecalho .categoria-id-15610608 [href="https://qastoredesafio.lojaintegrada.com.br/categoria/15610608.html"]').click()
    cy.get('#corpo .categoria-id-15610614 [href="https://qastoredesafio.lojaintegrada.com.br/categoria/15610614.html"]').click()
    cy.get('.conteudo .titulo.cor-secundaria').should('contain', 'IMAGEM')
})