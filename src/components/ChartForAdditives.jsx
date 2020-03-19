import React, { Component } from "react";
import { getShots } from "../actions/shotsActions";
import { connect } from "react-redux";
import PieChart from 'react-minimal-pie-chart';



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
    const additivesList = allShotsMerged.map((additive, index) => {
      return(
        <ul key={index}>
          <li>{additive}</li>
        </ul>
      )
      // return additive;
    })
    // console.log('SHOTS in chartpage:',shotsList)
    console.log('ADDITIVES in chartpage:',allShotsMerged)

    return (
      <div>
        <h1 style={{color:'green'}}>Ez listed:</h1>
        <ul>
          {/* <li>{shotsList}</li> */}
          <li style={{marginLeft:'200px'}}>{additivesList}</li>
          <PieChart
          data={[
            { title: 'One', value: 10, color: '#E38627' },
            { title: 'Two', value: 15, color: '#C13C37' },
            { title: 'Three', value: 20, color: '#6A2135' },
          ]}
          />;
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