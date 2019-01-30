import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

/*
    Scenario: Información del Plan
        Given to enter a "Información del Plan" page
        When read the text
        Then press continue button
*/

let data

beforeEach(function () { 
    let env = process.env.NODE_ENV || 'development'
    cy.fixture('dataDev.json').then((json) => {
        data = json[env]
    })
});

    Given('to enter a "Información del Plan" page', () => {
        cy.url('include', '/detalles-plan').then(() => {
            cy.scrollTo('top')  // desactivate scroll if run in production
            cy.get('p[class="PersonalDataHeader-title"]').contains(' Información del Plan ')
            
        })
})
    When('read the text', () => {
        
    })