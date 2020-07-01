import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthRoute = ({ component: RouteComponent, authenticated, ...rest }) => {

return (
  <Route
    {...rest}
    render={(routeProps) =>
      !authenticated ? (
				<Redirect to={`/login`} />
      ) : (
				<RouteComponent {...routeProps} />
      )
    }
  />)
};


const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(AuthRoute);
