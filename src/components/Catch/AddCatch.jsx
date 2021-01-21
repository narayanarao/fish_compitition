import React,{useEffect,useContext} from 'react';
import Aux from '../../hoc/Auxlary';
import classes from '../Catch/AddCatch.module.css';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';
import {getToken} from '../../utils/Common';
import { useState } from 'react';
import axios from 'axios'; 
import {UserContext} from '../../context/UserContext';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
      
        '& > *': {
          margin: theme.spacing(1),
          width: '80%',
        },
        
      },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
    },
    selectEmpty: {
      marginTop: theme.spacing(1),
    },
  }));
const AddCatch = () => {
   const {user} = useContext(UserContext);
   const [fishes,setFishes] = useState([]);
   const [id,setId] = useState("");
   const [length,setLength] = useState("");
   const [fileName,setFileName] = useState("");
   const [file,setFile] = useState("");
   const [openSuccess, setOpenSuccess] = React.useState(false);
   const [openError, setOpenError] = React.useState(false);
   const fileHandler = (e) => {
    setFileName(e.target.files[0]);
    setFile(e.target.files[0]);
    // let files = e.target.files;
    // let reader = new FileReader();
    // reader.readAsDataURL(files[0]);
    // reader.onload = (e) => {
    //    console.log(e.target.result);
    //    setFile(e.target.result);
    // }
     
    }
    const handleSuccessClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      document.getElementById("catchform").reset();
      setOpenSuccess(false);
    };
    const handleErrorClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
    
      setFileName('');
      setLength('');
      setId('');
      document.getElementById("catchform").reset();
    
      setOpenError(false);
    };
    const classes1 = useStyles();
    const btnStyle = { 
      color: 'white',
      background: 'seagreen',
      textTransform:'none',
      fontWeight:'bold'
    };
    useEffect(() => {
      console.log(getToken());
      
      fetch('http://localhost:8082/api/allfishes',
        {
          method: "GET",
          headers: new Headers({
            'Accept' : 'application/json',
            'Content-Type': "application/json",
            'Authorization': getToken() 
          })
        }
      )
        .then(res => res.json())
        .then(response => {
         console.log(response.status);
         if(response.status === 200){
          setFishes(response.allfishes);
          console.log(response.allfishes);
         }
         if(response.status === 602){
           alert("Token is expired");
         }
        })
        .catch(error => {
           console.log(error);
        })
    }, [])
    const handleSubmit = (evt) => {
     
      evt.preventDefault(); 
      //  const formData = {
      //    fishId:id,
      //    fishFileName:fileName,
      //    fishLength:length,
      //    fishImage:file,
         
      //  }
      // Create an object of formData 
      const formData = new FormData(); 
      formData.append("file",file); 
      formData.append("fishlength", length);
      formData.append("fishid",id);
      formData.append("userid",user.id);
       console.log(formData);
       const requestHeaderes = {
        'Authorization': getToken() 
       }
       axios.post("http://localhost:8082/api/addcatch1",formData,{
        headers: requestHeaderes
      }).then(response => {
           console.log(response);
           if(response.data === 201){
            setOpenSuccess(true);
           }
       }).catch(error =>{
           console.log(error.response);
           setOpenError(true);
       })

     }
    return (
        <Aux>
           <div className={classes.successbar}>
              <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleSuccessClose} style={{top:'-23em',width:'100%'}}>
                <Alert onClose={handleSuccessClose} severity="success">
                  Catch created successfully!
                </Alert>
              </Snackbar>
              <Snackbar open={openError} autoHideDuration={6000} onClose={handleErrorClose} style={{top:'-23em',width:'100%'}}>
                <Alert onClose={handleErrorClose} severity="error">
                   Failed to create catch
                </Alert>
              </Snackbar>
           </div>
           <div className={classes.catchbox}> 
           <form className={classes1.root} noValidate autoComplete="off" onSubmit={handleSubmit} encType="multipart/form-data" id="catchform">
           <FormControl className={classes1.formControl}>
                    <InputLabel htmlFor="age-native-simple">Fish Type</InputLabel>
                    <Select
                    native
                    onChange={e => setId(e.target.value)}
                    margin='dense'>
                      <option value=""></option>
                      {fishes.map((fish,index) => {
                      return <option value={fish.fishId} key={index}>{fish.fishName}</option>
                     })
                    }
                    </Select>
                </FormControl>
                <TextField id="standard-basic" label="Length" value={length} margin='dense' onChange={e => setLength(e.target.value)}/>
                <Button variant="contained"
                        component="label" 
                        margin="dense"
                        fullWidth
                        style={btnStyle}
                        startIcon={<CloudUploadIcon />}>
                      Upload Fish Image
                      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={fileHandler} hidden/>
                 </Button>
                 <Avatar src={fileName? URL.createObjectURL(fileName) : null} alt={fileName? fileName.name : null} className={classes.avthar}/>   
                 <Button variant="contained" type="submit" size="small" style={btnStyle} startIcon={<SaveIcon />}>
                  Save
                </Button>
                </form>
           </div>
        </Aux>
    )
}
export default AddCatch;