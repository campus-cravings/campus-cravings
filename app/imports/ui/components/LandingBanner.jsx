import React from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class LandingBanner extends React.Component {
  render() {
    const gridStyle = { height: '500px' };
    return (
        <div className="landing-banner">
          <Grid container verticalAlign="top" textAlign="center" style={gridStyle}>
            <Grid.Row>
              <Grid.Column>
                <Image centered src="../images/cc-logo-big.png" alt="logo-img"/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Header as="h1" inverted>
                  For all things food related at UH Manoa.
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}

export default LandingBanner;
