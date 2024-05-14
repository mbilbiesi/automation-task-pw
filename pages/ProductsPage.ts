import {BasePage} from './BasePage';
import {Page} from '@playwright/test';

export class ProductsPage extends BasePage {
  private readonly locators = {
    pageTitle: '[data-test="title"]',
    productTitle: '[data-test="inventory-item-name"]',
    productDescription: '[data-test="inventory-item-desc"]',
    productPrice: '[data-test="inventory-item-price"]',
    addToCart: '[data-test*="add-to-cart-sauce-labs"]',
    cartBadge: '[data-test="shopping-cart-badge"]',
    shoppingCart: '[data-test="shopping-cart-link"]',
  };

  constructor(page: Page) {
    super(page);
  }
  async verifyPageTitle() {
    await this.verifyElementTextContains(this.locators.pageTitle, 'Products', 'validate page title');
  }

  async verifyProductElements() {
    await this.verifyElementIsVisible(this.locators.productTitle, 'verify product title is visible');
    await this.verifyElementIsVisible(this.locators.productDescription, 'verify product description is visible');
    await this.verifyElementIsVisible(this.locators.productPrice, 'verify product price is visible');
    await this.verifyElementIsVisible(this.locators.addToCart, 'verify add to cart button is visible');
  }

  async clickOnAddToCart() {
    await this.clickOnElement(this.locators.addToCart);
  }

  async verifyCartBadge() {
    await this.verifyElementTextContains(this.locators.cartBadge, '1', 'validate cart badge has an items');
  }

  async clickOnShoppingCart() {
    await this.clickOnElement(this.locators.shoppingCart);
  }
}
