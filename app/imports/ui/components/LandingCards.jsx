import React from 'react';
import { Image, Card, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
class LandingCards extends React.Component {
  render() {

    return (
        <div className="landing-cards">
          <Container>
            <Card.Group centered>
              <Card as={NavLink} activeClassName="active" exact to="/featuredpicks">
                <Image src='../images/cc-landing-buffet.png' alt='landing-buffet-img' wrapped ui={false}/>
                <Card.Content>
                  <Card.Header>Top Picks</Card.Header>
                  <Card.Description>
                    Can&#39;t decide what to eat? Get recommendations from your favorite restaurants.
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card as={NavLink} activeClassName="active" exact to="/vendor">
                <Image src='../images/cc-landing-map.png' alt='landing-map-img' wrapped ui={false}/>
                <Card.Content>
                  <Card.Header>Currently Available</Card.Header>
                  <Card.Description>
                    There&#39;s a lot of restaurants around campus, but you might be looking for something specific.
                    Check if a dish you like is being served at the moment.
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card as={NavLink} activeClassName="active" exact to="/profile">
                <Image src='../images/cc-landing-crepe.png' alt='landing-crepe-img' wrapped ui={false}/>
                <Card.Content>
                  <Card.Header>Preferred Dishes</Card.Header>
                  <Card.Description>
                    Craving some local loco moco? Maybe Indian curry? Perhaps French crêpes? Choose your favorite cuisine styles.
                  </Card.Description>
                </Card.Content>
              </Card>
            </Card.Group>
          </Container>
        </div>
    );
  }
}

export default LandingCards;
