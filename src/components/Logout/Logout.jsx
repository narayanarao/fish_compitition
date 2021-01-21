import {useContext } from 'react';
import {removeUserSession} from '../../utils/Common';
import { UserContext } from '../../context/UserContext';
const Logout = (props) => {
    const user = useContext(UserContext);
    removeUserSession();
   
    user.setUser({
        name:'',
        role:'',
        loggedIn:false
      })
    props.history.push('/');
    return null;
}
export default Logout;