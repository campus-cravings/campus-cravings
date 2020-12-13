import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card, Divider } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Featureds } from '../../api/featured/Featured';
import Featured from '../components/Featured';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListFeatureds extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container id="listfeatureds-page">
          <Divider horizontal>
            <Header as='h2'>
              Featureds
            </Header>
          </Divider>
          <Card.Group centered>{this.props.featureds.map((featureds, index) => <Featured
              key={index}
              featured={featureds}/>)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListFeatureds.propTypes = {
  featureds: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Featureds.userPublicationName);
  return {
    featureds: Featureds.collection.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListFeatureds);
