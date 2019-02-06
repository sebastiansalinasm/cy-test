import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

let data
let txt

let txtValidator = function(textA, textB) {
    let result = (textA[0].innerText === textB);
    let validator = result ? 'Validada' : 'Erronea'
    console.log(`Clase: ${textA[0].className} está ${validator}`)
    return result;
}

beforeEach(function () { 
    let env = process.env.NODE_ENV || 'development'
    let vne = process.env.NODE_ENV || 'homePage'
    cy.fixture('dataDev.json').then((json) => {
        data = json[env]
    })
    cy.fixture('webText.json').then((jsonTxt) => {
        txt = jsonTxt[vne]
    })

});

    Given('to enter a "Hazte Socio" page', () => {
        cy.visit(data.url)
        cy.wait(3000)

})
    When('fill the forms', () => {
    // Revision de textos
        cy.get('p[class="HomeHeader-title"]').then(($homeHeaderTitle) => {
            let title = txtValidator($homeHeaderTitle, txt.homeHeadertitle)
        })
        cy.get('p[class="HomeHeader-description"]').then(($homeHeaderDescription) => {
            let description = txtValidator($homeHeaderDescription, txt.homeHeaderDescription)
        })            
    // Se completan los campos
        cy.get('[id=name]').type(data.names)
        cy.get('[id=apellidop]').type(data.middleName)
        cy.get('[id=apellidom]').type(data.lastName)
        cy.get('[id=profesion]').type(data.job)
        cy.get('[id=rut]').type(data.rutUser)
        cy.get('[id=serie]').type(data.serialNumber)
        cy.get('[class="l_credential"]').click()
        
})
    When('select external controllers', () => {
    // Revision de textos
        cy.get('label[class="Checkbox-control Checkbox-control--checkbox"]').then(($checkboxCtrl) => {
            let checkbox = txtValidator($checkboxCtrl, txt.checkboxCtrl)
        })
        cy.get('div[class="HomeQuestions-cards"]').then(() => {
            cy.get('label[for="fatcaNo"]').click()
            cy.get('label[for="crsNo"]').click()
            cy.get('label[for="cb-autorizo"]').click()
        })  
})
    Then('button continue is on', () => {
        cy.get('p[class="HomeFooter-disclaimer"]').then(($homeFooterDisclaimer) => {
            let footer = txtValidator($homeFooterDisclaimer, txt.homeFooterDisclaimer)
        })

        cy.get('[id=btn-continuar]').then(($btnContinue) => {
            if ($btnContinue[0].disabled) {
                alert('Falta completar campos obligatorios')
            } else {
                $btnContinue.click()
            }
    })
})