import React, { Component } from "react";
import { getShots } from "../actions/shotsActions";
import { connect } from "react-redux";
import PieChart from 'react-minimal-pie-chart';
import Chart from 'chart.js';
import Chartb from "./Chartb";

export class ChartForAdditives extends Component {

  componentDidMount() {
    this.props.dispatch(getShots());
    // console.log(this.props)            // no shots yet at this point in time !
  }
  
  render() {
    // console.log('SHOTS in chartpage:',this.props.shots)
    const allShotsRaw = this.props.shots;
    const shotsList = allShotsRaw.map((shot, key) => {
     
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

    const randomColorOne = Math.floor(Math.random()*16777215).toString(16);
    const randomColorTwo = Math.floor(Math.random()*16777215).toString(16);

    // const dataForGraph = (allShotsMerged) => {
  
      var integerAmount = [];
      for (var i in allShotsMerged) {
          integerAmount.push(allShotsMerged[i].CaseNum);
      }
      var sum = integerAmount.reduce((a, b) => a + b, 0);
      var categoryname = ["E528", "E300", "E450", "E500", "E224", "E330", "E202"];
      var category = [];
      var amount = [];
      for (var i in allShotsMerged) {
          category.push(categoryname[allShotsMerged[i].Category]);
          amount.push (integerAmount[i]/sum*100+'%');
      }
      var config = {
        type: 'pie',
        data: {
            datasets: [{
                data: amount,
                backgroundColor: [
                    "rgba(59, 89, 152, 1)",
                    "rgba(59, 89, 152, 1)",
                    "rgba(59, 89, 152, 1)",
                    "rgba(59, 89, 152, 1)",
                    "rgba(59, 89, 152, 1)",
                    "rgba(59, 89, 152, 1)",
                    "rgba(59, 89, 152, 1)"
                    ],
                label: 'Dataset 1'
            }],
                labels: category
        },
        options: {
            responsive: true
        }
    };
    var ctx = ("#mycanvas");       
    var graph = new Chart(ctx, config);
    // }

    return (
      <div>
        <h1 style={{color:'green'}}>Ez listed:</h1>
        <ul>
          {/* <li>{shotsList}</li> */}
          <li style={{marginLeft:'200px'}}>{additivesList}</li>
          <PieChart
          data={[
            { title: 'One', value: 10, color: '#' + randomColorOne },
            { title: 'Two', value: 15, color: '#' + randomColorTwo },
            { title: 'Three', value: 20, color: '#6A2135' },
          ]}
          />
        </ul>
        <Chartb/>
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