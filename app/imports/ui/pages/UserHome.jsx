import React from 'react';
import UserHomeBanner from '../components/UserHomeBanner';
import UserHomeCards from '../components/UserHomeCards';

/** A simple static component to render some text for the landing page. */
class UserHome extends React.Component {
  render() {
    return (
        <div>
          <UserHomeBanner/>
          <UserHomeCards/>
        </div>
    );
  }
}

export default UserHome;
