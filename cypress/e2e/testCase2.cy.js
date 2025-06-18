import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';

const homePage = new HomePage();
const productPage = new ProductPage();

describe('Test Case 2: Add Product to Cart', () => {
  it('should add product with quantity 4 to cart', () => {
    homePage.visit();
    homePage.verifyHomePage();
    productPage.viewProduct();
    productPage.verifyProductDetailPage();
    productPage.setQuantity(4);
    productPage.addToCart();
    productPage.viewCart();
    productPage.verifyQuantityInCart('4');
  });
});
