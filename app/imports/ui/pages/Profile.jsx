import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Label, Icon, Form, Divider } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Stuffs } from '../../api/stuff/Stuff';

const prefs = [
  { text: 'Option 1', value: 1 },
  { text: 'Option 2', value: 2 },
  { text: 'Option 3', value: 3 },
];

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
          </Label.Group>
          <Divider horizontal>
            <Header as='h3'>
              <Icon name='circle add' />
              Add Preferences
            </Header>
          </Divider>
          <Form>
            <Form.Select
              placeholder='Select Here...'
              fluid
              multiple
              search
              selection
              options={prefs}
            />
            <Form.Button>Add</Form.Button>
          </Form>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
Profile.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Stuffs.userPublicationName);
  return {
    stuffs: Stuffs.collection.find({}).fetch(),
    ready: subscription.ready(),
  };
})(Profile);
