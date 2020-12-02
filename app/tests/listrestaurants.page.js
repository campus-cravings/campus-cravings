import { Selector } from 'testcafe';

class ListRestaurantsPage {
  constructor() {
    this.pageId = '#listrestaurants-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const listRestaurantsPage = new ListRestaurantsPage();
