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
        




    
