import React from 'react';
import { Card, Image, List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import MenuItem from './MenuItem';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class SmartMenu extends React.Component {
  render() {
    const RestaurantInfo = this.props.restaurant;

    let preferred = [];

    // Might have to add a check owner
    if (this.props.prefs.find(element => element.pref === 'vegan')) {
      preferred = preferred.concat(this.props.menuItem.filter(prefer => prefer.vegan === true));
    }
    if (this.props.prefs.find(element => element.pref === 'indian')) {
      preferred = preferred.concat(this.props.menuItem.filter(prefer => prefer.ethnicity === 'Indian'));
    }
    if (this.props.prefs.find(element => element.pref === 'french')) {
      preferred = preferred.concat(this.props.menuItem.filter(prefer => prefer.ethnicity === 'French'));
    }
    if (this.props.prefs.find(element => element.pref === 'korean')) {
      preferred = preferred.concat(this.props.menuItem.filter(prefer => prefer.ethnicity === 'Korean'));
    }
    if (this.props.prefs.find(element => element.pref === 'hawaiian')) {
      preferred = preferred.concat(this.props.menuItem.filter(prefer => prefer.ethnicity === 'Hawaiian'));
    }
    if (this.props.prefs.find(element => element.pref === 'chinese')) {
      preferred = preferred.concat(this.props.menuItem.filter(prefer => prefer.ethnicity === 'Chinese'));
    }
    if (this.props.prefs.find(element => element.pref === 'entree')) {
      preferred = preferred.concat(this.props.menuItem.filter(prefer => prefer.type === 'entree'));
    }
    if (this.props.prefs.find(element => element.pref === 'side')) {
      preferred = preferred.concat(this.props.menuItem.filter(prefer => prefer.type === 'side'));
    }
    if (this.props.prefs.find(element => element.pref === 'drink')) {
      preferred = preferred.concat(this.props.menuItem.filter(prefer => prefer.type === 'drink'));
    }
    // Removes duplicates
    preferred = preferred.filter((c, index) => preferred.indexOf(c) === index);
    console.log(preferred);

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
            <List>{preferred.map((menu, index) => <MenuItem key={index} menuItem={menu}/>)}</List>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
SmartMenu.propTypes = {
  prefs: PropTypes.object.isRequired,
  restaurant: PropTypes.object.isRequired,
  menuItem: PropTypes.array.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(SmartMenu);
