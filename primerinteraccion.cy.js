
//PRUEBAS:
describe('Validando que la pagina cargue correctamente',()=>{
    it('Validando titulo de wikipedia', () =>{
        cy.visit('https://es.wikipedia.org/wiki/Wikipedia:Portada')
        cy.title().should('eq', 'Wikipedia, la enciclopedia libre')
    })
})
describe('Validando que el boton contacto redirige correctamente a la solapa contacto',()=>{
//Prueba automatizada para verificar que el boton contacto me lleva a la solapa de contacto 
it('Hacer clic en un elemento y que este te redirga a la solapa correspondinte', ()=>{
    cy.visit('https://es.wikipedia.org/wiki/Wikipedia:Portada')
    cy.contains('Contacto').click()
    cy.url().should('include', 'Contacto')
  })
})
describe('Validacion de tiempo de respuesta', () => {
    //Para validar el tiempo de respuesta.
  it('Clickea en el boton contacto y mide el tiempo de respuesta', () => {
    const inicio = performance.now();

    cy.visit('https://es.wikipedia.org/wiki/Wikipedia:Portada');
    cy.contains('Contacto').click();

    cy.visit('https://es.wikipedia.org/wiki/Wikipedia:Contacto');
    cy.contains('Ver historial').click();


    cy.get('h1', { timeout: 20000 }).should('contain', 'Contacto').then(() => {
      const fin = performance.now();
      const duracion = fin - inicio;

      cy.log(` ⏱ Tiempo de respuesta: ${Math.round(duracion)} ms`);
    });
  });
});

////ALIASES:

describe('Validando nombre con alias', ()=> {
 beforeEach(function () {
  cy.fixture('example.json').as('exampleData')
})
it('Usa this para acceder al alias', function(){
  expect(this.exampleData.name).to.eq('Nicolas')
})
})

//OTRA FORMA:

describe('Validando nombre con alias segunda forma', () => {
  beforeEach(function () {
    cy.fixture('Example.json').as('exampleData')
  })

  it('Valida el nombre desde el alias', function () {
    cy.get('@exampleData').then((exampleData) => {
      expect(exampleData.name).to.eq('Nicolas')
    })
  })
})

//ALIAS PARA BUTTOM:
describe('Validando alias en button',()=>{
it('Asignando alias a button',()=>{
cy.visit('http://uitestingplayground.com/textinput')
cy.get('#newButtonName').as('Botonprincipal')
cy.get('@Botonprincipal').click()
})
})

//////////////
describe('Validando alias en ultimo button',()=>{
  it('Asignando alias al ultimo buttom con Class',()=>{
    cy.visit('http://uitestingplayground.com/classattr')
    cy.get('.class3').as('Boton22')
    cy.get('@Boton22').click()
  })
})
//VARIABLE:
it('Validando button con variable', function() {
        cy.visit('http://uitestingplayground.com/')
        cy.get('.nav-link').then($carlos =>{ //Variable local 
        cy.log($carlos[0].href)
        expect($carlos[0].href).to.be.equal('http://uitestingplayground.com/home')
        })
    })




