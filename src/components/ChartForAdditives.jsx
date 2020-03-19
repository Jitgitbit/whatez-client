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
// import React from 'react'
// import { connect } from "react-redux";
// import { getShots } from "../actions/shotsActions";



// function ChartForAdditives({shot, getShots}) {
//   // const whatisit = getShots()
//   // const peopleArray = Object.keys(peopleObj).map(i => peopleObj[i])
//   const additiveArray = Object.values(getShots()).map(i => getShots()[i])
//   console.log(additiveArray)
//   console.log(shot)
//   return (
//     <div>
//       What are the props:{additiveArray}
//     </div>
//   )
// }

// const mapStateToProps = state => {
//   return {
//     user: state.user.user,
//     shot: state.shot
//   };
// };

// export default connect(mapStateToProps, {getShots})(ChartForAdditives);
import React, { Component } from "react";
import { getShots } from "../actions/shotsActions";
import { connect } from "react-redux";


export class ChartForAdditives extends Component {

  // displayEvents = eventList => {
  //   console.log("EVENTLIST", eventList);
  //   return eventList.map(eventItem => {
  //     return <EventCards eventObj={eventItem} />;
  //   });
  // };

  componentDidMount() {
    this.props.dispatch(getShots());
    
  }

  render() {
    return (
      <div class="album py-5 bg-dark">
        <h1 style={{color:'green'}}>Ez listed</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    shot: state.shot
  };
};

export default connect(mapStateToProps)(ChartForAdditives);