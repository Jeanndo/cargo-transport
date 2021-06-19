import React, { useState, useEffect } from "react";
import Trucks from "./Trucks/Trucks";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getTrucks } from "../../../../redux/actions/employee";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    dispatch(getTrucks());
  }, [dispatch]);

  return (
    <div className={`${classes.root} driver-container`}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button
            component={Link}
            to="/employee"
            variant="outlined"
            color="primary"
            style={{ cursor: "pointer", marginTop: "-11%" }}
          >
            Go Back
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
