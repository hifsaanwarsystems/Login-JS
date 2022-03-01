/// <reference types="cypress"/>

const getValue=require('../fixtures/data.json')
describe('Login Test',function(){
it('Visiting Site',function(){
    cy.visit(getValue.basicURL)
})

it('Testing login with invalid Username',function(){
 
    cy.get(getValue.userName).type('123')
    cy.get(getValue.password).type('test')
    cy.get(getValue.loginButton).click({force:true})
    cy.url().should('equal',getValue.basicURL)
})

it('Testing login with invalid Password',function(){
    cy.get(getValue.userName).type('test')
    cy.get(getValue.password).type('123')
    cy.get(getValue.loginButton).click({force:true})
    cy.url().should('equal',getValue.basicURL)

})

it('Testing login with valid Username and Password',function(){
    cy.get(getValue.userName).type('test')
    cy.get(getValue.password).type('test')
    cy.get(getValue.loginButton).click()
    cy.url().should('equal',getValue.loginSuccessURL)

})

})