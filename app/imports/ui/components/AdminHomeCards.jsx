import React from 'react';
import { Image, Card, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** A simple static component to render some text for the admin home page. */
class AdminHomeCards extends React.Component {
  render() {

    return (
        <div className="landing-cards">
          <Container>
            <Card.Group centered>
              <Card as={NavLink} activeClassName="active" exact to="/vendor" id="admin-card-one">
                <Image src='../images/cc-adminhome-accounts.png' alt='adminhome-accounts-img' wrapped ui={false}/>
                <Card.Content>
                  <Card.Header>Manage accounts</Card.Header>
                  <Card.Description>
                    Add more vendors to the site.
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card as={NavLink} activeClassName="active" exact to="/adminfav" id="admin-card-two">
                <Image src='../images/cc-adminhome-tools.png' alt='adminhome-tools-img' wrapped ui={false}/>
                <Card.Content>
                  <Card.Header>Tools at your disposal</Card.Header>
                  <Card.Description>
                    As the admin of the site you have elevated privileges.
                  </Card.Description>
                </Card.Content>
              </Card>
            </Card.Group>
          </Container>
        </div>
    );
  }
}

export default AdminHomeCards;
