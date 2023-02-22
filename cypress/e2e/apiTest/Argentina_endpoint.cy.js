/// <reference types="Cypress"/>  

it('get country Argentina Information', () => {
    cy.request({
        method: "GET",
        url: "https://restcountries.com/v3.1/name/Argentina",
        headers: {
            'content-type': 'application/json',
        }
    }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body[0].name.common).to.eq('Argentina');
        expect(res.body[0].name.nativeName.grn.official).to.eq('Argentine Republic');
        expect(res.body[0].currencies.ARS.name).to.eq('Argentine peso');
        expect(res.body[0].translations.ara.official).to.eq('جمهورية الأرجنتين');
    })
})