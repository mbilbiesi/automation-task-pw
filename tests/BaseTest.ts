import {LoginPage} from "../pages/LoginPage";
import {ProductsPage} from "../pages/ProductsPage";
import {CartPage} from "../pages/CartPage";
import {CheckoutInformationPage} from "../pages/CheckoutInformationPage";
import {CheckoutOverviewPage} from "../pages/CheckoutOverviewPage";
import {CheckoutCompletePage} from "../pages/CheckoutCompletePage";
import { Page, test as baseTest } from "@playwright/test";

interface Pages {
  loginPage: LoginPage;
  productPage: ProductsPage;
  cartPage: CartPage;
  checkoutInformationPage: CheckoutInformationPage;
  checkoutOverviewPage: CheckoutOverviewPage;
  checkoutCompletePage: CheckoutCompletePage;
}

const test = baseTest.extend<Pages>({
  loginPage: async ({ page}, use) => {
    await use(new LoginPage(page));
  },
  productPage:async ({page}, use) => {
    await use(new ProductsPage(page));
  },
  cartPage:async ({page}, use) => {
    await use(new CartPage(page));
  },
  checkoutInformationPage:async ({page}, use) => {
    await use(new CheckoutInformationPage(page));
  },
  checkoutOverviewPage:async ({page}, use) => {
    await use(new CheckoutOverviewPage(page));
  },
  checkoutCompletePage:async ({page}, use) => {
    await use(new CheckoutCompletePage(page));
  }
});

export default test;
