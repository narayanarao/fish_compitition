import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import classes from '../Newaccount/NewAccount.module.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import Aux from '../../hoc/Auxlary';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import SaveIcon from '@material-ui/icons/Save';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
      },
    },
  }));
const btnStyle = { 
    color: 'white',
    background: 'seagreen'
};

const NewAccount = () => {
    const useClasses = useStyles();
    const [hasError, setHasError] = useState(false);
    const [isMailExisted, setIsMailExisted] = useState(false);
    const [open, setOpen] = React.useState(false);
    const history = useHistory();
    const [formData,setFormData] = useState({
      username:"",
      password:"",
      email:"",
      telephone:"",
      civilid:"",
      roles:["USER"]
    });
    const handleChange = (e) =>{
      setFormData({
        ...formData,
        [e.target.name] : e.target.value.trim()
      })
   }
   const handleClose = () => {
    setOpen(false);
  };
  const handleYes = () => {
    history.push('/');
  }
   const handleSubmit = () => {
     console.log(formData);
     const headers = { 
      "Content-type": "application/json"
      };
      axios.post('http://localhost:8082/api/signup',formData,headers).then(response =>{
        console.log(response.data.message);
        if(response.data.status === 201){
          setOpen(true);
        }
      }).catch(error => {
         console.log(error);
         if(error.response.data.status === 600){
          setIsMailExisted(true);
         }else{
          setHasError(true);
         }
         console.log(error.response.data); // you can get the response like this
         console.log(error.response.status); // status code of the request
      })  
   }
    return (
        <Aux>
          <div style={{width:500,paddingTop:50,marginLeft:400}}>{hasError ? <Alert severity="error" >Registration failed</Alert> :''}</div>
          <div style={{width:500,paddingTop:50,marginLeft:400,}}>{isMailExisted ? <Alert severity="error" >Email is already registered</Alert> :''}</div>
          <div className={classes.newaccountbox}>
          <form className={useClasses.root} noValidate autoComplete="off">
              <TextField id="standard-basic" label="Name" name="username" onChange={handleChange}/>
              <TextField id="standard-basic" label="Password" name="password" type="password" onChange={handleChange}/>
              <TextField id="standard-basic" label="Email" name="email" onChange={handleChange}/>
              <TextField id="standard-basic" label="Contact" name="telephone" onChange={handleChange}/>
              <TextField id="standard-basic" label="Civil Id" name="civilid" onChange={handleChange}/>
              <Button variant="contained" style={btnStyle} size="small" startIcon={<SaveIcon />} onClick={handleSubmit}>Save</Button>
          </form>    
          </div>
          <div>
              <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Your account has been created successfully,Click Yes to procedd to login
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleYes} color="primary" autoFocus>
                  Yes
                </Button>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </Aux>
    )
}
 export default NewAccount;