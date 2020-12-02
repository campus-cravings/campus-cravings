import React from 'react';
import TopPicks from '../components/TopPicks';
import { Header } from 'semantic-ui-react';

/** A simple static component to render some text for the todays top picks page. */
class TodaysTopPicks extends React.Component {
  render() {
    return (
        <div>
          <Header as="h2" textAlign="center">Today&#39;s Top Picks</Header>
          <TopPicks/>
        </div>
    );
  }
}

export default TodaysTopPicks;
