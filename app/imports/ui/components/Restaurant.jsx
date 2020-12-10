import React from 'react';
import { Accordion, Card, Header, Icon, Image, List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { NavLink, withRouter, Link } from 'react-router-dom';
import MenuItem from './MenuItem';

class Restaurant extends React.Component {
  state = { activeIndex: -1 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  }

  render() {
    const RestaurantInfo = this.props.restaurant;
    const { activeIndex } = this.state;
    return (
        <Card>
          <Image large src={RestaurantInfo.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{RestaurantInfo.name}</Card.Header>
            <Card.Meta>{RestaurantInfo.address}</Card.Meta>
            <Card.Meta>{RestaurantInfo.serviceDays}</Card.Meta>
            <Card.Meta>{RestaurantInfo.serviceHours}</Card.Meta>
            <Card.Description>
              <Accordion>
                <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                >
                  <Icon name='dropdown' />
                  Click to see description
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  {RestaurantInfo.description}
                </Accordion.Content>
              </Accordion>
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
