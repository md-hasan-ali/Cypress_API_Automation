/// <reference types="Cypress"/>  

it('get country China Information', () => {
    cy.request({
        method: "GET",
        url: "https://restcountries.com/v3.1/name/China",
        headers: {
            'content-type': 'application/json',
        }
    }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body[0].name.common).to.eq('China');
        expect(res.body[0].name.nativeName.zho.official).to.eq('中华人民共和国');
        expect(res.body[0].currencies.CNY.name).to.eq('Chinese yuan');
        expect(res.body[0].translations.ara.official).to.eq('جمهورية الصين الشعبية');
    })
})