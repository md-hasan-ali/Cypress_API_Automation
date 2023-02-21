/// <reference types="Cypress"/>  

it('get country Indonesia Information', () => {
    cy.request({
        method: "GET",
        url: "https://restcountries.com/v3.1/name/Indonesia",
        headers: {
            'content-type': 'application/json',
        }
    }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body[0].name.common).to.eq('Indonesia');
        expect(res.body[0].name.nativeName.ind.official).to.eq('Republik Indonesia');
        expect(res.body[0].currencies.IDR.name).to.eq('Indonesian rupiah');
        expect(res.body[0].translations.ara.official).to.eq('جمهورية إندونيسيا');
    })
})