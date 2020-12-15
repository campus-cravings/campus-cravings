import { Selector } from 'testcafe';
import { navBar } from './navbar.component';

class AddRestaurantPage {
  constructor() {
    this.pageId = '#add-restaurant-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async insertRestaurant(testController) {
    await this.isDisplayed(testController);
    await testController.typeText('#restaurant-field-name', 'Test Name');
    await testController.typeText('#restaurant-field-address', '1234 Test Address');
    await testController.typeText('#restaurant-field-image', 'Test Image');
    await testController.typeText('#restaurant-field-days', '1234 Test Days');
    await testController.typeText('#restaurant-field-hours', '1234 Test Hours');
    await testController.typeText('#restaurant-field-description', '1234 Test Description');
    await testController.click('#restaurant-field-submit');
    await testController.pressKey('enter');
  }
}

export const addRestaurantPage = new AddRestaurantPage();
