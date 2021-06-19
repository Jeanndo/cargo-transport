import React,{useState} from 'react';
import {Avatar,Button,Paper,Grid,Typography,Container} from "@material-ui/core";
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {signup} from '../../redux/actions/auth';

const initialState = {firstName:'',lastName:'',role:'',email:'',password:'',confirmPassword:''};
const Auth = () => {

    const classes = useStyles();
    const [showPassword,setShowPassword] = useState(false);
    const [formData,setFormData] = useState(initialState);

    const dispatch = useDispatch();
    const history = useHistory();
    const handleShowPassword = ()=>setShowPassword((prevShowPassword)=>!prevShowPassword);

    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(signup(formData,history))
       setFormData({firstName:'',lastName:'',role:'',email:'',password:'',confirmPassword:''})
   }

   const handleChange = (event)=>{
    setFormData({...formData,[event.target.name]:event.target.value});
   }
  

    return (
        <>
       <Container component="main"maxWidth="xs">
         <Paper className={classes.paper}elevation={3}>
             <Avatar className={classes.avatar}>
                 <LockOutlinedIcon/>
             </Avatar>
             <Typography variant="h6">Welcome To Cargo Transport</Typography>
             <hr style={{backgroundColor:"#000"}}/>
             <Typography variant="h5">Add Employee</Typography>
             <form className={classes.form} onSubmit={handleSubmit}>
             <Grid container spacing={3}>
              <Input name="firstName"label="First Name" handleChange={handleChange} autoFocus half/>
               <Input name="lastName"label="Last Name" handleChange={handleChange} half/>
               <Input name="role"label="Role" handleChange={handleChange}/>
               <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
               <Input name="password" label={showPassword? 'text' : 'password'} handleChange={handleChange} type="password" handleShowPassword={handleShowPassword}/>
               <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password"/>
             </Grid>
             <Button type="submit" variant="contained" color="primary" className={classes.submit} fullWidth>
                Add Employee
             </Button>
             </form>
             </Paper>
       </Container>
       </>
    )
}

export default Auth;

