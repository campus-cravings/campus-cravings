import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Label, Icon, Divider } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Pref from '../components/Pref';
import { Prefs } from '../../api/pref/Prefs';
import AddPref from '../components/AddPref';

/*
const testPrefs = [
  { text: 'Option 1', value: 1 },
  { text: 'Option 2', value: 2 },
  { text: 'Option 3', value: 3 },
];
*/

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Profile extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container id="profile-page">
          <Header as="h2" textAlign="center">My Profile</Header>
          <Divider horizontal>
            <Header as='h3'>
              <Icon name='food' />
              Current Preferences
            </Header>
          </Divider>
          <Label.Group fluid center size="large">
            {this.props.prefs.map((pref, index) => <Pref key={index} pref={pref} owner={this.props.prefs.owner}/>)}
            {/* Testing Preferences
            <Label>
              Vegan
              <Icon name='delete' />
            </Label>
            <Label>
              Gluten-Free
              <Icon name='delete' />
            </Label>
            <Label>
              Hawaiian
              <Icon name='delete' />
            </Label>
            */}
          </Label.Group>
          <Divider horizontal>
            <Header as='h3'>
              <Icon name='circle add' />
              Add Preferences
            </Header>
          </Divider>
          <AddPref owner={this.props.prefs.owner}/>
          {/* Testing Adding Preferences
          <Form>
            <Form.Select
              placeholder='Select Here...'
              fluid
              multiple
              search
              selection
              options={testPrefs}
            />
            <Form.Button>Add</Form.Button>
          </Form>
          */}
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
Profile.propTypes = {
  prefs: PropTypes.object.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Prefs.userPublicationName);
  return {
    prefs: Prefs.collection.find({}).fetch(),
    ready: subscription.ready(),
  };
})(Profile);
