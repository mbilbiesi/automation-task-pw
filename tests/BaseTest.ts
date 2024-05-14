import {LoginPage} from '../pages/LoginPage';
import {ProductsPage} from '../pages/ProductsPage';
import {CartPage} from '../pages/CartPage';
import {CheckoutInformationPage} from '../pages/CheckoutInformationPage';
import {CheckoutOverviewPage} from '../pages/CheckoutOverviewPage';
import {CheckoutCompletePage} from '../pages/CheckoutCompletePage';
import {Page, test as baseTest} from '@playwright/test';

interface Pages {
  loginPage: LoginPage;
  productPage: ProductsPage;
  cartPage: CartPage;
  checkoutInformationPage: CheckoutInformationPage;
  checkoutOverviewPage: CheckoutOverviewPage;
  checkoutCompletePage: CheckoutCompletePage;
}

let sharedPage: Page;

const test = baseTest.extend<Pages>({
  loginPage: async ({}, use) => {
    await use(new LoginPage(sharedPage));
  },
  productPage: async ({}, use) => {
    await use(new ProductsPage(sharedPage));
  },
  cartPage: async ({}, use) => {
    await use(new CartPage(sharedPage));
  },
  checkoutInformationPage: async ({}, use) => {
    await use(new CheckoutInformationPage(sharedPage));
  },
  checkoutOverviewPage: async ({}, use) => {
    await use(new CheckoutOverviewPage(sharedPage));
  },
  checkoutCompletePage: async ({}, use) => {
    await use(new CheckoutCompletePage(sharedPage));
  },
});

test.beforeAll(async ({browser}) => {
  sharedPage = await browser.newPage();
  await sharedPage.goto('/');
});

test.afterAll(async () => {
  await sharedPage.close();
});

export default test;
