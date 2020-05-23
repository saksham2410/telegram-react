import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chart from "./Chart";
import Deposits from "./Deposits";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Orders from "./Orders";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 200,
  },
  textField: {
    margin: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(2),
  },
}));

export default function Scrap() {
  const orders = "Numbers";
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper}>
          <div className={classes.root}>
            <h2 className={classes.textField}>Add a number</h2>
            <hr></hr>
            <TextField
              className={classes.textField}
              style={{ width: 50 }}
              id="outlined-basic"
              label="+"
              variant="outlined"
            />
            <TextField
              className={classes.textField}
              style={{ width: 200 }}
              id="outlined-basic"
              label="number"
              variant="outlined"
            />
            <Button className={classes.textField} variant="contained" color="primary">
              Get OTP
            </Button>
          </div>
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
        <div className={classes.root}>
        <TextField
        className={classes.textField}
        style={{ width: 200 }}
        id="outlined-basic"
        label="OTP"
        variant="outlined"
      />
      <Button className={classes.submit} variant="contained" color="primary">
              Submit
            </Button>
            </div>
        </Paper>
      </Grid>
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Orders order={orders} />
        </Paper>
      </Grid>
    </Grid>
  );
}
