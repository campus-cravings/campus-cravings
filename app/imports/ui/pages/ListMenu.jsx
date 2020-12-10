import React from 'react';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Segment, Container, Header, Loader, Card } from 'semantic-ui-react';
import { AutoForm, SubmitField } from 'uniforms-semantic';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { _ } from 'meteor/underscore';
import { Restaurants } from '../../api/restaurant/Restaurant';
import { MenuItems } from '../../api/menuItem/menuItem';
import Menu from '../components/Menu';
import { Favorites } from '../../api/favorite/Favorite';
import MultiSelectField from '../forms/controllers/MultiSelectField';

/** Create a schema to specify the structure of the data to appear in the form. */
const makeSchema = (allRestaurants) => new SimpleSchema({
  restaurants: { type: Array, label: 'Restaurants', optional: true },
  'restaurants.$': { type: String, allowedValues: allRestaurants },
});

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListRestaurants extends React.Component {

  constructor(props) {
    super(props);
    this.state = { restaurants: [] };
  }

  submit(data) {
    this.setState({ restaurants: data.restaurants || [] });
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const allRestaurants = _.pluck(Restaurants.collection.find().fetch(), 'name');
    const formSchema = makeSchema(allRestaurants);
    const bridge = new SimpleSchema2Bridge(formSchema);
    const restaurantList = Restaurants.collection.find({ name: { $in: this.state.restaurants } });
    return (
        <Container id="listmenu-page">
          <Header as="h2" textAlign="center">Menu</Header>
          <AutoForm style={{ paddingBottom: '20px' }} schema={bridge} onSubmit={data => this.submit(data)} >
            <Segment>
              <MultiSelectField id='restaurants' name='restaurants' showInlineError={true} placeholder={'Restaurants'}/>
              <SubmitField id='submit' value='Submit'/>
            </Segment>
          </AutoForm>
          <Card.Group style={{ paddingTop: '10px', paddingBottom: '20px' }} centered>{restaurantList.map((restaurants, index) => <Menu
              key={index}
              restaurant={restaurants}
              menuItem={this.props.menuItem.filter(item => (item.restaurant === restaurants.name))}/>)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListRestaurants.propTypes = {
  restaurants: PropTypes.array.isRequired,
  menuItem: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Restaurants.userPublicationName);
  const subscription2 = Meteor.subscribe(MenuItems.userPublicationName);
  const subscription3 = Meteor.subscribe(Favorites.userPublicationName);
  return {
    menuItem: MenuItems.collection.find({}).fetch(),
    restaurants: Restaurants.collection.find({}).fetch(),
    ready: subscription.ready() && subscription2.ready() && subscription3.ready(),
  };
})(ListRestaurants);
