import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Restaurants } from '../../api/restaurant/Restaurant';
import { MenuItems } from '../../api/menuItem/menuItem';
import { Favorites } from '../../api/favorite/Favorite';

/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
}

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

/** Initialize the collection if empty. */
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

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
