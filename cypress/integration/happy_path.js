describe('Vtec-test', () => {
	let rutOperador
	let claveOperador
	let url
	let data
	beforeEach(function () {
		let env = process.env.NODE_ENV || 'development'
		cy.fixture('devData.json').then((json) => {
			data = json[env]
			// rutOperador = data.rutOperador
			// claveOperador = data.claveOperador
			// url = data.url
			console.log(data)
		})
	})
	it('Visit and fill the form login', () => {
		cy.visit(data.url).then(() => {
			cy.get('form[name="f_login"]').within(() => {
				cy.get('input[name="rut"]').type(data.rutOperador).should('have.value', data.rutOperador)
				cy.get('input[name="password"]').type(data.claveOperador).should('have.value', data.claveOperador)
				cy.get('button[type="submit"]').click()
			})
		})
	})
	it('Fill client search form', () => {
		cy.url().should('include', '/validacion').then(() => {
			cy.get('form.BuscarRut-content').within(() => {
				cy.get('input[name="buscar-rut"]').type(data.rutCliente).should('have.value', data.rutCliente)
				cy.get('button[type="submit"]').click().then(($button) => {
				})
			})
			cy.get('form[name="f_datospersonales"]').within(() => {
				cy.get('h2').contains(data.nombreCliente)
				cy.get('p').should('have.class', 'subtitle').contains(data.rutClienteFormat)
				cy.get('input[name="email"]').type(data.email).should('have.value', data.email)
				cy.get('label[for="cuentavista"]').click()
				cy.get('div.Select').click().then((itt) => {
					(itt.find('ul > li')[0]).click()
				})
				cy.get('label[for="mandato"]').click()
				cy.get('button[type="submit"]').should('have.class', 'finished').click()
			})
		})
	})

	it('Verify displayed data', async () => {
		cy.get('section.Felicitaciones').within(() => {
			cy.get('h3').contains("Datos Productos")
		})
	})
})