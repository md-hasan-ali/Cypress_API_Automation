/// <reference types="Cypress"/>  

it('get country Brazil Information', () => {
    cy.request({
        method: "GET",
        url: "https://restcountries.com/v3.1/name/Brazil",
        headers: {
            'content-type': 'application/json',
        }
    }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body[0].name.common).to.eq('Brazil');
        expect(res.body[0].name.nativeName.por.official).to.eq('República Federativa do Brasil');
        expect(res.body[0].currencies.BRL.name).to.eq('Brazilian real');
        expect(res.body[0].translations.ara.official).to.eq('جمهورية البرازيل الاتحادية');
    })
})