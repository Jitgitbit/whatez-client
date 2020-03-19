// import * as React from 'react';
// import Paper from '@material-ui/core/Paper';
// import {
//   Chart,
//   PieSeries,
//   Title,
// } from '@devexpress/dx-react-chart-material-ui';

// import { Animation } from '@devexpress/dx-react-chart';
// import NavBar from './NavBar';

// const data = [
//   { E: 'E400', bought: 12 },
//   { E: 'E450', bought: 7 },
//   { E: 'E500', bought: 7 },
//   { E: 'E160', bought: 7 },
//   { E: 'E280', bought: 6 },
//   { E: 'E301', bought: 5 },
//   { E: 'E380', bought: 2 },
//   { E: 'E270', bought: 55 },
// ];
// export default class ChartForAdditives extends React.PureComponent {
  
//   constructor(props) {
//     super(props);

//     this.state = {
//       data,
//     };
//   }

//   render(props) {
//     const { data: chartData } = this.state;
//     console.log(props)

//     return (
//       <div>
//       <NavBar/>
//         <h1>What Ez</h1>
//         <Paper style={{width: 500}}>
//           <Chart
//             data={chartData}
//           >
//             <PieSeries
//               valueField="bought"
//               argumentField="E"
//             />
//             <Title
//               text="Ez consumed"
//             />
//             <Animation />
//           </Chart>
//         </Paper>
//       </div>
//     );
//   }
// }
// export default connect(mapStateToProps, {getShots})(ChartForAdditives);

import React, { Component } from "react";
import { getShots } from "../actions/shotsActions";
import { connect } from "react-redux";


export class ChartForAdditives extends Component {

  componentDidMount() {
    this.props.dispatch(getShots());
    // console.log(this.props)
  }

  render() {
    // console.log('SHOTS in chartpage:',this.props.shots)
    const allShotsRaw = this.props.shots;
    const shotsList = allShotsRaw.map((shot, key) => {
      // return(
      //   <ul key={shot.id}>
      //     <li>{shot.arrayE}</li>
      //   </ul>
      // )
      return shot.arrayE
    })
    const allShotsMerged = [].concat.apply([], shotsList);
    const additivesList = allShotsMerged.map((addi, index) => {
      return(
        <ul key={index}>
          <li>{addi}</li>
        </ul>
      )
    })
    // console.log('SHOTS in chartpage:',shotsList)
    console.log('ADDITIVES in chartpage:',allShotsMerged)

    return (
      <div>
        <h1 style={{color:'green'}}>Ez listed</h1>
        <ul>
          {/* <li>{shotsList}</li> */}
          <li>{additivesList}</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    shots: state.shots
  };
};

export default connect(mapStateToProps)(ChartForAdditives);