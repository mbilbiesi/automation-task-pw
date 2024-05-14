import test from './BaseTest';

test.describe.configure({mode: 'serial'});

  test('login page - should elements be displayed', async ({loginPage}) => {
    // Then
    await loginPage.verifyPageTitle();
    await loginPage.verifyPageElements();
  });

  test('login page - should login successfully', async ({loginPage, productPage}) => {
    // When
    await loginPage.insertUsername('standard_user');
    await loginPage.insertPassword('secret_sauce');
    await loginPage.clickOnLogin();

    // Then
    await productPage.verifyPageTitle();
  });

  test('product page - should elements be displayed', async ({productPage}) => {
    // Then
    await productPage.verifyProductElements();
  });

  test('product page - should add product to cart', async ({productPage}) => {
    // When
    await productPage.clickOnAddToCart();

    // Then
    await productPage.verifyCartBadge();
  });

  test('product page - should navigate to shopping cart', async ({productPage, cartPage}) => {
    // When
    await productPage.clickOnShoppingCart();

    // Then
    await cartPage.verifyPageTitle();
  });

  test('cart page - should elements be displayed', async ({cartPage}) => {
    // Then
    await cartPage.verifyCartPageElement();
  });

  test('cart page - should navigate to checkout page', async ({cartPage, checkoutInformationPage}) => {
    // When
    await cartPage.clickOnCheckoutButton();

    // Then
    await checkoutInformationPage.verifyPageTitle();
  });

  test('checkout information - should elements be displayed', async ({checkoutInformationPage}) => {
    // Then
    await checkoutInformationPage.verifyCheckoutInformationPageElements();
    await checkoutInformationPage.verifyCartBagdeHasItems();
  });

  test(
    'checkout information - should fill form and navigate to overview',
    async ({checkoutInformationPage, checkoutOverviewPage}) => {
      // When
      await checkoutInformationPage.fillFirstName();
      await checkoutInformationPage.fillLastName();
      await checkoutInformationPage.fillPostalCode();
      await checkoutInformationPage.clickContinue();

      // Then
      await checkoutOverviewPage.verifyPageTitle();
    }
  );

  test('checkout overview - should elements be displayed', async ({checkoutOverviewPage}) => {
    // Then
    await checkoutOverviewPage.verifyCheckoutOverviewPageElements();
  });

  test('checkout overview - should finish the order', async ({checkoutOverviewPage, checkoutCompletePage}) => {
    // When
    await checkoutOverviewPage.clickOnFinishButton();

    // Then
    await checkoutCompletePage.verifyPageTitle();
  });

  test('checkout complete - should successful elements display', async ({checkoutCompletePage}) => {
    // When
    await checkoutCompletePage.verifySuccessCheckoutOverviewPageElements();
  });
