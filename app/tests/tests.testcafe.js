import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { listMenuPage } from './listmenu.page';
import { listRestaurantsPage } from './listrestaurants.page';
import { listFavoritesPage } from './listfavorites.page';
import { profilePage } from './profile.page';
import { navBar } from './navbar.component';
import { addRestaurantPage } from './addrestaurant.page';
import { topPicksPage } from './toppicks.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };
const vendor = { username: 'vendor@foo.com', password: 'changeme'};

fixture('meteor-application-template-react localhost test with default db')
    .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that signin and signout work', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test vendor functions', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, vendor.username, vendor.password);
  await navBar.isLoggedIn(testController, vendor.username);
  await navBar.gotoAddRestaurtantPage(testController);
  await addRestaurantPage.isDisplayed(testController);
  await addRestaurantPage.insertRestaurant(testController);
});

test('Test the pages in the navbar', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoListMenuPage(testController);
  await listMenuPage.isDisplayed(testController);
  await navBar.gotoListResaurantsPage(testController);
  await listRestaurantsPage.isDisplayed(testController);
  await navBar.gotoFavoritesPage(testController);
  await listFavoritesPage.isDisplayed(testController);
  await navBar.gotoProfilePage(testController);
  await profilePage.isDisplayed(testController);
  await navBar.gotoTopPicksPage(testController);
  await topPicksPage.isDisplayed(testController);
});
