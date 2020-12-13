import React from 'react';
import { Card, Container, Image, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, NavLink } from 'react-router-dom';

class Featured extends React.Component {
  render() {
    const FeaturedInfo = this.props.featured;
    return (
        <Container>
          <div className="featured-cards">
            <Card fluid>
              <Image src={FeaturedInfo.image} wrapped ui={false}/>
              <Card.Content>
                <Card.Header>{FeaturedInfo.name}</Card.Header>
                <Card.Description>
                  {FeaturedInfo.description}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button as={NavLink} activeClassName="active" exact to="/vendor">Get it at {FeaturedInfo.place}</Button>
              </Card.Content>
            </Card>
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
