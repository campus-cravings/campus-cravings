import React from 'react';
import { Card, Container, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Featured extends React.Component {
  render() {
    const FeaturedInfo = this.props.featured;
    return (
        <Container>
          <div className="featured-cards">
            <Card.Group itemsPerRow={1}>
            <Card fluid>
              <Image src={FeaturedInfo.image} wrapped ui={false}/>
              <Card.Content>
                <Card.Header>{FeaturedInfo.name}</Card.Header>
                <Card.Description>
                  {FeaturedInfo.description}
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
          </div>
        </Container>
    );
  }
}
// <List>{this.props.menuItem.map((menu, index) => <MenuItem key={index} menuItem={menu}/>)}</List>
/** Require a document to be passed to this component. */
Featured.propTypes = {
  featured: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Featured);
