import React from 'react';
import { Icon, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Prefs } from '../../api/pref/Prefs';

class Pref extends React.Component {
  handleDeleteClick = () => {
    const findCollection = Prefs.collection.find({ pref: this.props.pref.pref }).fetch();
    // console.log(findCollection);
    const myId = findCollection[0]._id;
    Prefs.collection.remove(myId);
    console.log('removed preference');
  }

  render() {
    return (
        <Label>
          {this.props.pref.pref}

          <Icon name='delete' link onClick={ () => this.handleDeleteClick()}/>
        </Label>
    );
  }
}

/** Require a document to be passed to this component. */
Pref.propTypes = {
  key: PropTypes.string.isRequired,
  pref: PropTypes.object.isRequired,
  owner: PropTypes.string.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Pref);
