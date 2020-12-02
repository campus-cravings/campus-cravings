import { Selector } from 'testcafe';

class ListFavoritesPage {
  constructor() {
    this.pageId = '#listfavorites-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const listFavoritesPage = new ListFavoritesPage();
