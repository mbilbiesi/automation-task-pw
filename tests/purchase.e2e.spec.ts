import {test} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {ProductsPage} from '../pages/ProductsPage';
import {CartPage} from '../pages/CartPage';
import {CheckoutInformationPage} from '../pages/CheckoutInformationPage';
import {CheckoutOverviewPage} from '../pages/CheckoutOverviewPage';
import {CheckoutCompletePage} from '../pages/CheckoutCompletePage';

test('test', async ({page}) => {
  await page.goto('https://www.saucedemo.com/');

  const loginPage = new LoginPage(page);
  await loginPage.verifyPageElements();
  await loginPage.insertUsername('standard_user');
  await loginPage.insertPassword('secret_sauce');
  await loginPage.clickOnLogin();

  const productPage = new ProductsPage(page);
  await productPage.verifyPageTitle();
  await productPage.verifyProductElements();
  await productPage.clickOnAddToCart();
  await productPage.verifyCartBadge();
  await productPage.clickOnShoppingCart();

  const cartPage = new CartPage(page);
  await cartPage.verifyPageTitle();
  await cartPage.verifyCartPageElement();
  await cartPage.clickOnCheckoutButton();

  const checkoutInformationPage = new CheckoutInformationPage(page);
  await checkoutInformationPage.verifyPageTitle();
  await checkoutInformationPage.verifyCheckoutInformationPageElements();
  await checkoutInformationPage.fillFirstName();
  await checkoutInformationPage.fillLastName();
  await checkoutInformationPage.fillPostalCode();
  await checkoutInformationPage.clickContinue();

  const checkoutOverviewPage = new CheckoutOverviewPage(page);
  await checkoutOverviewPage.verifyPageTitle();
  await checkoutOverviewPage.verifyCheckoutOverviewPageElements();
  await checkoutOverviewPage.clickOnFinishButton();

  const checkoutCompletePage = new CheckoutCompletePage(page);
  await checkoutCompletePage.verifyPageTitle();
  await checkoutCompletePage.verifySuccessCheckoutOverviewPageElements();
});
