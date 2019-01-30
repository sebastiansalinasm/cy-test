import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

let data

beforeEach(function () { 
    let env = process.env.NODE_ENV || 'development'
    cy.fixture('dataDev.json').then((json) => {
        data = json[env]
    })
});

    Given('to enter a "Datos Personales" page', () => {
        cy.url('include', '/datos-personales').then(() => {
            cy.scrollTo('top')  // desactivate scroll if run in production
            cy.get('p[class="PersonalDataHeader-title"]').contains(' Completa tus datos personales ')
            cy.get('[class="PersonalDataMessage"]')
            cy.get('p[class="PersonalDataForm-title"]').contains('Datos de contacto')
        })
})
    When('fill phone and address forms', () => {
        cy.get('[id=phone]').type(data.cellphone)
        cy.get('[id=phonecopy]').type(data.cellphone)
        cy.get('[id=email]').type(data.email)
        cy.get('[role=combobox]').type(data.address)

})
    Then('button continue is on', () => {
        cy.get('[id=btn-continuar]').then(($btn_continue) => {
            if($btn_continue[0].disabled) {
                alert('coño mala mia')
            } else {
                $btn_continue.click()
            }
        })
    })


