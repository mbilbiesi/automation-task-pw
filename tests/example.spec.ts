import { test, expect } from '@playwright/test';
import {LoginPage} from "../pages/LoginPage";






test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  // await expect(page.locator('#root')).toContainText('Swag Labs');
  // await expect(page.locator('[data-test="username"]')).toBeEmpty();
  // await expect(page.locator('[data-test="password"]')).toBeEmpty();
  // await expect(page.locator('[data-test="login-button"]')).toContainText('Login');
  // await page.locator('[data-test="username"]').click();
  // await page.locator('[data-test="username"]').fill('standard_user');
  // await page.locator('[data-test="password"]').click();
  // await page.locator('[data-test="password"]').fill('secret_sauce');
  // await page.locator('[data-test="login-button"]').click();
  const loginPage = new LoginPage(page);
  await loginPage.verifyPageElements();
  await loginPage.insertUsername('standard_user');
  await loginPage.insertPassword('secret_sauce');
  await loginPage.clickOnLogin();

  await expect(page.locator('[data-test="item-4-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
  await expect(page.getByText('carry.allTheThings() with the')).toBeVisible();
  await page.getByText('$29.99').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="item-4-img-link"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('1');
  await page.locator('[data-test="back-to-products"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
  await expect(page.locator('[data-test="inventory-item-desc"]')).toContainText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
  await expect(page.locator('[data-test="inventory-item-price"]')).toContainText('$29.99');
  await expect(page.locator('[data-test="item-quantity"]')).toContainText('1');
  await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
  await page.locator('[data-test="checkout"]').click();
  await expect(page.locator('[data-test="firstName"]')).toBeEmpty();
  await expect(page.locator('[data-test="lastName"]')).toBeEmpty();
  await expect(page.locator('[data-test="postalCode"]')).toBeEmpty();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('mazen');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('bilbeisi');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('111118');
  await page.locator('[data-test="continue"]').click();
  await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Overview');
  await expect(page.locator('[data-test="cart-quantity-label"]')).toContainText('QTY');
  await expect(page.locator('[data-test="cart-desc-label"]')).toContainText('Description');
  await expect(page.locator('[data-test="item-quantity"]')).toContainText('1');
  await expect(page.locator('[data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
  await expect(page.locator('[data-test="inventory-item-desc"]')).toContainText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
  await expect(page.locator('[data-test="inventory-item"]')).toContainText('$29.99');
  await expect(page.locator('[data-test="payment-info-label"]')).toContainText('Payment Information:');
  await expect(page.locator('[data-test="payment-info-value"]')).toContainText('SauceCard #31337');
  await expect(page.locator('[data-test="shipping-info-label"]')).toContainText('Shipping Information:');
  await expect(page.locator('[data-test="shipping-info-value"]')).toContainText('Free Pony Express Delivery!');
  await expect(page.locator('[data-test="total-info-label"]')).toContainText('Price Total');
  await expect(page.locator('[data-test="subtotal-label"]')).toContainText('Item total: $29.99');
  await expect(page.locator('[data-test="tax-label"]')).toContainText('Tax: $2.40');
  await expect(page.locator('[data-test="total-label"]')).toContainText('Total: $32.39');
  await expect(page.locator('[data-test="cancel"]')).toBeVisible();
  await expect(page.locator('[data-test="finish"]')).toBeVisible();
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="pony-express"]')).toBeVisible();
  await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
  await expect(page.locator('[data-test="complete-text"]')).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
  await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();
  await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Complete!');
});
