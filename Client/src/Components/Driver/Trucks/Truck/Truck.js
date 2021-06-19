import React,{useState}from "react";
import TableCell from '@material-ui/core/TableCell';
import {useDispatch} from "react-redux";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {deleteTruck} from "../../../../redux/actions/trucks";
import {Button} from "@material-ui/core";
import moment from 'moment'

const Truck = ({truck,setCurrentId}) => {
  const dispatch = useDispatch();
  const[user,setUser]= useState(JSON.parse(localStorage.getItem('profile')));
  return (
    <>
            <TableCell component="th" scope="row">
            {truck.company}
            </TableCell>
            <TableCell align="right">{truck.product}</TableCell>
            <TableCell align="right">{truck.quantity}</TableCell>
            <TableCell align="right">{truck.source}</TableCell>
            <TableCell align="right">{truck.destination}</TableCell>
            <TableCell align="right"> {moment(truck.createdAt).fromNow()}</TableCell>
            <TableCell align="right">
            {(user?.result?.role==="driver"||user?.result?.role==="DRIVER")&&(
             <Button size="small">
              <EditIcon 
             style={{cursor:'pointer',color:'rgba(0, 0, 255, 0.541)'}}
             onClick={()=>setCurrentId(truck._id)}
             />
             </Button>
              )} 
             </TableCell>
            <TableCell align="right">
            {(user?.result?.role==="driver"||user?.result?.role==="DRIVER")&&(
               <Button size="small">
                <DeleteIcon  style={{cursor:'pointer',color:'rgba(0, 0, 255, 0.541)'}}
                onClick={()=>dispatch(deleteTruck(truck._id))}/>
                </Button>
            )}        
              </TableCell>
  
  </>
  );
};
export default Truck;
