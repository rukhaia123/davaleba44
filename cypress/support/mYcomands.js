Cypress.Commands.add('login',(elfosta,password)=>{
     // 2.მთავარ გვერდზე ზედა მარჯვენა კუთხეში დააჭირე ღილაკს "შესვლა"
     cy.get('.rprof > p').click()
     // 3.გახნილ ფანჯარაზე შეიყვანე შემდეგი მონაცემები;ელ-ფოსტა,პაროლი
     cy.get(':nth-child(5) > .imail').type(elfosta)
     cy.get('.ipass').type(password)
      
     // 4. დააჭირე ღილაკს "ავტორიზაცია
  
     cy.get('.avtorization > .input-shablon > .form-button').click()
    
})