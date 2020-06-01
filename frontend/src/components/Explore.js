import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product";
import getCampaignsService from "../services/getAllCampaignsComponent";
import { Typography, Paper } from "@material-ui/core";

const Explore = () => {
  const [campaignsData, setCampaignsData] = useState([]);

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
        <Typography variant="h2" align="center" gutterBottom>
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
