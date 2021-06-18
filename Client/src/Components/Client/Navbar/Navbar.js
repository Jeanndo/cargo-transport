import React,{useState,useEffect} from "react";
import { AppBar, Avatar, Typography,Toolbar,Button } from "@material-ui/core";
import useStyles from "./styles";
import Cargo from "../../../Assets/newlogo.png";
import {Link,useHistory,useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import decode from 'jwt-decode';


const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const Location =useLocation();

  const[user,setUser]= useState(JSON.parse(localStorage.getItem('profile')));

   console.log(user?.result?.role);

   const Logout =()=>{

   dispatch({type:'LOGOUT'});
   history.push('/');
   setUser(null);
   }
  useEffect(()=>{
    const token = user?.token;
    //JWT
   if(token){
     const decodedToken = decode(token);
     
     if(decodedToken.exp * 1000 < new Date().getTime())Logout();
   }
    setUser(JSON.parse(localStorage.getItem('profile'))) 
  },[Location])

    const handlePrint = ()=>{
      history.push('/print');
    }
  return (
    <>
       
     <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          className={classes.heading}
          variant="h6"
          align="center"
        >
         Cargo Transport
        </Typography>
        <img className={classes.image} src={Cargo} alt="icon" height="60" />
      </div>

      <Toolbar className={classes.toolbar}>
        {user?(
          <div className={classes.profile}>
         <Avatar className={classes.purple} alt={user.result.name}src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
         <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
          <Button variant="contained" className={classes.logout} color="secondary"onClick={Logout}>Logout</Button>
         </div>
        ):( 
        <Button component={Link} to="/"  variant="contained"color="primary">Sign In</Button>
        )}
         
      </Toolbar>
    </AppBar>
    </>
  );
};
export default NavBar;