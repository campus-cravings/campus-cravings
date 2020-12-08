import React from 'react';
import VendorHomeBanner from '../components/VendorHomeBanner';
import VendorHomeCards from '../components/VendorHomeCards';

/** A simple static component to render some text for the vendor home page. */
class VendorHome extends React.Component {
  render() {
    return (
        <div id='vendorhome-page'>
          <VendorHomeBanner/>
          <VendorHomeCards/>
        </div>
    );
  }
}

export default VendorHome;
