import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { Roles } from 'meteor/alanning:roles';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import ListRestaurants from '../pages/ListRestaurants';
import ListMenu from '../pages/ListMenu';
import ListStuffAdmin from '../pages/ListStuffAdmin';
import AddRestaurants from '../pages/AddRestaurants';
import NotFound from '../pages/NotFound';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Signout from '../pages/Signout';
import Profile from '../pages/Profile';
import UserHome from '../pages/UserHome';
import AdminHome from '../pages/AdminHome';
import VendorHome from '../pages/VendorHome';
import ListFavorites from '../pages/ListFavorites';
import EditRestaurants from '../pages/EditRestaurants';
import TodaysTopPicks from '../pages/TodaysTopPicks';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/signin" component={Signin}/>
              <Route path="/signup" component={Signup}/>
              <ProtectedRoute path="/profile" component={Profile}/>
              <ProtectedRoute path="/todaystoppicks" component={TodaysTopPicks}/>
              <ProtectedRoute path="/vendor" component={ListRestaurants}/>
              <ProtectedRoute path="/menu" component={ListMenu}/>
              <ProtectedRoute path="/fav" component={ListFavorites}/>
              <VendorProtectedRoute path="/add" component={AddRestaurants}/>
              <ProtectedRoute path="/userhome" component={UserHome}/>
              <VendorProtectedRoute path="/vendorhome" component={VendorHome}/>
              <VendorProtectedRoute path="/edit/:_id" component={EditRestaurants}/>
              <AdminProtectedRoute path="/admin" component={ListStuffAdmin}/>
              <AdminProtectedRoute path="/adminhome" component={AdminHome}/>
              <ProtectedRoute path="/signout" component={Signout}/>
              <Route component={NotFound}/>
            </Switch>
            <Footer/>
          </div>
        </Router>
    );
  }
}

/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      return isLogged ?
          (<Component {...props} />) :
          (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
      );
    }}
  />
);

/**
 * AdminProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
          return (isLogged && isAdmin) ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
              );
        }}
    />
);

const VendorProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          const isVendor = Roles.userIsInRole(Meteor.userId(), 'vendor');
          return (isLogged && isVendor) ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
              );
        }}
    />
);

/** Require a component and location to be passed to each ProtectedRoute. */
ProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

/** Require a component and location to be passed to each AdminProtectedRoute. */
AdminProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

VendorProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

export default App;
