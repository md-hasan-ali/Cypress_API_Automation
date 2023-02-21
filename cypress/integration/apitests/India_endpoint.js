/// <reference types="Cypress"/>  

it('get country India Information', () => {
    cy.request({
        method: "GET",
        url: "https://restcountries.com/v3.1/name/India",
        headers: {
            'content-type': 'application/json',
        }
    }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body[0].name.common).to.eq('India');
        expect(res.body[0].name.nativeName.eng.official).to.eq('Republic of India');
        expect(res.body[0].translations.ara.official).to.eq('جمهورية الهند');
        expect(res.body[0].currencies.INR.name).to.eq('Indian rupee');
    })
})