import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { E: 'E400', bought: 12 },
  { E: 'E450', bought: 7 },
  { E: 'E500', bought: 7 },
  { E: 'E160', bought: 7 },
  { E: 'E280', bought: 6 },
  { E: 'E301', bought: 5 },
  { E: 'E380', bought: 2 },
  { E: 'E270', bought: 55 },
];
export default class ChartActualRepresentation extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <div>
      <h1>What Ez</h1>
      <Paper style={{width: 500}}>
        <Chart
          data={chartData}
        >
          <PieSeries
            valueField="bought"
            argumentField="E"
          />
          <Title
            text="Ez consumed"
          />
          <Animation />
        </Chart>
      </Paper>
      </div>
    );
  }
}