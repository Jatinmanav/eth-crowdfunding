import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "80vw",
    margin: "auto",
    marginTop: "5vh",
  },
  card: {
    backgroundColor: "red",
    textAlign: "center",
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
    backgroundColor: "red",
    margin: "auto",
    marginBottom: "5vh",
  },
  primaryHeading: {
    margin: "2vh",
  },
  secondaryHeading: {
    margin: "2vh",
  },
}));

const Home = () => {
  const classes = useStyles();

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
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Total Campaigns
                </Typography>
                <Typography variant="h5" component="h2"></Typography>
                <Typography className={classes.pos} color="textSecondary">
                  10
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Current Campaigns
                </Typography>
                <Typography variant="h5" component="h2"></Typography>
                <Typography className={classes.pos} color="textSecondary">
                  5
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Your Campaigns
                </Typography>
                <Typography variant="h5" component="h2"></Typography>
                <Typography className={classes.pos} color="textSecondary">
                  2
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
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Campaign 1
                </Typography>
                <Typography variant="h5" component="h2"></Typography>
                <Typography className={classes.pos} color="textSecondary">
                  adjective
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.campaignCard}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Campaign 2
                </Typography>
                <Typography variant="h5" component="h2"></Typography>
                <Typography className={classes.pos} color="textSecondary">
                  adjective
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.campaignCard}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Campaign 3
                </Typography>
                <Typography variant="h5" component="h2"></Typography>
                <Typography className={classes.pos} color="textSecondary">
                  adjective
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
