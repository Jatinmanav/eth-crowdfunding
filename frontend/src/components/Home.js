import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import homePageService from "../services/getHomePageComponent";
import { AuthContext } from "../contexts/AuthContext";
import Colors from "../utils/ColorVariables";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "80vw",
    margin: "auto",
    marginTop: "5vh",
  },
  card: {
    backgroundColor: Colors.backgroundColor2,
    position: "relative",
    margin: "auto",
    height: "25vh",
    width: "25vh",
    maxHeight: 400,
    maxWidth: "90%",
    borderRadius: 14,
    marginBottom: "2vh",
  },
  campaignCard: {
    width: "80%",
    borderRadius: 14,
    position: "relative",
    backgroundColor: Colors.backgroundColor2,
    margin: "auto",
    marginBottom: "5vh",
  },
  primaryHeading: {
    margin: "2vh",
    color: Colors.fontColor1,
  },
  secondaryHeading: {
    margin: "2vh",
    color: Colors.fontColor1,
  },
  cardTitle: {
    color: Colors.fontColor3,
    position: "absolute",
    bottom: 10,
    fontSize: 16,
  },
  campaignCardTitle: {
    color: Colors.fontColor3,
    block: "inline",
  },
  cardNumber: {
    color: Colors.fontColor3,
    position: "absolute",
    bottom: "30%",
    left: "10%",
    fontSize: 66,
  },
  campaignCardNumber: {
    color: Colors.fontColor3,
    block: "inline",
  },
}));

const Home = () => {
  const classes = useStyles();
  const { auth } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataObj = { email: auth.userName };
    homePageService(dataObj)
      .then(([status, data]) => (status ? setData(data) : setData([])))
      .catch((err) => {
        console.log(err);
      });
  }, [auth]);

  return (
    <div>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item xs={12}>
            <Typography className={classes.primaryHeading} variant="h4">
              Home Page
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.cardTitle} gutterBottom>
                  Total Campaigns
                </Typography>
                <Typography variant="h5" component="h2"></Typography>
                <Typography className={classes.cardNumber}>
                  {data.length > 1 ? data[0] : 0}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.cardTitle} gutterBottom>
                  Current Campaigns
                </Typography>
                <Typography variant="h5" component="h2"></Typography>
                <Typography className={classes.cardNumber}>
                  {data.length > 1 ? data[1] : 0}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.cardTitle} gutterBottom>
                  Your Campaigns
                </Typography>
                <Typography variant="h5" component="h2"></Typography>
                <Typography className={classes.cardNumber}>
                  {data.length > 1 ? data[2] : 0}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.secondaryHeading} variant="h5">
              Popular Campaigns
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.campaignCard}>
              <CardContent>
                <Typography className={classes.campaignCardTitle} gutterBottom>
                  {data.length > 1 ? data[3][0].campaignName : 0}
                </Typography>
                <Typography variant="h5" component="h2"></Typography>
                <Typography className={classes.campaignCardNumber}>
                  {data.length > 1 ? data[3][0].currentAmount : 0}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.campaignCard}>
              <CardContent>
                <Typography className={classes.campaignCardTitle} gutterBottom>
                  {data.length > 1 ? data[3][1].campaignName : 0}
                </Typography>
                <Typography variant="h5" component="h2"></Typography>
                <Typography className={classes.campaignCardNumber}>
                  {data.length > 1 ? data[3][1].currentAmount : 0}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.campaignCard}>
              <CardContent>
                <Typography className={classes.campaignCardTitle} gutterBottom>
                  {data.length > 1 ? data[3][2].campaignName : 0}
                </Typography>
                <Typography variant="h5" component="h2"></Typography>
                <Typography className={classes.campaignCardNumber}>
                  {data.length > 1 ? data[3][2].currentAmount : 0}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Home;