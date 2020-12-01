import React from 'react';
import { Card, Image, List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import MenuItem from './MenuItem';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Menu extends React.Component {
  render() {
    const RestaurantInfo = this.props.restaurant;
    return (
        <Card>
          <Card.Content>
            <Image
                floated='right'
                size='mini'
                src={RestaurantInfo.image}
            />
            <Card.Header>{RestaurantInfo.name}</Card.Header>
            <Card.Meta>Menu</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <List>{this.props.menuItem.map((menu, index) => <MenuItem key={index} menuItem={menu}/>)}</List>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Menu.propTypes = {
  restaurant: PropTypes.object.isRequired,
  menuItem: PropTypes.array.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Menu);
