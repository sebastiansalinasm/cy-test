Feature: Flujo enrolamiento Coopeuch
    # Screen 1
    Scenario: Ingreso Hazte Socio
        Given to enter a "Hazte Socio" page
        When fill the forms
        When select external controllers
        Then button continue is on
    # Screen 2
    Scenario: Completar los campos 
        Given to enter a "Datos Personales" page
        When fill phone and address forms
        Then button continue is on
    # Screen 3
    Scenario: Información del Plan
        Given to enter a "Información del Plan" page
        When read the text
        Then press continue button
    
    
        




    
