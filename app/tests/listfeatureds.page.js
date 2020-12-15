import { Selector } from 'testcafe';

class ListFeaturedsPage {
  constructor() {
    this.pageId = '#listfeatureds-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
    await testController.click('#bottom-footer');
    await testController.wait(1000);
  }
}

export const listFeaturedsPage = new ListFeaturedsPage();
