class ProductPage {

  verifyAllProductsPage() {
    cy.url().should('include', '/products');
    cy.contains('All Products').should('be.visible');
  }

  viewProduct() {
    cy.contains('View Product').first().click();
  }

  verifyProductDetailPage() {
    cy.url().should('include', '/product_details');
    cy.get('.product-information').should('be.visible');
  }

  verifySearchedProductsVisible() {
    cy.get('.features_items').should('contain.text', 'Searched Products');
    cy.get('.productinfo.text-center').should('be.visible');
  }
  
  setQuantity(quantity) {
    cy.get('#quantity').clear().type(quantity);
  }

  addToCart() {
    cy.get('.cart').click();
    cy.contains('Continue Shopping').click();
  }

  viewCart() {
    cy.get('a[href="/view_cart"]').first().click();
    cy.url().should('include', '/view_cart');
  }

  verifyQuantityInCart(qty) {
    cy.get('#cart_info').should('be.visible');
    cy.get('#cart_info tbody tr').first().within(() => {
      cy.get('button.disabled').should('contain.text', qty.toString());
    });
  }
}

export default ProductPage;
