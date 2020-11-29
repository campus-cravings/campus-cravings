import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Favorite extends React.Component {
  render() {
    const RestaurantInfo = this.props.restaurant;
    const menuItemInfo = this.props.menuItem;
    return (
        <Card>
          <Card.Content>
            <Image
                floated='right'
                size='mini'
                src={RestaurantInfo.image}
            />
            <Card.Header>{menuItemInfo.name}</Card.Header>
            <Card.Meta>{RestaurantInfo.name}</Card.Meta>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Favorite.propTypes = {
  restaurant: PropTypes.object.isRequired,
  menuItem: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Favorite);
