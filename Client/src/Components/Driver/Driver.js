import React,{useState,useEffect} from 'react';
import Form from '../Form/Form';
import Trucks from './Trucks/Trucks';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from "react-redux";
import {getTrucks} from '../../redux/actions/trucks';
import SideBar from'./SideBar';
import {useHistory} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
  
    },
  }));

const Admin = ()=>{

  const classes = useStyles();
  const [currentId,setCurrentId]= useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(()=>{
  dispatch(getTrucks());
  },[dispatch]);

    return (
   <div className={`${classes.root} adminContainer`}>
  
    <Grid container spacing={3}>
      <Grid item xs={12}>
      <SideBar/>
      </Grid>
      <Grid item xs={12} >
        <Paper className={classes.paper}>
          <Form currentId={currentId} setCurrentId={setCurrentId}/>
          <Trucks setCurrentId={setCurrentId}/>
        </Paper>
      </Grid>
    </Grid>
   </div>
    )
}
export default Admin;

