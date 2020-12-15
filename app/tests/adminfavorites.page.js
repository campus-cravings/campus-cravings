import { Selector } from 'testcafe';

class AdminFavoritesPage {
  constructor() {
    this.pageId = '#listfavorites-admin-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const adminFavoritesPage = new AdminFavoritesPage();
