
import './App.css';
import Layout from './containers/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import NewAccount from './components/Newaccount/NewAccount';
import Dashboard from './components/Dashboard/Dashboard';
import Logout from './components/Logout/Logout';
import UserHome from './components/Userhome/UserHome';
import PrivateRoute from './security/PrivateRoute/PrivateRoute';
import {UserContext} from './context/UserContext';
import {useContext} from 'react';
import Unauthorized from './security/Unauthorized/Unauthorized';
import Home from './containers/Home/Home';
import Contact from './containers/Contact/Contact';
import AddCatch from './components/Catch/AddCatch';
import AllRanks from './components/Allranks/AllRanks';
import AddPoints from './components/AddPoints/AddPoints';
function App() {
  const {user} = useContext(UserContext);
  console.log(user.role);
  
  return (

    <div>
       <Layout>

         <Switch>
         <Route exact path="/" component={Login}></Route>
         <Route exact path="/contact" component={Contact}></Route>
         <Route exact path="/addcatch" component={AddCatch}></Route>
         <Route exact path="/allranks" component={AllRanks}></Route>
         <Route exact path="/addpoints" component={AddPoints}></Route>
         <Route exact path="/home" component={Home}></Route>
         <Route exact path="/logout" component={Logout}></Route>
         <Route exact path="/newaccount" component={NewAccount}></Route>
         <Route  path="/unauthorized" component={Unauthorized}></Route>
         <PrivateRoute exact path="/userhome" component={UserHome}></PrivateRoute>
         <PrivateRoute exact path="/dashboard" component={Dashboard}></PrivateRoute>
         </Switch>
       </Layout>
    </div>
  );
}

export default App;
