import { Selector } from 'testcafe';

class VendorHomePage {
  constructor() {
    this.pageId = '#vendorhome-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Checks that clicking the cards redirect correctly. */
  async clickOnCards(testController) {
    await testController.click('#vendor-card-one');
    await testController.click('#navbar-vendor-home');
    await testController.click('#vendor-card-two');
    await testController.click('#navbar-vendor-home');
  }
}

export const vendorHomePage = new VendorHomePage();
