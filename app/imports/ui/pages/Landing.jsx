import React from 'react';
import { Redirect } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import LandingBanner from '../components/LandingBanner';
import LandingCards from '../components/LandingCards';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div>
          {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              <Redirect to='/adminhome'/>
          ) : ''}
          {Roles.userIsInRole(Meteor.userId(), 'vendor') ? (
              <Redirect to='/vendorhome'/>
          ) : ''}
          {(Meteor.userId() !== null) && !Roles.userIsInRole(Meteor.userId(), 'admin') && !Roles.userIsInRole(Meteor.userId(), 'vendor') ? (
              <Redirect to='/userhome'/>
          ) : ''}
          <LandingBanner id='landing-page'/>
          <LandingCards/>
        </div>
    );
  }
}

export default Landing;
