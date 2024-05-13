import {test, expect, Page} from '@playwright/test';

export class BasePage {
  constructor(public page: Page) {}

  protected async clickOnElement(locator: string, elementIndex = 0): Promise<void> {
    await test.step(`Click on ${locator}`, async () => {
      await this.page.locator(locator).nth(elementIndex).click();
    });
  }

  protected async insertValueIntoElement(locator: string, value: string): Promise<void> {
    await test.step(`Insert value in ${locator}`, async () => {
      await this.page.locator(locator).fill(value);
    });
  }

  protected async verifyElementTextContains(locator: string, expectedText: string, message?: string): Promise<void> {
    await test.step(message, async () => {
      await expect(this.page.locator(locator)).toContainText(expectedText);
    });
  }

  protected async verifyElementHasNoValue(locator: string, message: string): Promise<void> {
    await test.step(message, async () => {
      await expect(this.page.locator(locator)).toBeEmpty();
    });
  }

  protected async verifyElementHasValue(locator: string, message: string): Promise<void> {
    await test.step(message, async () => {
      await expect(this.page.locator(locator)).not.toBeEmpty();
    });
  }

  protected async verifyElementIsVisible(locator: string, message: string, elementIndex = 0): Promise<void> {
    await test.step(message, async () => {
      await expect(this.page.locator(locator).nth(elementIndex)).toBeVisible();
    });
  }

  protected async getElementText(locator: string): Promise<string> {
    return await this.page.locator(locator).textContent();
  }
}
