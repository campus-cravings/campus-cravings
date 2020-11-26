import React from 'react';
import { Meteor } from 'meteor/meteor';
import { List, Icon } from 'semantic-ui-react';
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Favorites } from '../../api/favorite/Favorite';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class MenuItem extends React.Component {
  // handleClick(name, user) {
  //   const { food, owner } = { name, user };
  //   if (Favorites.collection.find({ food: name }).count() === 0) {
  //     Favorites.collection.insert({ food, owner },
  //         (error) => {
  //           if (error) {
  //             swal('Error', error.message, 'error');
  //           } else {
  //             swal('Success', 'Note added successfully', 'success');
  //           }
  //         });
  //   } else {
  //     Favorites.collection.remove({ food: name });
  //   }
  // }
  render() {
    return (
      <List.Item>
        <Icon name='star outline' onClick={() => this.handleClick()}/>
        {this.props.menuItem.name}
        {this.props.menuItem.available ? (<Icon name='check' color='green'/>) : (<Icon name='close' color='red'/>) }
        {this.props.menuItem.vegan ? (<Icon name='leaf' color='green'/>) : ''}
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
