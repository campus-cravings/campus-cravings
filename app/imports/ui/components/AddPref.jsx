import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment } from 'semantic-ui-react';
import { AutoForm, ErrorField, SubmitField, SelectField /* , HiddenField */ } from 'uniforms-semantic';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import PropTypes from 'prop-types';
import { Prefs } from '../../api/pref/Prefs';

const formSchema = new SimpleSchema({
  pref: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);
/* const bridge = new SimpleSchema2Bridge(Prefs.schema); */

const preferences = [
  {
    label: 'Vegan',
    value: 'vegan',
  },
  {
    label: 'Indian',
    value: 'indian',
  },
  {
    label: 'French',
    value: 'french',
  },
  {
    label: 'Korean',
    value: 'korean',
  },
  {
    label: 'Hawaiian',
    value: 'hawaiian',
  },
  {
    label: 'Chinese',
    value: 'chinese',
  },
  {
    label: 'Entree',
    value: 'entree',
  },
  {
    label: 'Side',
    value: 'side',
  },
  {
    label: 'Drink',
    value: 'drink',
  },
];

/** Renders the Page for adding a document. */
class AddPref extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { pref } = data;
    const owner = Meteor.user().username;
    Prefs.collection.insert({ pref, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Pref added successfully', 'success');
          formRef.reset();
        }
      });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
        <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
          <Segment>
            <SelectField name='pref' label='Preferences' options={preferences} id="add-pref-dropdown"/>
            <ErrorField name="pref"
                         errorMessage="You have to provide at least one preference!"/>
            <SubmitField value='Submit' id="add-pref-submit"/>
              {/* <HiddenField name='owner' value={this.props.owner}/> */}
          </Segment>
        </AutoForm>
    );
  }
}

AddPref.propTypes = {
  owner: PropTypes.string.isRequired,
};

export default AddPref;
