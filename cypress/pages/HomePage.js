class HomePage {
  visit() {
    cy.visit('http://automationexercise.com');
  }

  verifyHomePage() {
    cy.get('body').should('contain', 'Home');
  }

  clickProducts() {
    cy.contains('Products').click();
  }

  searchProduct(productName) {
    cy.get('#search_product').type(productName);
    cy.get('#submit_search').click();
  }
  
}

export default HomePage;
