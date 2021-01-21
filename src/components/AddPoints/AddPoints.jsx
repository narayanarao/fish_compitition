import  { React,useState } from 'react';
import Aux from '../../hoc/Auxlary';
import classes from '../AddPoints/AddPoints.module.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    
    formControl: {
      margin: theme.spacing(1),
      minWidth: 350,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const btnStyle = { 
    color: 'white',
    background: 'seagreen',
    minWidth:'50%'
    
};
const AddPoints = () => {
    const classes1 = useStyles();
   

    useEffect(() => {
      
      return () => {
      }
    }, [])

    useEffect(() => {

      return () => {
      }
    }, [])

    return (
        <Aux>
            <div className={classes.addpoints}>
               <form>
                   <div>
                   <FormControl className={classes1.formControl}>
                            <InputLabel id="demo-simple-select-label">Fish Type</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes1.formControl}>
                            <InputLabel id="demo-simple-select-label">Length</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField id="standard-basic" label="Points" className={classes1.formControl}/>
                   </div>
                   <div className={classes.addbuttondiv}>
                     <Button variant="contained" type="submit"  style={btnStyle}>Add</Button>
                   </div>
               </form>
            </div>
        </Aux>
    )

}
export default AddPoints;