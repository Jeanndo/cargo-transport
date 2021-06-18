import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import moment from 'moment'
const Truck = ({ truck, setCurrentId }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(user?.result?._id);
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

    </>
  );
};
export default Truck;
