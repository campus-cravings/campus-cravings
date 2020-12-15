import { Selector } from 'testcafe';

class AdminHomePage {
  constructor() {
    this.pageId = '#adminhome-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Checks that clicking the cards redirect correctly. */
  async clickOnCards(testController) {
    await testController.click('#admin-card-one');
    await testController.click('#navbar-admin-home');
    await testController.click('#admin-card-two');
    await testController.click('#navbar-admin-home');
  }
}

export const adminHomePage = new AdminHomePage();
