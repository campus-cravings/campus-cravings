import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SubmitField, TextField, LongTextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Restaurants } from '../../api/restaurant/Restaurant';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  name: String,
  address: String,
  image: String,
  serviceDays: String,
  serviceHours: String,
  description: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class AddRestaurants extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { name, address, image, serviceDays, serviceHours, description } = data;
    const owner = Meteor.user().username;
    Restaurants.collection.insert({ name, address, image, serviceDays, serviceHours, description, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
        <Grid container centered id="add-restaurant-page">
          <Grid.Column>
            <Header as="h2" textAlign="center">Add Your Restaurant</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField id="restaurant-field-name" name='name'/>
                <TextField id="restaurant-field-address" name='address'/>
                <TextField id="restaurant-field-image" name='image'/>
                <TextField id="restaurant-field-days" name='serviceDays'/>
                <TextField id="restaurant-field-hours" name='serviceHours'/>
                <LongTextField id="restaurant-field-description" name='description'/>
                <SubmitField id="restaurant-field-submit" value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default AddRestaurants;
