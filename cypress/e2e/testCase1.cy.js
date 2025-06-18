import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';

const homePage = new HomePage();
const productPage = new ProductPage();

describe('Test Case 1: Search Product', () => {
  it('should search and display products', () => {
    homePage.visit();
    homePage.verifyHomePage();
    homePage.clickProducts();
    productPage.verifyAllProductsPage();
    homePage.searchProduct('Dress');
    productPage.verifySearchedProductsVisible();
  });
});
