import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
// Declaro las variables del lleison 
let url
let data
beforeEach(function () { 
    let env = process.env.NODE_ENV || 'development'
    cy.fixture('dataDev.json').then((json) => {
        data = json[env]
    })
});

    Given('to enter a "Hazte Socio" page', () => {
        cy.visit(data.url)
})
    When('fill the forms', () => {
        cy.get('[id=name]').type(data.names)
        cy.get('[id=apellidop]').type(data.middleName)
        cy.get('[id=apellidom]').type(data.lastName)
        cy.get('[id=rut]').type(data.rutUser)
        cy.get('[id=serie]').type(data.serialNumber)
})
    When('select external controllers', () => {
        cy.get('div[class="HomeQuestions-cards"]').then(() => {
            cy.get('label[for="fatcaNo"]').click()
            cy.get('label[for="crsNo"]').click()
            cy.get('label[for="cb-autorizo"]').click()
        })  
})
    Then('button continue is on', () => {
        cy.get('[id=btn-continuar]').then(($btn_continue) => {
            if ($btn_continue[0].disabled) {
                alert('coño mala mia, falta completar campos obligatorios')
            } else {
                $btn_continue.click()
            }
    })
})