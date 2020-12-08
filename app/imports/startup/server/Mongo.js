import { Meteor } from 'meteor/meteor';
import { Restaurants } from '../../api/restaurant/Restaurant';
import { MenuItems } from '../../api/menuItem/menuItem';
import { Favorites } from '../../api/favorite/Favorite';
import { Featureds } from '../../api/featured/Featured';

/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addRestaurant(data) {
  console.log(`  Adding: ${data.name} `);
  Restaurants.collection.insert(data);
}

function addMenuItem(data) {
  console.log(`  Adding: ${data.name} `);
  MenuItems.collection.insert(data);
}

function addFavorites(data) {
  console.log(`  Adding: ${data.food} `);
  Favorites.collection.insert(data);
}

function addFeatured(data) {
  console.log(`  Adding: ${data.name} `);
  Featureds.collection.insert(data);
}

/** Initialize the collection if empty. */
if (Restaurants.collection.find().count() === 0) {
  if (Meteor.settings.defaultRestaurants) {
    console.log('Creating default restaurants.');
    Meteor.settings.defaultRestaurants.map(data => addRestaurant(data));
  }
}

if (MenuItems.collection.find().count() === 0) {
  if (Meteor.settings.defaultMenuItems) {
    console.log('Creating default menu items.');
    Meteor.settings.defaultMenuItems.map(data => addMenuItem(data));
  }
}

if (Favorites.collection.find().count() === 0) {
  if (Meteor.settings.defaultFavorites) {
    console.log('Creating default favorites.');
    Meteor.settings.defaultFavorites.map(data => addFavorites(data));
  }
}

if (Featureds.collection.find().count() === 0) {
  if (Meteor.settings.defaultFeatureds) {
    console.log('Creating default restaurants.');
    Meteor.settings.defaultFeatureds.map(data => addFeatured(data));
  }
}

if ((Meteor.settings.loadAssetsFile) && (Restaurants.collection.find().count() < 3)) {
  const assetsFileName = 'data.json';
  console.log(`Loading data from private/${assetsFileName}`);
  const jsonData = JSON.parse(Assets.getText(assetsFileName));
  jsonData.moreRestaurants.map(restaurant => addRestaurant(restaurant));
  jsonData.menuItems.map(item => addMenuItem(item));
}
