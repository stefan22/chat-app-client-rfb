import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const AuthRoute = ({component: Component, authenticated, ...rest }) => {
<<<<<<< HEAD
	console.log(rest);
=======
	//console.log(rest);
>>>>>>> master
	return (
		<Route
			{...rest}
		
			render={ (props) => 
				authenticated === true 
<<<<<<< HEAD
				? <Redirect to={`/repositories/chatapp/`} />
=======
				? <Redirect to={`/`} />
>>>>>>> master
				: <Component {...props} />

			}
		/>
	);

};


const mapStateToProps = state => ({
	authenticated: state.user.authenticated
});


export default connect(mapStateToProps)(AuthRoute);