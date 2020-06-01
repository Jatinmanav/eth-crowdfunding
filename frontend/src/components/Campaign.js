import React from "react";
import { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import getCampaignService from "../services/getOneCampaignComponent";
import { AuthContext } from "../contexts/AuthContext";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "100vw",
    height: "25vh",
  },
  paper: {
    width: "75vw",
    margin: "auto",
    padding: "2em",
  },
  title: {
    textAlign: "center",
  },
  description: {
    textAlign: "center",
  },
  progress: {
    marginTop: 15,
  },
  funds: {
    marginTop: 20,
    textAlign: "center",
  },
  pay: {
    marginTop: 20,
  },
}));

const Campaign = () => {
  const classes = useStyles();
  const { auth } = useContext(AuthContext);
  const [campaignInfo, setCampaignInfo] = useState(null);
  useEffect(() => {
    getCampaignService(window.location.pathname.split("/").pop())
      .then(([status, data]) => {
        status ? setCampaignInfo(data) : setCampaignInfo(null);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(campaignInfo);

  const handleSubmit = (e) => {
    e.preventDefaults();
  };

  const handleAmountChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      {campaignInfo ? (
        <div>
          <img
            src={`data:image/png;base64,${campaignInfo.campaignImage}`}
            alt="Campaign"
            className={classes.image}
          />
          <Paper className={classes.paper} elevation={5}>
            <Grid container>
              <Grid className={classes.grid} item xs={12}>
                <Typography variant="h4" className={classes.title}>
                  {campaignInfo.campaignName}
                </Typography>
                <hr />
                <Typography variant="body1" className={classes.description}>
                  {campaignInfo.campaignDes}
                </Typography>
                <LinearProgress
                  className={classes.progress}
                  variant="determinate"
                  value={campaignInfo.currentAmount / campaignInfo.targetAmount}
                />
              </Grid>
              <Grid className={classes.funds} item xs={12}>
                <Typography variant="h6" className={classes.currentAmount}>
                  {campaignInfo.currentAmount}
                </Typography>
                <Typography variant="body1" className={classes.targetAmount}>
                  raised out of {campaignInfo.targetAmount}
                </Typography>
              </Grid>
              {auth ? (
                <Grid item className={classes.pay} xs={12}>
                  <form
                    onSubmit={handleSubmit}
                    className={classes.form}
                    method="post"
                  >
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="amount"
                      label="Amount"
                      name="amount"
                      autoComplete="amount"
                      onChange={handleAmountChange}
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Pay
                    </Button>
                  </form>
                </Grid>
              ) : (
                React.Fragment
              )}
            </Grid>
          </Paper>
        </div>
      ) : (
        React.Fragment
      )}
    </div>
  );
};

export default Campaign;
