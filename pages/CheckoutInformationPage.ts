import {BasePage} from './BasePage';
import {Page} from '@playwright/test';

export class CheckoutInformationPage extends BasePage {
  private readonly locators = {
    pageTitle: '[data-test="title"]',
    firstName: '[data-test="firstName"]',
    lastName: '[data-test="lastName"]',
    postalCode: '[data-test="postalCode"]',
    cancelButton: '[data-test="cancel"]',
    continueButton: '[data-test="continue"]',
    shoppingCartBadge: '[data-test="shopping-cart-badge"]',
  };

  constructor(page: Page) {
    super(page);
  }

  async verifyPageTitle() {
    await this.verifyElementTextContains(this.locators.pageTitle, 'Checkout: Your Information', 'validate page title');
  }

  async verifyCheckoutInformationPageElements() {
    await this.verifyElementIsVisible(this.locators.firstName, 'validate first name is visible');
    await this.verifyElementIsVisible(this.locators.lastName, 'validate last name is visible');
    await this.verifyElementIsVisible(this.locators.postalCode, 'validate postal code is visible');
    await this.verifyElementIsVisible(this.locators.cancelButton, 'validate cancel button');
    await this.verifyElementIsVisible(this.locators.continueButton, 'validate continue button');
  }

  async verifyCartBagdeHasItems() {
    await this.verifyElementTextContains(this.locators.shoppingCartBadge, '1', 'validate cart has items');
  }

  async fillFirstName() {
    await this.clickOnElement(this.locators.firstName);
    await this.insertValueIntoElement(this.locators.firstName, 'First');
  }

  async fillLastName() {
    await this.clickOnElement(this.locators.lastName);
    await this.insertValueIntoElement(this.locators.lastName, 'last');
  }

  async fillPostalCode() {
    await this.clickOnElement(this.locators.postalCode);
    await this.insertValueIntoElement(this.locators.postalCode, '11181');
  }

  async clickContinue() {
    await this.clickOnElement(this.locators.continueButton);
  }
}
