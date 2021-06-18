import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Truck from "./Truck/Truck";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Trucks = ({ setCurrentId }) => {
  const classes = useStyles();
  const trucks = useSelector((state) => state.trucks);
  console.log(trucks.length);

  return (
    !trucks.length? <CircularProgress/>:(
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell><b>Company</b></TableCell>
            <TableCell align="right"><b>Product</b> </TableCell>
            <TableCell align="right"><b>Quantity</b></TableCell>
            <TableCell align="right"><b>Source</b></TableCell>
            <TableCell align="right"><b>Destination</b></TableCell>
            <TableCell align="right"><b>Time</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            trucks.map((truck,index)=>(
            <TableRow key={index}>
            <Truck truck={truck} setCurrentId={setCurrentId} />
           </TableRow>
            ))
          }
          </TableBody>
      </Table>
    </TableContainer>
    ) 
  );
};

export default Trucks;
