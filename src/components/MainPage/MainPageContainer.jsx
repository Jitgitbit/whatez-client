import React, {Component} from 'react'
import MainPageCommonList from './MainPageCommonList'
import MainPageNotoriousList from './MainPageNotoriousList'
import MainPageChart from './MainPageChart'
import { connect } from "react-redux";

// import PhotoPageContainer from '../PhotoPage/PhotoPageContainer'
import { Button } from "@material-ui/core";

// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


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

    console.log(`=================================>> PROPS IN MAINPAGE:`,this.props)
    console.log(`=================================>> HISTORY IN MAINPAGE:`,this.props.history)
    console.log(`=================================>> STATE IN MAINPAGE:`,this.state)

    return (
      <div >
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
            <Button
              variant='contained'
              style={{ marginTop: "10px", width: "400px" }}
              onClick={() => this.props.history.push("/chart")}
            >
              Check your chart
            </Button>
            <hr/>
          </Grid>
          {/* <Grid item xs={12}>
            <MainPageChart/>
          </Grid> */}
        </Grid>
        <MainPageChart/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

export default connect(mapStateToProps)(MainPageContainer);