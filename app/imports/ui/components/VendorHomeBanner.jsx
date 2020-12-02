import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the vendor home page. */
class VendorHomeBanner extends React.Component {
  render() {
    const gridStyle = { height: '500px' };
    return (
        <div className="vendorhome-banner">
          <Grid container verticalAlign="middle" textAlign="center" style={gridStyle}>
            <Grid.Row>
              <Grid.Column>
                <div className="welcome-text"><p>Greetings</p></div>
                <Header as="h1" inverted>
                  Promote your establishment
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}

export default VendorHomeBanner;
