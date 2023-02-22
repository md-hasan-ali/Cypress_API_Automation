/// <reference types="Cypress"/>  

it('get country Pakistan Information', () => {
    cy.request({
        method: "GET",
        url: "https://restcountries.com/v3.1/name/pakistan",
        headers: {
            'content-type': 'application/json',
        }
    }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body[0].name.common).to.eq('Pakistan');
        expect(res.body[0].name.nativeName.eng.official).to.eq('Islamic Republic of Pakistan');
        expect(res.body[0].translations.ara.official).to.eq('جمهورية باكستان الإسلامية');
        expect(res.body[0].currencies.PKR.name).to.eq('Pakistani rupee');
    })
})