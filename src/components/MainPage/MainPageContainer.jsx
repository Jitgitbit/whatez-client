import React, {Component} from 'react'
// import MainPageCommonList from './MainPageCommonList'
// import MainPageNotoriousList from './MainPageNotoriousList'
import { connect } from "react-redux";

// import PhotoPageContainer from '../PhotoPage/PhotoPageContainer'
// import { Button } from "@material-ui/core";

// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';


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

    return (
      <div >
        <div>
          <h1>What Ez</h1>
          <hr/>
        </div>
       
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    shot: state.shot,
    // history: state.history
  };
};

export default connect(mapStateToProps)(MainPageContainer);