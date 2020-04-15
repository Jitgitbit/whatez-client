import React, { Component } from "react";
import { getShots } from "../actions/shotsActions";
import { connect } from "react-redux";
import { ResponsiveContainer, PieChart, Pie } from "recharts";

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
    // const additivesList = allShotsMerged.map((additive, index) => {
    //   return(
    //     <ul key={index}>
    //       <li>{additive}</li>
    //     </ul>
    //   )
    // })
    // console.log('SHOTS in chartpage:',shotsList)
    console.log('ADDITIVES in chartpage:',allShotsMerged)

    const uniqueCount = allShotsMerged

    var count = [];

    uniqueCount.forEach(function(i) { count[i] = (count[i]||0) + 1;});
    console.log(`count:`,count);

    const dataToGraph = Object.keys(count).map(key => ({ name: key, value: count[key] }))
    console.log(`dataToGraph:`,dataToGraph)

    return (
      <div>
        <h1>Your E-additives charted:</h1>
        {/* <ul>
          <li style={{marginLeft:'200px'}}>{additivesList}</li>
        </ul> */}
        <ResponsiveContainer width="100%" height={500}>
          <PieChart height={500}>
            <Pie
              data={dataToGraph}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index
              }) => {
                console.log("handling label?");
                const RADIAN = Math.PI / 180;
                // eslint-disable-next-line
                const radius = 25 + innerRadius + (outerRadius - innerRadius);
                // eslint-disable-next-line
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                // eslint-disable-next-line
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  <text
                    x={x}
                    y={y}
                    fill="#8884d8"
                    textAnchor={x > cx ? "start" : "end"}
                    dominantBaseline="central"
                  >
                    {dataToGraph[index].name} ({value})
                  </text>
                );
              }}
            />
          </PieChart>
        </ResponsiveContainer>
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