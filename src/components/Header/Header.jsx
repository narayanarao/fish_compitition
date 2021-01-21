import React,{useContext} from 'react';
import './Header.module.css';
import Aux from '../../hoc/Auxlary';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {UserContext} from '../../context/UserContext';

const Header = () => {
    const {user} = useContext(UserContext);
    console.log(user.loggedIn);
    if(user.role === 'USER'){
        return (
            <Aux>
            <div className={classes.header}> 
            <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <NavLink className="nav-link"  to="/home" style={{ color:'white',fontWeight: 'bold'}}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"  to="/allranks" style={{ color:'white',fontWeight: 'bold'}}>All Ranks</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"   to="/contact" style={{ color:'white',fontWeight: 'bold'}}>Contact</NavLink>
                    </li>
                    <li className="nav-item">
                    {user.loggedIn ?  <NavLink href="#" className="nav-link" to="/addcatch" style={{ color:'white',fontWeight: 'bold'}}>Add Catch</NavLink>: ''}
                    </li> 
                    <li className="nav-item">
                     {user.loggedIn ? <NavLink href="#" className="nav-link" to="/logout" style={{ color:'white',fontWeight: 'bold'}}> Logout</NavLink> : <NavLink href="#" className="nav-link" to="/" style={{ color:'white',fontWeight: 'bold'}}> Login</NavLink>}   
                    </li>   
                </ul>
               
            </div>
        </Aux>
        )
    }else if(user.role === 'ADMIN'){
        return (   <Aux>
        <div className={classes.header}> 
        <ul className="nav justify-content-center">
                <li className="nav-item">
                    <NavLink className="nav-link"  to="/home" style={{ color:'white',fontWeight: 'bold'}}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link"  to="/allusers" style={{ color:'white',fontWeight: 'bold'}}>All Users</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link"   to="/" style={{ color:'white',fontWeight: 'bold'}}>Contact</NavLink>
                </li>
                <li className="nav-item">
                {user.loggedIn ? <NavLink href="#" className="nav-link" to="/allranks" style={{ color:'white',fontWeight: 'bold'}}> All Ranks</NavLink>:'' }
                </li> 
                <li className="nav-item">
                 {user.loggedIn ? <NavLink href="#" className="nav-link" to="/addpoints" style={{ color:'white',fontWeight: 'bold'}}> Add Points</NavLink> : ''}   
                </li> 
                <li className="nav-item">
                     {user.loggedIn ? <NavLink href="#" className="nav-link" to="/logout" style={{ color:'white',fontWeight: 'bold'}}> Logout</NavLink> : <NavLink href="#" className="nav-link" to="/" style={{ color:'white',fontWeight: 'bold'}}> Login</NavLink>}   
                </li>     
            </ul>
        </div>
    </Aux>)
    }
      else{
        return (
        <Aux>
        <div className={classes.header}> 
        <ul className="nav justify-content-center">
                <li className="nav-item">
                    <NavLink className="nav-link"  to="/home" style={{ color:'white',fontWeight: 'bold'}}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link"  to="/" style={{ color:'white',fontWeight: 'bold'}}>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link"   to="/contact" style={{ color:'white',fontWeight: 'bold'}}>Contact</NavLink>
                </li>
                <li className="nav-item">
                {user.loggedIn ?  '': <NavLink href="#" className="nav-link" to="/newaccount" style={{ color:'white',fontWeight: 'bold'}}> Sign Up</NavLink>}
                </li> 
                <li className="nav-item">
                 {user.loggedIn ? <NavLink href="#" className="nav-link" to="/logout" style={{ color:'white',fontWeight: 'bold'}}> Logout</NavLink> : <NavLink href="#" className="nav-link" to="/" style={{ color:'white',fontWeight: 'bold'}}> Login</NavLink>}   
                </li>   
            </ul>
           
        </div>
    </Aux>
        )
    }
   
}

export default Header;