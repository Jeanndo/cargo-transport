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
import BusinessIcon from '@material-ui/icons/Business';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AllOutIcon from '@material-ui/icons/AllOut';
import TransitEnterexitIcon from '@material-ui/icons/TransitEnterexit';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Trucks = ({ setCurrentId }) => {
  const classes = useStyles();
  const trucks = useSelector((state) => state.trucks);
  console.log(trucks.length);

  return !trucks.length ? (
    <CircularProgress />
  ) : (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>
            <b className="Icons"><BusinessIcon />Company</b>
            </TableCell>
            <TableCell align="right">
             <b className="Icons"><CardGiftcardIcon />Product</b>
            </TableCell>
            <TableCell align="right">
            <b  className="Icons"><ShoppingCartIcon/>Quantity</b>
            </TableCell>
            <TableCell align="right">
            <b  className="Icons"><AllOutIcon/>Source</b>
            </TableCell>
            <TableCell align="right">
            <b  className="Icons"><TransitEnterexitIcon/>Destination</b>
            </TableCell>
            <TableCell align="right">
              <b className="Icons"><QueryBuilderIcon />Time</b>
            </TableCell>
            <TableCell align="right">
            <b className="Icons"><EditIcon />Edit</b>
            </TableCell>
            <TableCell align="right">
            <b className="Icons"><DeleteIcon />Delete</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trucks.map((truck, index) => (
            <TableRow key={index}>
              <Truck truck={truck} setCurrentId={setCurrentId} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Trucks;
