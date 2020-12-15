import { Selector } from 'testcafe';

class ProfilePage {
  constructor() {
    this.pageId = '#profile-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
    await testController.click('#add-pref-dropdown');
    await testController.pressKey('down down down enter');
    await testController.click('#add-pref-submit');
    await testController.pressKey('enter');
    await testController.click('#add-pref-button');
  }
}

export const profilePage = new ProfilePage();
