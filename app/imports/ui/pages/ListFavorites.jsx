import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card, Divider, Grid, Button, Segment } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Restaurants } from '../../api/restaurant/Restaurant';
import { MenuItems } from '../../api/menuItem/menuItem';
import { Favorites } from '../../api/favorite/Favorite';
import Favorite from '../components/Favorite';
import { Prefs } from '../../api/pref/Prefs';
import SmartMenu from '../components/SmartMenu';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListFavorites extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  getRestaurant(item) {
    const arr = this.props.restaurants.filter(restaurant => (restaurant.name === item.restaurant));
    return arr.pop();
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const fav = this.props.favorites.map(favor => this.props.menuItem.filter(item => (item.name === favor.food)));
    const flat = fav.flat();
    return (
        <Container id="listfavorites-page">
          <Divider horizontal>
            <Header as='h2'>
              Favorites
            </Header>
          </Divider>
          <Card.Group centered>{flat.map((item, index) => <Favorite
              key={index}
              restaurant={this.getRestaurant(item)}
              menuItem={item}/>)}
          </Card.Group>

          <Divider horizontal>
            <Header as='h2'>
              Smart Menu
            </Header>
          </Divider>
          <Card.Group centered>{this.props.restaurants.map((restaurants, index) => <SmartMenu
              key={index}
              restaurant={restaurants}
              menuItem={this.props.menuItem.filter(item => (item.restaurant === restaurants.name))}
              prefs={this.props.prefs}/>)}
          </Card.Group>
          <Segment basic>
            <Grid>
              <Grid.Column textAlign="center">
                <Button as={Link} to='/profile'>Add Preferences In Profile</Button>
              </Grid.Column>
            </Grid>
          </Segment>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListFavorites.propTypes = {
  restaurants: PropTypes.array.isRequired,
  menuItem: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired,
  prefs: PropTypes.object.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Restaurants.userPublicationName);
  const subscription2 = Meteor.subscribe(MenuItems.userPublicationName);
  const subscription3 = Meteor.subscribe(Favorites.userPublicationName);
  const subscription4 = Meteor.subscribe(Prefs.userPublicationName);
  return {
    menuItem: MenuItems.collection.find({}).fetch(),
    restaurants: Restaurants.collection.find({}).fetch(),
    favorites: Favorites.collection.find({}).fetch(),
    prefs: Prefs.collection.find({}).fetch(),
    ready: subscription.ready() && subscription2.ready() && subscription3.ready() && subscription4.ready(),
  };
})(ListFavorites);
