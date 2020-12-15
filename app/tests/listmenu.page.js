import { Selector } from 'testcafe';

class ListMenuPage {
  constructor() {
    this.pageId = '#listmenu-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
    await testController.click('#restaurants');
    await testController.pressKey('down down enter');
    await testController.click('#listmenu-page');
    await testController.click('#submit');
    await testController.click('#click-see-menu');
    await testController.wait(1000);
  }
}

export const listMenuPage = new ListMenuPage();
