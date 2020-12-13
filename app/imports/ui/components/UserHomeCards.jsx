import React from 'react';
import { Image, Card, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** A simple static component to render some text for the user home page. */
class UserHomeCards extends React.Component {
  render() {

    return (
        <div className="landing-cards">
          <Container>
            <Card.Group centered>
              <Card as={NavLink} activeClassName="active" exact to="/fav">
                <Image src='../images/cc-userhome-cafe.png' alt='userhome-cafe-img' wrapped ui={false}/>
                <Card.Content>
                  <Card.Header>Smart Menu</Card.Header>
                  <Card.Description>
                    Get a customized menu of only foods you like.
                    Just set your preferences such as cuisine styles and
                    we&#39;ll adjust the list of available dishes according to your desires.
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card as={NavLink} activeClassName="active" exact to="/featuredpicks">
                <Image src='../images/cc-userhome-kebab.png' alt='userhome-kebab-img' wrapped ui={false}/>
                <Card.Content>
                  <Card.Header>Try Something New</Card.Header>
                  <Card.Description>
                    Have a taste of these recommendations by your favorite restaurants.
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card as={NavLink} activeClassName="active" exact to="/avail">
                <Image src='../images/cc-userhome-musubi.png' alt='userhome-musubi-img' wrapped ui={false}/>
                <Card.Content>
                  <Card.Header>Stop Wandering</Card.Header>
                  <Card.Description>
                    Check out open restaurants around campus in just one site.
                  </Card.Description>
                </Card.Content>
              </Card>
            </Card.Group>
          </Container>
        </div>
    );
  }
}

export default UserHomeCards;
