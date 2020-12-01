import React from 'react';
import { List, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class MenuItem extends React.Component {
  render() {
    return (
      <List.Item>
        <Icon name='star outline'/>
        {this.props.menuItem.name}
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
