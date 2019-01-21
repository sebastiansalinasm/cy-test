import { Given, Then } from "cypress-cucumber-preprocessor/steps";


const url = "https://www.google.cl";

Given('Ingresar a página de Google', () => {
    cy.visit(url);
});

When('I add a new item', () => {
    cy.get('input[name="addNewItem"]').as('addNewItemInput');
    cy.get('@addNewItemInput').type('My item');
    cy.get('button[name="submitItem"]').click();
})
