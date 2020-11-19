import React from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the user home page. */
class LandingBanner extends React.Component {
  render() {
    const gridStyle = { height: '500px' };
    return (
        <div className="userhome-banner">
          <Grid container verticalAlign="middle" textAlign="center" style={gridStyle}>
            <Grid.Row>
              <Grid.Column>
                <div className="welcome-text"><p>Welcome Back</p></div>
                <Header as="h1" inverted>
                  Satisfy your cravings
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}

export default LandingBanner;
