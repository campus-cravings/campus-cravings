import { Selector } from 'testcafe';

class NavBar {

  /** If someone is logged in, then log them out, otherwise do nothing. */
  async ensureLogout(testController) {
    const loggedInUser = await Selector('#navbar-current-user').exists;
    if (loggedInUser) {
      await testController.click('#navbar-current-user');
      await testController.click('#navbar-sign-out');
    }
  }

  async gotoSigninPage(testController) {
    await this.ensureLogout(testController);
    await testController.click('#login-dropdown');
    await testController.click('#login-dropdown-sign-in');
  }

  /** Check that the specified user is currently logged in. */
  async isLoggedIn(testController, username) {
    const loggedInUser = Selector('#navbar-current-user').innerText;
    await testController.expect(loggedInUser).eql(username);
  }

  /** Check that someone is logged in, then click items to logout. */
  async logout(testController) {
    await testController.expect(Selector('#navbar-current-user').exists).ok();
    await testController.click('#navbar-current-user');
    await testController.click('#navbar-sign-out');
  }

  /** Pull down login menu, go to sign up page. */
  async gotoSignupPage(testController) {
    await this.ensureLogout(testController);
    await testController.click('#login-dropdown');
    await testController.click('#login-dropdown-sign-up');
  }

  /** Go to the favorites and smart menu page. */
  async gotoFavoritesPage(testController) {
    await testController.click('#food-dropdown');
    await testController.click('#navbar-favorites');
  }

  /** Go to the featured page. */
  async gotoFeaturedsPage(testController) {
    await testController.click('#food-dropdown');
    await testController.click('#navbar-featureds');
  }

  /** Go to the select menu page. */
  async gotoListMenuPage(testController) {
    await testController.click('#food-dropdown');
    await testController.click('#navbar-list-menu');
  }

  /** Go to the list restaurants page. */
  async gotoListResaurantsPage(testController) {
    await testController.click('#restaurants-dropdown');
    await testController.click('#navbar-list-restaurants');
  }

  async gotoProfilePage(testController) {
    await testController.expect(Selector('#navbar-current-user').exists).ok();
    await testController.click('#navbar-current-user');
    await testController.click('#navbar-profile');
  }

  async gotoAddRestaurtantPage(testController) {
    await testController.click('#add-dropdown');
    await testController.click('#navbar-add-restaurant');
  }

  async gotoAddFeaturedPage(testController) {
    await testController.click('#add-dropdown');
    await testController.click('#navbar-add-featured');
  }

  async gotoTopPicksPage(testController) {
    await testController.click('#navbar-top-picks');
  }

  /** Go to the user home page. */
  async gotoUserHomePage(testController) {
    await testController.click('#navbar-user-home');
  }

  /** Go to the vendor home page. */
  async gotoVendorHomePage(testController) {
    await testController.click('#navbar-vendor-home');
  }

  /** Go to the admin home page. */
  async gotoAdminHomePage(testController) {
    await testController.click('#navbar-admin-home');
  }

  /** Go to the admin favorites page. */
  async gotoAdminFavoritesPage(testController) {
    await testController.click('#navbar-admin-fav');
  }
}

export const navBar = new NavBar();
