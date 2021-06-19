import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import Trucks from "../Trucks/Trucks";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { getTrucks } from "../../redux/actions/admin";
import { getUsers } from "../../redux/actions/user";
import SideBar from "./SideBar";
import AddUser from "./AddEmployee";
import AllUsers from "./AllUsers";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Admin = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getTrucks());
    dispatch(getUsers());
  }, [dispatch]);

  const users = useSelector((state) => state.usersReducer);
  const handlePrint = () => {
    history.push("/print/admin/report");
  };

  return (
    <div className={`${classes.root} adminContainer`}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SideBar />
          <AddUser />
          <AllUsers users={users} />
          <Button
            variant="outlined"
            color="primary"
            className="ml-5"
            onClick={handlePrint}
          >
            Get Report
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Trucks setCurrentId={setCurrentId} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default Admin;
