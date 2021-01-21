 import React from 'react';
 import {Route,Redirect} from 'react-router-dom';
 import {getToken} from '../../utils/Common';
// const ProtectedRoute = (props) => {

//     const Component = props.component;
//     const isAuthenticated = getToken();
    
//     return isAuthenticated ? (
//         <Component />
//     ) : (
//         <Redirect to={{ pathname: '/' }} />
//     );

// }
// export default ProtectedRoute;
// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) => getToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
      />
    )
  }
   
  export default PrivateRoute;