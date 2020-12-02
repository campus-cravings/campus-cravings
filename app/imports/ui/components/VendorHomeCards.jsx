import React from 'react';
import { Image, Card, Container } from 'semantic-ui-react';

/** A simple static component to render some text for the vendor home page. */
class VendorHomeCards extends React.Component {
  render() {

    return (
        <div className="landing-cards">
          <Container>
            <Card.Group centered>
              <Card href='#'>
                <Image src='../images/cc-vendorhome-menu.png' alt='vendorhome-stars-img' wrapped ui={false}/>
                <Card.Content>
                  <Card.Header>Change it up</Card.Header>
                  <Card.Description>
                    Students might get bored of the same old menu. Modify or add to your existing menu.
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card href='#'>
                <Image src='../images/cc-vendorhome-stars.png' alt='vendorhome-stars-img' wrapped ui={false}/>
                <Card.Content>
                  <Card.Header>Dish of the day</Card.Header>
                  <Card.Description>
                    Have a new dish or drink? Include them here so students can see.
                  </Card.Description>
                </Card.Content>
              </Card>
            </Card.Group>
          </Container>
        </div>
    );
  }
}

export default VendorHomeCards;
