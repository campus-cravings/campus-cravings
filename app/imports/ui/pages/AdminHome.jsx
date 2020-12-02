import React from 'react';
import AdminHomeBanner from '../components/AdminHomeBanner';
import AdminHomeCards from '../components/AdminHomeCards';

/** A simple static component to render some text for the admin home page. */
class AdminHome extends React.Component {
  render() {
    return (
        <div>
          <AdminHomeBanner/>
          <AdminHomeCards/>
        </div>
    );
  }
}

export default AdminHome;
