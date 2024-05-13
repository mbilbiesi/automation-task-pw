import {BasePage} from './BasePage';
import {Page} from '@playwright/test';

export class CartPage extends BasePage {
  private readonly locators = {
    pageTitle: '[data-test="title"]',
    quantityLabel: '[data-test="cart-quantity-label"]',
    cartDescriptionLabel: '[data-test="cart-desc-label"]',
    productName: '[data-test="inventory-item-name"]',
    productDescription: '[data-test="inventory-item-desc"]',
    productQuantity: '[data-test="item-quantity"]',
    productPrice: '[data-test="inventory-item-price"]',
    removeItemButton: '[data-test*="remove-"]',
    continueShoppingButton: '[data-test="continue-shopping"]',
    checkoutButton: '[data-test="checkout"]',
  };

  constructor(page: Page) {
    super(page);
  }
  async verifyPageTitle() {
    await this.verifyElementTextContains(this.locators.pageTitle, 'Your Cart', 'validate page title');
  }

  async verifyCartPageElement() {
    await this.verifyElementTextContains(this.locators.quantityLabel, 'QTY', 'validate quantity label');
    await this.verifyElementTextContains(
      this.locators.cartDescriptionLabel,
      'Description',
      'validate description label'
    );
    await this.verifyElementHasValue(this.locators.productName, 'validate product name exist');
    await this.verifyElementHasValue(this.locators.productDescription, 'validate product description exist');
    await this.verifyElementHasValue(this.locators.productPrice, 'validate product price exist');
    await this.verifyElementTextContains(this.locators.productQuantity, '1', 'validate product quantity value');
    await this.verifyElementTextContains(this.locators.removeItemButton, 'Remove', 'validate remove button');
    await this.verifyElementTextContains(
      this.locators.continueShoppingButton,
      'Continue Shopping',
      'validate Continue Shopping button'
    );
    await this.verifyElementTextContains(this.locators.checkoutButton, 'Checkout', 'validate Checkout button');
  }

  async clickOnCheckoutButton() {
    await this.clickOnElement(this.locators.checkoutButton);
  }
}
