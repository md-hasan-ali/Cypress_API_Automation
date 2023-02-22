/// <reference types="Cypress"/>  

it('get country Australia Information', () => {
    cy.request({
        method: "GET",
        url: "https://restcountries.com/v3.1/name/Australia",
        headers: {
            'content-type': 'application/json',
        }
    }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body[0].name.common).to.eq('Australia');
        expect(res.body[0].name.nativeName.eng.official).to.eq('Commonwealth of Australia');
        expect(res.body[0].currencies.AUD.name).to.eq('Australian dollar');
        expect(res.body[0].translations.ara.official).to.eq('كومونولث أستراليا');
    })
})