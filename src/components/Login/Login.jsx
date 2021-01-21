import React, { useState,useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classes from '../Login/Login.module.css';
import {Link} from 'react-router-dom';
import Aux from '../../hoc/Auxlary';
import Alert from '@material-ui/lab/Alert';
import {setUserSession} from '../../utils/Common';
import { UserContext } from '../../context/UserContext';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
      },
    },
  }));

  const Login = (props) => {
    
    const user = useContext(UserContext);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isLogin,setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false);
    const useClasses = useStyles();
    const btnStyle = { 
      color: 'white',
      background: 'seagreen'
  };
      const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault()
        console.log(email,password)
        fetch('http://localhost:8082/api/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password }),
         }).then((response) => response.json())
            .then((data) =>{
             console.log(data)
             if(data.status === 200){
              setUserSession(data.token,data.id);
              setLoading(false);
              if(data.role === 'ADMIN'){
                alert("Admin");
               props.history.push('/dashboard');
              }else{
                alert("user");
               props.history.push('/userhome');
              }
              user.setUser({
                name:'',
                id:data.id,
                role:data.role,
                loggedIn:true
              })
             }
             if(data.status === 401){
               setIsLogin(false);
               setLoading(false);
             }
          }) 
         .catch((error) =>{
           console.log(error);
           alert("Unable to login right now");
           setLoading(false);
         });
      }
      return (
         <Aux>
         <div style={{width:500,paddingTop:50,marginLeft:400}}>{!isLogin ? <Alert severity="error" >Invalid Credentials</Alert> :''}</div>  
         <div className={classes.loginbox}>
            <form className={useClasses.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField id="standard-basic" label="Email" onChange={e => setEmail(e.target.value)}/>
                <TextField id="standard-basic" label="Password" type="password" onChange={e => setPassword(e.target.value)}/>       
                <Button variant="contained" type="submit" disabled={loading} style={btnStyle}>{loading ? 'Loading...' : 'Login'}</Button>
        </form>
        New Account ?<Link href="#" to="/newaccount">Create Here</Link>
        <Link href="#" to="/" style={{ marginLeft: 80 }}>Forgot Password</Link>
      </div> 
      </Aux>
      )
  }
  export default Login;