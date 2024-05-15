import testdata from  '../fixtures/Exmple.json'
describe ( "Zootopia",()  => {
 // beforEach(()=>{
   // cy.visit( "https://zootopia.ge/ka")
   // cy.login(testdata.data1.elfosta,testdata.data1.password)
 // }

 // )
it("1.4 ავტორიზაცია",() =>{

   // 1. გახსენი ვებ გვერდი zootopia.ge
   cy.visit( "https://zootopia.ge/ka")
   cy.login(testdata['ელ-ფოსტა'],testdata.პაროლი)
   // 2.მთავარ გვერდზე ზედა მარჯვენა კუთხეში დააჭირე ღილაკს "შესვლა"
  cy.get('.rprof > p').click()
   // 3.გახნილ ფანჯარაზე შეიყვანე შემდეგი მონაცემები;ელ-ფოსტა,პაროლი
 cy.get(':nth-child(5) > .imail').type(testdata.data1.elfosta)
   cy.get('.ipass').type(testdata.data1.password)
    
   // 4. დააჭირე ღილაკს "ავტორიზაცია

   cy.get('.avtorization > .input-shablon > .form-button').click()
})

it("2.4 პროდუქტის კალათაში დამატება",() =>{


    //1.გახსენით ვებ გვერდი Zootopia.ge
    cy.visit( 'https://zootopia.ge/ka')
    cy.login(testdata.data1.elfosta,testdata.data1.password)
   // 2. მთავარ გვერდზე ძაღლთა სამყარო დააჭირეთ ღილაკს "პროდუქციის ნახვა"
  cy.get('.pug > p').contains('ძაღლთა სამყარო')
   cy.get('.pug > .seepro').click()
   // 3.დააჭირეთ პირველივე პროდუქტს
   cy.get(':nth-child(1) > h2 > a').click()
    
    //4.დააჭირეთ მარჯვენა მხარეს მოცებულ ღილაკს წარწერით "კალათში დამატება
    cy.get('.add-pro').click()
//})
it("2.5 პროდუქტის ყიდვა",() =>{
    
    // 1.გახსენით ვებ გვერდი Zootopia.ge
    cy.visit( 'https://zootopia.ge/ka')
    cy.login(testdata.data1.elfosta,testdata.data1.password)
    cy.get('.pug > .seepro').click()
    cy.get(':nth-child(1) > h2 > a').click()
    cy.get('.add-pro').click()

   // 2.მთავარ გვერდზე მარჯვენა ზედა კუთხეში დააჭირეთ ღილაკს "კალათა"
  cy.get('.menu-pop > [href="https://zootopia.ge/ka/cart"]').click()
    
  //  3.დააჭირეთ  ღილაკს "მაღაზიაში აღება'
 cy.get('body'). contains('მაღაზიაში აღება' ).click()
   // 4.დააჭირეთ ადგილ მდებარეობის ჩამოსაშლელ სიას და აირჩიეთ "ნებისმიერი"
   cy.get('.nice-select').contains("თბილისი").select(testdata.data2.adress)
   cy.get('.nice-select').click()
  //  5.შეიყვანეთ მონაცემები
  cy.get('.location').type(testdata.data2.misamarti)
   // 6.დააჭირეთ  ღილაკს " მაღაზიაში გადახდა' 
   cy.get('body').contains('მაღაზიაში გადახდა').click()
  //  7.დააჭირეთ ღილაკს'გადახდა'
  cy.get('.cart-submit').click()

})
it("2.6 პროდუქტის ონლაინ ყიდვა",() =>{
       // 1.გახსენით ვებ გვერდი Zootopia.ge
       cy.visit( 'https://zootopia.ge/ka')
       cy.login(testdata['ელ-ფოსტა'],testdata.პაროლი)
      cy.get('.pug > .seepro').click()
       cy.get(':nth-child(1) > h2 > a').click()
       cy.get('.add-pro').click()
   


     //  2.მთავარ გვერდზე მარჯვენა ზედა კუთხეში დააჭირეთ ღილაკს "კალათა"
     cy.get('.menu-pop > [href="https://zootopia.ge/ka/cart"]').click()
      // 3.დააჭირეთ ნებისმიერ   ღილაკს "მაღაზიაში აღება', მიტანის სერვისი
      cy.get('body'). contains('მაღაზიაში აღება' ).click()
      // 4.დააჭირეთ ადგილ მდებარეობის 
      // ჩამოსაშლელ სიას და აირჩიეთ "ნებისმიერი"
      cy.get('.nice-select').contains("თბილისი").select(testdata.data2.adress)
     //  5.შეიყვანეთ მონაცემი ველში მისამართი
     cy.get('.location').type(testdata.data2.misamarti)
       
    //   6.დააჭირე ღილაკს 'ონლაინ გადახდა'
    cy.get('body').contains('ონლაინ გადახდა').click()
     //  7. დააჭირე ღილაკს "გადახდა"
     cy.get('.cart-submit').click()
       
      // 8.შეიყვანეთ მონაცემები მოცებულ ველებში 'ბარათის ნომერი', 'მოქმედების ვადა", cvc/cvv
       cy.contains("ბარათის ნომერი").type(testdata.data2['baratis nomeri'])
       cy.contains("მოქმედების ვადა").type(testdata.data2['moqmedebis vada'])
       cy.contains("CVC / CVV").type(testdata.data2['cvc/cvv'])
      // 9..დააჭირე ღილაკს "გადახდა"
          cy.contains(" გადახდა").click()

})

it("2.9 კალათაში პროდუქტის წაშლა",() =>{       
 // 1.გახსენით ვებ გვერდი Zootopia.ge
  cy.visit( "https://zootopia.ge/ka")
      
  cy.login(testdata.data1.elfosta,testdata.data1.password)
     
 
   cy.get('.pug > .seepro').click()
       cy.get(':nth-child(1) > h2 > a').click()
       cy.get('.add-pro').click()
   

      // 2.მთავარ გვერდზე მარჯვენა ზედა კუთხეში დააჭირეთ ღილაკს "კალათა"
      cy.get('.menu-pop > [href="https://zootopia.ge/ka/cart"]').click()
       
      // 3.პროდუქტის ფოტოზე ზედა მარჯვენა კუთხეში დააჭირე ღილაკს ურნა 
      cy.get('.clear > a').click()
 })})})