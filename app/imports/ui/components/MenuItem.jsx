import { Meteor } from 'meteor/meteor';
import React from 'react';
import { List, Icon, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import swal from 'sweetalert';
import { Favorites } from '../../api/favorite/Favorite';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class MenuItem extends React.Component {
  constructor() {
    super();

    this.state = {
      fav: false,
    };
  }

  defaultState() {
    if (Favorites.collection.find({ food: this.props.menuItem.name }).count() === 1) {
      this.setState({ fav: true });
    } else {
      this.setState({ fav: false });
    }
  }

  handleClick(name) {
    if (Favorites.collection.find({ food: name }).count() === 0) {
      const currentUser = Meteor.user();
      const data = { food: name, owner: currentUser.username };
      Favorites.collection.insert(data,
          (error) => {
            if (error) {
              swal('Error', error.message, 'error');
            } else {
              swal('Success', 'Favorited this Menu Item', 'success');
            }
          });
      this.setState({ fav: true });
    } else {
      const find = Favorites.collection.findOne({ food: name });
      Favorites.collection.remove({ _id: find._id },
          (error) => {
            if (error) {
              swal('Error', error.message, 'error');
            } else {
              swal('Success', 'Unfavorited this Menu Item', 'error');
            }
          });
      this.setState({ fav: false });
    }
  }

  render() {
    const color = this.state.fav ? 'yellow' : 'grey';
    return (
      <List.Item>
        <Button circular basic color={color} icon='star' onClick={() => this.handleClick(this.props.menuItem.name)} />
        {this.props.menuItem.name}
      </List.Item>
    );
  }
}

/** Require a document to be passed to this component. */
MenuItem.propTypes = {
  menuItem: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(MenuItem);
