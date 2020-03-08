import React, {Component} from 'react'
import MainPageCommonList from './MainPageCommonList'
import MainPageNotoriousList from './MainPageNotoriousList'
import MainPageChart from './MainPageChart'
// import PhotoPageContainer from '../PhotoPage/PhotoPageContainer'
import { Card, Button } from "@material-ui/core";

import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
    flexGrow: 1,
    // height : '100%',
    // width: '100%'
  },
// paper: {
//   padding: theme.spacing.unit * 2,
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// },
});

// export default function MainPageContainer() {
//   return (
//     <div>
//       <div>
//         <h1>What Ez</h1>
//         <hr/>
//       </div>
//       <MainPageCommonList/>
//       <MainPageNotoriousList/>
//       <PhotoPageContainer/>
//       <MainPageChart/>
//     </div>
//   )
// }

class MainPageContainer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {/* <div>
          <h1>What Ez</h1>
          <hr/>
        </div> */}
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <h3>What Ez</h3>
          </Grid>
          <Grid item xs={2}>
            {/* <Paper className={classes.paper}>xs=6</Paper> */}
          </Grid>
          <Grid item xs={3} >
            <MainPageCommonList/>
          </Grid>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={3}>
            <MainPageNotoriousList/>
            {/* <Paper className={classes.paper}>xs=6</Paper> */}
          </Grid>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={12}>
            {/* <PhotoPageContainer/> */}
            <hr/>
            <Button
              variant='contained'
              style={{ marginTop: "10px", width: "400px" }}
              onClick={() => this.props.history.push("/photo")}
            >
              Upload a new photo
            </Button>
            <hr/>
          </Grid>
          <Grid item xs={12}>
            <MainPageChart/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(MainPageContainer);