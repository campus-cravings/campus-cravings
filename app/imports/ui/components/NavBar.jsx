import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const menuStyle = { marginBottom: '10px' };
    return (
        <Menu style={menuStyle} attached="top" borderless inverted color='teal'>
          <Menu.Item as={NavLink} activeClassName="" exact to="/">
            <Image className="campus-cravings-logo" src="../images/cc-logo-small.png"/>
          </Menu.Item>
          {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              <Menu.Item id='navbar-admin-home' as={NavLink} activeClassName="active" exact to="/adminhome" key='adminhome'>Home</Menu.Item>
          ) : ''}
          {Roles.userIsInRole(Meteor.userId(), 'vendor') ? (
              <Menu.Item id='navbar-vendor-home' as={NavLink} activeClassName="active" exact to="/vendorhome" key='vendorhome'>Home</Menu.Item>
          ) : ''}
          {this.props.currentUser && !Roles.userIsInRole(Meteor.userId(), 'vendor') && !Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              <Menu.Item id='navbar-user-home' as={NavLink} activeClassName="active" exact to="/userhome" key='userhome'>Home</Menu.Item>
          ) : ''}
          {this.props.currentUser ? (
              <Menu.Item>
                <Dropdown item text='Food'>
                  <Dropdown.Menu>
                    <Dropdown.Item id="navbar-favorites" as={NavLink} activeClassName="active" exact to="/fav" key='fav'>Favorites & Smart Menu</Dropdown.Item>
                    <Dropdown.Item id="navbar-featureds" as={NavLink} activeClassName="active" exact to="/featuredpicks" key='featuredpicks'>Featureds</Dropdown.Item>
                    <Dropdown.Item id="navbar-list-menu" as={NavLink} activeClassName="active" exact to="/menu" key='menu'>Menus</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown item text='Restaurants'>
                  <Dropdown.Menu>
                    <Dropdown.Item id="navbar-available-restaurants" as={NavLink} activeClassName="active" exact to="/avail" key='avail'>What&#39;s Open</Dropdown.Item>
                    <Dropdown.Item id="navbar-list-restaurants" as={NavLink} activeClassName="active" exact to="/vendor" key='vendor'>All Restaurants</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                {Roles.userIsInRole(Meteor.userId(), 'vendor') ? (
                      <Dropdown item text='Add'>
                        <Dropdown.Menu>
                          <Dropdown.Item id="navbar-add-restaurant" as={NavLink} activeClassName="active" exact to="/add"
                                         key='add'>Add Restaurants</Dropdown.Item>
                          <Dropdown.Item id="navbar-add-featured" as={NavLink} activeClassName="active" exact
                                         to="/addfeatured" key='addfeatured'>Add Featureds</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                ) : ''}
              </Menu.Item>
          ) : ''}
          {/* {Roles.userIsInRole(Meteor.userId(), 'admin') ? ( */}
          {/*    <Menu.Item as={NavLink} activeClassName="active" exact to="/admin" key='admin'>Admin</Menu.Item> */}
          {/*  ) : ''} */}
          {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              <Menu.Item id='navbar-admin-fav' as={NavLink} activeClassName="active" exact to="/adminfav" key='adminfav'>Admin</Menu.Item>
          ) : ''}
          <Menu.Item position="right">
            {this.props.currentUser === '' ? (
                <Dropdown id="login-dropdown" text="Login" pointing="top right" icon={'user'}>
                  <Dropdown.Menu>
                    <Dropdown.Item id="login-dropdown-sign-in" icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
                    <Dropdown.Item id="login-dropdown-sign-up" icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
                  </Dropdown.Menu>
                </Dropdown>
            ) : (
                <Dropdown id="navbar-current-user" text={this.props.currentUser} pointing="top right" icon={'user'}>
                  <Dropdown.Menu>
                    <Dropdown.Item id="navbar-profile" icon="user outline" text="My Profile" as={NavLink} exact to="/profile" />
                    <Dropdown.Item id="navbar-sign-out" icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
                  </Dropdown.Menu>
                </Dropdown>
            )}
          </Menu.Item>
        </Menu>
    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
