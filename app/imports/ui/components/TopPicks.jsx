import React from 'react';
import { Card, Container, Image, Icon } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class TopPicks extends React.Component {
  render() {

    return (
        <Container>
          <Card.Group itemsPerRow={1}>
            <Card fluid href='#'>
              <Image src='../images/cc-toppicks-peppermint.png' alt='toppicks-peppermint-img' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Peppermint Mocha</Card.Header>
                <Card.Description>
                  Our all-star festive Peppermint Mocha brightens the holidays: signature Espresso Roast combines with
                  steamed milk, sweet mocha sauce, peppermint-flavored syrup,
                  topped with whipped cream and dark chocolate curls.
                </Card.Description>
              </Card.Content>
            </Card>
            <Card fluid href='#'>
              <Image src='../images/cc-toppicks-locomoco.png' alt='toppicks-locomoco-img' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Loco Moco</Card.Header>
                <Card.Description>
                  Savory hamburger patties over rice, topped with brown gravy and 2 fresh fried eggs.
                </Card.Description>
              </Card.Content>
            </Card>
            <Card fluid href='#'>
              <Image src='cc-toppicks-orangechicken.png' alt='toppicks-orangechicken-img' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Orange Chicken</Card.Header>
                <Card.Description>
                  Our signature dish. Crispy chicken wok-tossed in a sweet and spicy orange sauce.
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Container>
    );
  }
}

export default TopPicks;
