import { Selector } from 'testcafe';
import { navBar } from './navbar.component';

class AddFeaturedPage {
  constructor() {
    this.pageId = '#add-featured-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async insertFeatured(testController) {
    await this.isDisplayed(testController);
    await testController.typeText('#featured-field-name', 'Spicy Ahi Poke');
    await testController.typeText('#featured-field-place', 'Ono Seafood');
    await testController.typeText('#featured-field-image', 'https://i.imgur.com/y1BjcfO.png');
    await testController.typeText('#featured-field-description', 'Fresh chunks of tuna covered in a generous serving of spicy mayo-based sauce.');
    await testController.click('#featured-field-submit');
    await testController.pressKey('enter');
  }
}

export const addFeaturedPage = new AddFeaturedPage();
