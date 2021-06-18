import React, { useState, useEffect } from "react";
import Trucks from "./Trucks/Trucks";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getTrucks } from "../../redux/actions/employee";
import SideBar from "./SideBar";
import AddEmployee from "../Admin/AddEmployee";
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

const Driver = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getTrucks());
  }, [dispatch]);

  const handlePrint = () => {
    history.push("/print/eployee/report");
  };

  return (
    <div className={`${classes.root} driver-container`}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SideBar />
          <AddEmployee />
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
            <Trucks setCurrentId={setCurrentId} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default Driver;
