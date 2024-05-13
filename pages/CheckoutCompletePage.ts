import {BasePage} from './BasePage';
import {Page} from '@playwright/test';

export class CheckoutCompletePage extends BasePage {
  private readonly locators = {
    pageTitle: '[data-test="title"]',
    completeHeader: '[data-test="complete-header"]',
    successCompletionIcon: '[data-test="pony-express"]',
    completeText: '[data-test="complete-text"]',
    backButton: '[data-test="back-to-products"]',
    shoppingCart: '[data-test="shopping-cart-link"]',
  };

  constructor(page: Page) {
    super(page);
  }

  async verifyPageTitle() {
    await this.verifyElementTextContains(this.locators.pageTitle, 'Checkout: Complete!', 'validate page title');
  }

  async verifySuccessCheckoutOverviewPageElements() {
    await this.verifyElementTextContains(
      this.locators.completeHeader,
      'Thank you for your order!',
      'validate complete header text'
    );
    await this.verifyElementIsVisible(this.locators.successCompletionIcon, 'validate success completion icon');
    await this.verifyElementTextContains(
      this.locators.completeText,
      'Your order has been dispatched, and will arrive just as fast as the pony can get there!',
      'validate complete text value'
    );
    await this.verifyElementTextContains(this.locators.backButton, 'Back Home', 'validate back button');
    await this.verifyElementIsVisible(this.locators.shoppingCart, 'validate shopping cart is visible');
  }
}
