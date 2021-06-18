import React,{useState} from 'react';
import {Avatar,Button,Paper,Grid,Typography,Container} from "@material-ui/core";
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './input';
import Icon from './Icon';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {signup,signin} from '../../redux/actions/auth';

const initialState = {firstName:'',lastName:'',role:'',phone:'',email:'',password:'',confirmPassword:''};
const Auth = () => {

    const classes = useStyles();
    const [showPassword,setShowPassword] = useState(false);
    const [isSignup,setisSignup]= useState(false);
    const [formData,setFormData] = useState(initialState);

    const dispatch = useDispatch();
    const history = useHistory();
    const handleShowPassword = ()=>setShowPassword((prevShowPassword)=>!prevShowPassword);

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData)
        if(isSignup){
            dispatch(signup(formData,history))
        }else{
            dispatch(signin(formData,history))
        }
   }

   const switchMode = ()=>{
      
    setisSignup((prevIsSignup)=>!prevIsSignup);
    setShowPassword(false);
   }

   const handleChange = (event)=>{
    setFormData({...formData,[event.target.name]:event.target.value});
   }
  

    return (
       <Container component="main"maxWidth="xs">
         <Paper className={classes.paper}elevation={3}>
             <Avatar className={classes.avatar}>
                 <LockOutlinedIcon/>
             </Avatar>
             <Typography variant="h5">{isSignup? 'Sign Up':'Sign In'}</Typography>
             <form className={classes.form} onSubmit={handleSubmit}>
             <Grid container spacing={3}>
               {
                   isSignup &&(
                       <>
                       <Input name="firstName"label="First Name" handleChange={handleChange} autoFocus half/>
                       <Input name="lastName"label="Last Name" handleChange={handleChange} half/>
                       <Input name="phone" label="Phone" handleChange={handleChange} type="number"/>
                       </>
                   )
               }
               <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
               <Input name="password" label={showPassword? 'text' : 'password'} handleChange={handleChange} type="password" handleShowPassword={handleShowPassword}/>
               {isSignup &&<Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password"/>}
             
             </Grid>
             <Button type="submit" variant="contained" color="primary" className={classes.submit} fullWidth>
                 {isSignup? 'Sign Up':'Sign In'}
             </Button>
            
             <Grid container justify="flex-end">
              <Grid item>
              <Button onClick={switchMode}>
                  {isSignup? "Already have an account? Sign In":"Don't have an account? Sign Up"}
              </Button>
              </Grid>
             </Grid>
             </form>
             </Paper>
       </Container>
    )
}

export default Auth;