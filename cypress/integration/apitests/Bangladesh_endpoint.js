/// <reference types="Cypress"/>  

describe('Get Rest Countries api', () => {
    it('get country Bangladesh Information', () => {
        cy.request({
            method: "GET",
            url: 'https://restcountries.com/v3.1/name/Bangladesh',
            headers: {
                'content-type': 'application/json',
            }
        }).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body[0].name.common).to.eq('Bangladesh');
            expect(res.body[0].name.nativeName.ben.official).to.eq('বাংলাদেশ গণপ্রজাতন্ত্রী');
            expect(res.body[0].translations.ara.official).to.eq('جمهورية بنغلاديش الشعبية');
            expect(res.body[0].currencies.BDT.name).to.eq('Bangladeshi taka');
        })
    })
})