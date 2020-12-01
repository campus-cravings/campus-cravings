import React from 'react';
import { Card, Header, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { NavLink, withRouter, Link } from 'react-router-dom';

class Restaurant extends React.Component {
  render() {
    const RestaurantInfo = this.props.restaurant;
    return (
        <Card>
          <Image src={RestaurantInfo.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{RestaurantInfo.name}</Card.Header>
            <Card.Meta>{RestaurantInfo.address}</Card.Meta>
            <Card.Meta>{RestaurantInfo.serviceDays}</Card.Meta>
            <Card.Meta>{RestaurantInfo.serviceHours}</Card.Meta>
            <Card.Description>
              {RestaurantInfo.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Header as={NavLink} activeClassName="active" exact to="/menu" key='menu'>Menu</Header>
          </Card.Content>
          <Card.Content extra>
            <Link to={`/edit/${this.props.restaurant._id}`}>Edit</Link>
          </Card.Content>
        </Card>
    );
  }
}
// <List>{this.props.menuItem.map((menu, index) => <MenuItem key={index} menuItem={menu}/>)}</List>
/** Require a document to be passed to this component. */
Restaurant.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Restaurant);
