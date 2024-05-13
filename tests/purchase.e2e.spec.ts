import test from "./BaseTest";

test.describe('Purchase product successfully', () => {
  test('login page - should elements be displayed', async ({page, loginPage}) => {
    await page.goto('https://www.saucedemo.com/');
    await loginPage.verifyPageTitle();
    await loginPage.verifyPageElements();
  });

  test('login page - should login successfully', async ({page,loginPage,productPage,cartPage,checkoutInformationPage, checkoutOverviewPage,checkoutCompletePage}) => {
    await loginPage.insertUsername('standard_user');
    await loginPage.insertPassword('secret_sauce');
    await loginPage.clickOnLogin();


    await productPage.verifyPageTitle();
    await productPage.verifyProductElements();
    await productPage.clickOnAddToCart();
    await productPage.verifyCartBadge();
    await productPage.clickOnShoppingCart();


    await cartPage.verifyPageTitle();
    await cartPage.verifyCartPageElement();
    await cartPage.clickOnCheckoutButton();


    await checkoutInformationPage.verifyPageTitle();
    await checkoutInformationPage.verifyCheckoutInformationPageElements();
    await checkoutInformationPage.fillFirstName();
    await checkoutInformationPage.fillLastName();
    await checkoutInformationPage.fillPostalCode();
    await checkoutInformationPage.clickContinue();


    await checkoutOverviewPage.verifyPageTitle();
    await checkoutOverviewPage.verifyCheckoutOverviewPageElements();
    await checkoutOverviewPage.clickOnFinishButton();


    await checkoutCompletePage.verifyPageTitle();
    await checkoutCompletePage.verifySuccessCheckoutOverviewPageElements();
  });
});
