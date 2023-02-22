/// <reference types="Cypress"/>  

it('get country Saudi Arabia Information', () => {
    cy.request({
        method: "GET",
        url: "https://restcountries.com/v3.1/name/Saudi Arabia",
        headers: {
            'content-type': 'application/json',
        }
    }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body[0].name.common).to.eq('Saudi Arabia');
        expect(res.body[0].name.nativeName.ara.official).to.eq('المملكة العربية السعودية');
        expect(res.body[0].currencies.SAR.name).to.eq('Saudi riyal');
        expect(res.body[0].translations.ces.official).to.eq('Saúdskoarabské království');
    })
})