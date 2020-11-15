import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Restaurants } from '../../api/restaurant/Restaurant';
import { MenuItems } from '../../api/menuItem/menuItem';

/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
}

function addRestaurant(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Restaurants.collection.insert(data);
}

function addMenuItem(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  MenuItems.collection.insert(data);
}

/** Initialize the collection if empty. */
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

if (Restaurants.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultRestaurants.map(data => addRestaurant(data));
  }
}

if (MenuItems.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultMenuItems.map(data => addMenuItem(data));
  }
}
