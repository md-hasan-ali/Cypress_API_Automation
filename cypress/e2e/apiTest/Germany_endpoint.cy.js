/// <reference types="Cypress"/>  

it('get country Germany Information', () => {
    cy.request({
        method: "GET",
        url: "https://restcountries.com/v3.1/name/Germany",
        headers: {
            'content-type': 'application/json',
        }
    }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body[0].name.common).to.eq('Germany');
        expect(res.body[0].name.nativeName.deu.official).to.eq('Bundesrepublik Deutschland');
        expect(res.body[0].currencies.EUR.name).to.eq('Euro');
        expect(res.body[0].translations.ara.official).to.eq('جمهورية ألمانيا الاتحادية');
    })
})