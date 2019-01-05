import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {MuiThemeProvider} from '@material-ui/core/styles';
import Theme from './theme';
var TableHeaders = [];
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class MaterialTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:[] 
    }
    this.sampleClick = this.sampleClick.bind(this);
  }
  
  componentDidMount(){
    this.setState({data:this.props.data});
    TableHeaders = [];
    Object.keys(this.props.data[0]).map(function(key) {
      var header = key;
      header = header.charAt(0).toUpperCase() + header.substr(1);
      header = header.replace("_", " ");
      TableHeaders.push(header);
    })
  }
  sampleClick (key) {
    console.log(key); 
  }

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={Theme}>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                {TableHeaders.map((key) => {
                  return <TableCell onClick={() => this.sampleClick(key)} align='left'>{key}</TableCell>
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.data.map((row) => {
                  return (
                  <TableRow key={row.id}>
                  {Object.keys(row).map(function(key,value) {return <TableCell component="th" scope="row">{row[key]}</TableCell>})}
                </TableRow>)
                })
              } 
            </TableBody>
          </Table>
        </Paper>
      </MuiThemeProvider>
    )
  }
}

MaterialTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MaterialTable);