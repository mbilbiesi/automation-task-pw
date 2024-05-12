import { test, expect, Page, TestInfo } from "@playwright/test";

export class BasePage {
    constructor(public page:Page) {
    }

    protected async clickOnElement(locator:string):Promise<void> {
        await this.page.locator(locator).click();
    }

    protected async insertValueIntoElement(locator:string, value: string):Promise<void> {
        await this.page.locator(locator).fill(value);
    }

    protected async verifyElementTextContains(locator:string, expectedText:string, message?:string):Promise<void> {
        await expect(this.page.locator(locator), message).toContainText(expectedText);
    }

    protected async verifyElementHasNoValue(locator:string, message:string):Promise<void> {
        await expect(this.page.locator(locator), message).toBeEmpty();
    }
}
