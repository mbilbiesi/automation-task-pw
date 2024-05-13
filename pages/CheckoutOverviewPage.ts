import {BasePage} from './BasePage';
import {Page} from '@playwright/test';

export class CheckoutOverviewPage extends BasePage {
  private readonly locators = {
    pageTitle: '[data-test="title"]',
    cartQuantityLabel: '[data-test="cart-quantity-label"]',
    cartDescriptionLabel: '[data-test="cart-desc-label"]',
    productQuantity: '[data-test="item-quantity"]',
    productName: '[data-test="inventory-item-name"]',
    productDescription: '[data-test="inventory-item-desc"]',
    productPrice: '[data-test="inventory-item-price"]',
    shoppingCartBadge: '[data-test="shopping-cart-badge"]',
    paymentInfoLabel: '[data-test="payment-info-label"]',
    paymentInfoValue: '[data-test="payment-info-value"]',
    shippingInfoLabel: '[data-test="shipping-info-label"]',
    shippingInfoValue: '[data-test="shipping-info-value"]',
    totalInfoLabel: '[data-test="total-info-label"]',
    subTotalLabel: '[data-test="subtotal-label"]',
    taxLabel: '[data-test="tax-label"]',
    totalLabel: '[data-test="total-label"]',
    finishButton: '[data-test="finish"]',
    cancelButton: '[data-test="cancel"]',
  };

  constructor(page: Page) {
    super(page);
  }

  async verifyPageTitle() {
    await this.verifyElementTextContains(this.locators.pageTitle, 'Checkout: Overview', 'validate page title');
  }

  async verifyCheckoutOverviewPageElements() {
    await this.verifyElementTextContains(this.locators.cartQuantityLabel, 'QTY', 'validate quantity label');
    await this.verifyElementTextContains(
      this.locators.cartDescriptionLabel,
      'Description',
      'validate description label'
    );
    await this.verifyElementTextContains(this.locators.productQuantity, '1', 'validate product quantity value');
    await this.verifyElementHasValue(this.locators.productName, 'validate product name exist');
    await this.verifyElementHasValue(this.locators.productDescription, 'validate description label');
    await this.verifyElementHasValue(this.locators.productPrice, 'validate price exist');
    await this.verifyElementTextContains(this.locators.shoppingCartBadge, '1', 'validate cart badge has items');
    await this.verifyElementTextContains(
      this.locators.paymentInfoLabel,
      'Payment Information:',
      'validate payment info label'
    );
    await this.verifyElementTextContains(this.locators.paymentInfoValue, 'SauceCard #', 'validate payment info value');
    await this.verifyElementTextContains(
      this.locators.shippingInfoLabel,
      'Shipping Information:',
      'validate shipping info label'
    );
    await this.verifyElementHasValue(this.locators.shippingInfoValue, 'validate shipping info value');
    await this.verifyElementTextContains(this.locators.totalInfoLabel, 'Price Total', 'validate total info label');
    await this.verifyElementTextContains(this.locators.subTotalLabel, 'Item total: ', 'validate subtotal value');
    await this.verifyElementTextContains(this.locators.taxLabel, 'Tax: ', 'validate tax label');
    await this.verifyElementTextContains(this.locators.totalLabel, 'Total: ', 'validate total label');
    await this.verifyElementIsVisible(this.locators.finishButton, 'validate finish button is visible');
    await this.verifyElementIsVisible(this.locators.cancelButton, 'validate cancel button is visible');
  }

  async clickOnFinishButton() {
    await this.clickOnElement(this.locators.finishButton);
  }
}
