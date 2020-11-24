import React from 'react';
import { Icon, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Pref extends React.Component {
  render() {
    return (
        <Label>
          {this.props.pref.pref}
          <Icon name='delete' />
        </Label>
    );
  }
}

/** Require a document to be passed to this component. */
Pref.propTypes = {
  pref: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Pref);
