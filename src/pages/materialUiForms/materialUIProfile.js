import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './materialUIProfile.css';
import {MuiThemeProvider} from '@material-ui/core/styles';
import getMuiTheme from "./theme.js";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 50,
  },
});

class MaterialUIProfile extends Component {
  constructor(props){
    super(props);
    this.state = { 
      bankDetails:{}
    }
  }
  componentDidMount(){
    // axios.get(‘https://jsonplaceholder.typicode.com/posts/1’,{}).then((res)=>{
    // //on success
    // this.setState({
    // userMsg:res.data
    // });
    // }).catch((error)=>{
    // //on error
    // alert(“There is an error in API call.”);
    // });
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div>
        <MuiThemeProvider theme={getMuiTheme}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent className="card_header_content">
              <Grid container spacing={12}>
                <Grid item xs={4}>
                  <p><small>Created by</small></p>
                  <b>Yashwanth</b>
                  <p><small>29/12/2018 ; 02:30 PM</small></p>
                </Grid>
                <Grid item xs={4}>
                  <p><small>Last modified by</small></p>
                  <b>Sharavan</b>
                  <p><small>29/12/2018 ; 02:30 PM</small></p>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
          <div className="card_content">
            <h3>Bank Details View</h3>
            <Grid container spacing={24} className="bank_details">
              <Grid item xs={4} className="bank_details_section">
                <p><small>Bank Name</small></p>
                <b>Axis</b>
              </Grid>
              <Grid item xs={4} className="bank_details_section">
                <p><small>Bank Code</small></p>
                <b>UTIB0000030</b>
              </Grid>
              <Grid item xs={4} className="bank_details_section">
                <p><small>Fax</small></p>
                <b>+91-22-24251800</b>
              </Grid>
              <Grid item xs={4} className="bank_details_section">
                <p><small>Phone Number</small></p>
                <b>+91-22-24251800</b>
              </Grid>
              <Grid item xs={4} className="bank_details_section">
                <p><small>Email</small></p>
                <b>axisbank@gmail.com</b>
              </Grid>
              <Grid item xs={4} className="bank_details_section">
                <p><small>Status</small></p>
                <b>Active</b>
              </Grid>
              <Grid item xs={4} className="bank_details_section">
                <p><small>Zip Code</small></p>
                <b>97106</b>
              </Grid>
            </Grid>
            <Grid container spacing={24} className="bank_details_section">
              <Grid item xs={5}>
                <p><small>Bank Address</small></p>
                <b>Axis Bank Limited, Plot Number 22, SBR Towers, HUDA Techno Enclave, Madhapur, Hyderabad, Telengana</b>
              </Grid>
            </Grid>
          </div>
        </Card>
        </MuiThemeProvider>
      </div>
    )
  }
}
MaterialUIProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MaterialUIProfile);