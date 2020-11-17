import React from 'react';
import LandingBanner from '../components/LandingBanner';
import LandingCards from '../components/LandingCards';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div>
          <LandingBanner/>
          <LandingCards/>
        </div>
    );
  }
}

export default Landing;
