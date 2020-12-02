import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the admin home page. */
class AdminHomeBanner extends React.Component {
  render() {
    const gridStyle = { height: '500px' };
    return (
        <div className="adminhome-banner">
          <Grid container verticalAlign="middle" textAlign="center" style={gridStyle}>
            <Grid.Row>
              <Grid.Column>
                <div className="welcome-text"><p>Hello there</p></div>
                <Header as="h1" inverted>
                  Manage your site
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}

export default AdminHomeBanner;
