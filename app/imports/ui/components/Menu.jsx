import React from 'react';
import { Card, Image, List, Accordion, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import MenuItem from './MenuItem';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Menu extends React.Component {
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
            <Accordion id="click-see-menu">
              <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={this.handleClick}
              >
                <Icon name='dropdown' />
                Click to see menu
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <List>{this.props.menuItem.map((menu, index) => <MenuItem key={index} menuItem={menu}/>)}</List>
              </Accordion.Content>
            </Accordion>
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
