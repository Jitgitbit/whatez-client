import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 300,
    maxWidth: 200,
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: 'aquamarine',
    color: 'black'
  },
}));

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      {/* <ListItemText primary={`Item ${index + 1}`} /> */}
      <ListItemText primary={`E ${index + 100}`} />
    </ListItem>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};
//  const renderRow = {
//   item1: "E400"
// }

export default function MainPageCommonList() {
  const classes = useStyles();

  return (
    <div>
      <h4>Common Ez</h4>
      <div className={classes.root}>
        <FixedSizeList height={300} width={200} itemSize={46} itemCount={200}>
          {renderRow}
          
        </FixedSizeList>
      </div>
    </div>
  );
}
