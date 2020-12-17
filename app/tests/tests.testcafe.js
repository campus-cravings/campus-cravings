import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { listMenuPage } from './listmenu.page';
import { listRestaurantsPage } from './listrestaurants.page';
import { listFavoritesPage } from './listfavorites.page';
import { profilePage } from './profile.page';
import { navBar } from './navbar.component';
import { addRestaurantPage } from './addrestaurant.page';
import { userHomePage } from './userhome.page';
import { vendorHomePage } from './vendorhome.page';
import { adminHomePage } from './adminhome.page';
import { addFeaturedPage } from './addfeatured.page';
import { listFeaturedsPage } from './listfeatureds.page';
import { adminFavoritesPage } from './adminfavorites.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };
const vendor = { username: 'vendor@foo.com', password: 'changeme' };
const admin = { username: 'admin@foo.com', password: 'changeme' };

fixture('meteor-application-template-react localhost test with default db')
    .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {

});

test('Test that signin and signout work', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test the vendor functions', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, vendor.username, vendor.password);
  await navBar.isLoggedIn(testController, vendor.username);
  await navBar.gotoVendorHomePage(testController);
  await vendorHomePage.isDisplayed(testController);
  await vendorHomePage.clickOnCards(testController);
  await navBar.gotoAddRestaurtantPage(testController);
  await addRestaurantPage.isDisplayed(testController);
  await addRestaurantPage.insertRestaurant(testController);
  await navBar.gotoAddFeaturedPage(testController);
  await addFeaturedPage.isDisplayed(testController);
  await addFeaturedPage.insertFeatured(testController);
});

test('Test the user functions', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoUserHomePage(testController);
  await userHomePage.isDisplayed(testController);
  await userHomePage.clickOnCards(testController);
  await navBar.gotoFavoritesPage(testController);
  await listFavoritesPage.isDisplayed(testController);
  await navBar.gotoFeaturedsPage(testController);
  await listFeaturedsPage.isDisplayed(testController);
  await navBar.gotoListMenuPage(testController);
  await listMenuPage.isDisplayed(testController);
  await navBar.gotoListResaurantsPage(testController);
  await listRestaurantsPage.isDisplayed(testController);
  await navBar.gotoProfilePage(testController);
  await profilePage.isDisplayed(testController);
});

test('Test the admin functions', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, admin.username, admin.password);
  await navBar.isLoggedIn(testController, admin.username);
  await navBar.gotoAdminHomePage(testController);
  await adminHomePage.isDisplayed(testController);
  await adminHomePage.clickOnCards(testController);
  await navBar.gotoAdminFavoritesPage(testController);
  await adminFavoritesPage.isDisplayed(testController);
});
