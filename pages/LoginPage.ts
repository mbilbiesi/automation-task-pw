import {BasePage} from "./BasePage";
import {Page} from "@playwright/test";

export class LoginPage extends BasePage {
    private readonly locators = {
        title: '#root',
        usernameField: '[data-test="username"]',
        passwordField: '[data-test="password"]',
        loginButton: '[data-test="login-button"]',
    }

    constructor(page:Page) {
        super(page);
    }

    async verifyPageElements(){
        await this.verifyElementTextContains(this.locators.title, 'Swag Labs', 'validate page title');
        await this.verifyElementHasNoValue(this.locators.usernameField, 'verify username is empty');
        await this.verifyElementHasNoValue(this.locators.passwordField, 'verify password is empty');
        await this.verifyElementTextContains(this.locators.loginButton, 'Login', 'verify login button');
    }

    async insertUsername(username: string){
        await this.clickOnElement(this.locators.usernameField);
        await this.insertValueIntoElement(this.locators.usernameField, username);

    }

    async insertPassword(password:string){
        await this.clickOnElement(this.locators.passwordField);
        await this.insertValueIntoElement(this.locators.passwordField, password);
    }

    async clickOnLogin(){
        await this.clickOnElement(this.locators.loginButton);
    }
}
