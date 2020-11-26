import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Restaurants } from '../../api/restaurant/Restaurant';
import Restaurant from '../components/Restaurant';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListRestaurants extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">List Restaurants</Header>
          <Card.Group centered>{this.props.restaurants.map((restaurants, index) => <Restaurant
              key={index}
              restaurant={restaurants}/>)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListRestaurants.propTypes = {
  restaurants: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Restaurants.userPublicationName);
  return {
    restaurants: Restaurants.collection.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListRestaurants);
