import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Product from "./Product";
import getCampaignsService from "../services/getAllCampaignsComponent";
import { Typography, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const Explore = () => {
  const [campaignsData, setCampaignsData] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    getCampaignsService()
      .then(([status, data]) => {
        status ? setCampaignsData(data) : setCampaignsData([]);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(campaignsData);

  return (
    <div>
      <Paper>
        <Typography variant="h1" align="center" gutterBottom>
          Explore
        </Typography>
      </Paper>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {campaignsData.map((value) => (
              <Product key={value._id} value={value} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Explore;
