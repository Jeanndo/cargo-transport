import React,{useState}from "react";
import TableCell from '@material-ui/core/TableCell';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Truck = ({truck,setCurrentId}) => {
  const[user,setUser]= useState(JSON.parse(localStorage.getItem('profile')));
  return (
    <>   
    {(user?.result?.phone===truck.Cargo_ID)&&(
            <>
            <TableCell component="th" scope="row">
             {truck.product}
            </TableCell>
            <TableCell align="right">{truck.quantity}</TableCell>
            <TableCell align="right"><LocationOnIcon  style={{color:'#00bb77'}}/>{truck.Location}</TableCell>
             </>
    )}
  </>
  );
};
export default Truck;
