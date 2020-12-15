import { Selector } from 'testcafe';

class UserHomePage {
  constructor() {
    this.pageId = '#userhome-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Checks that clicking the cards redirect correctly. */
  async clickOnCards(testController) {
    await testController.click('#user-card-one');
    await testController.click('#navbar-user-home');
    await testController.click('#user-card-two');
    await testController.click('#navbar-user-home');
    await testController.click('#user-card-three');
    await testController.click('#navbar-user-home');
  }
}

export const userHomePage = new UserHomePage();
