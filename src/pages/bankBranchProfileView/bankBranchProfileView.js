import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import './bankBranchProfileView.css';
import {MuiThemeProvider} from '@material-ui/core/styles';
import getMuiTheme from "../materialUI/theme.js";
import axios from 'axios';

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
      bankBranchDetails:{}
    }
  }

  componentDidMount(){
    localStorage.setItem('bankId','SBISBISBISB5');
    localStorage.setItem('branchCode','sample')
    this.getBankDetails();
  }

  getBankDetails =() =>{
    //var bankId = localStorage.getItem('bankId');
    // var headers = {
    //   'Access-Control-Allow-Origin': '*',
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json'
    // }
    // axios.get(process.env.REACT_APP_API_DEV_URL+'/banks/api/v0.1/bank/'+bankId,{headers:headers}).then((res)=>{
    // //on success
    // this.setState({bankDetails:res.data});
    // }).catch((error)=>{
    // //on error
    // alert(error,':there was an error on api call');
    // });
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h3 className="bankNameSection"><Link className="backButton" to="/app/dashboard">&lt;</Link>&nbsp;&nbsp;&nbsp;HDFC, Madhapur</h3>
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
              <h3>Bank Branch Profile Details View</h3>
              <Grid container spacing={24} className="bank_details">
                <Grid item xs={4} className="bank_details_section">
                  <p><small>Bank Name</small></p>
                  <b>abc</b>
                </Grid>
                <Grid item xs={4} className="bank_details_section">
                  <p><small>Branch Name</small></p>
                  <b>abc</b>
                </Grid>
                <Grid item xs={4} className="bank_details_section">
                  <p><small>Branch Code</small></p>
                  <b>abc</b>
                </Grid>
                <Grid item xs={4} className="bank_details_section">
                  <p><small>Country Code</small></p>
                  <b>abc</b>
                </Grid>
                <Grid item xs={4} className="bank_details_section">
                  <p><small>Product Type</small></p>
                  <b>abc</b>
                </Grid>
                <Grid item xs={4} className="bank_details_section">
                  <p><small>Bank PO Box</small></p>
                  <b>abc</b>
                </Grid>
                <Grid item xs={4} className="bank_details_section">
                  <p><small>Phone</small></p>
                  <b>abc</b>
                </Grid>
                <Grid item xs={4} className="bank_details_section">
                  <p><small>Email</small></p>
                  <b>abc</b>
                </Grid>
                <Grid item xs={4} className="bank_details_section">
                  <p><small>Fax</small></p>
                  <b>abc</b>
                </Grid>
                <Grid item xs={4} className="bank_details_section">
                  <p><small>Bank Address1</small></p>
                  <b>abc</b>
                </Grid>
                <Grid item xs={4} className="bank_details_section">
                  <p><small>Bank Address2</small></p>
                  <b>abc</b>
                </Grid>
                <Grid item xs={4} className="bank_details_section">
                  <p><small>City</small></p>
                  <b>abc</b>
                </Grid>
                <Grid item xs={4} className="bank_details_section">
                  <p><small>State</small></p>
                  <b>abc</b>
                </Grid>
                <Grid item xs={4} className="bank_details_section">
                  <p><small>Zip Code</small></p>
                  <b>abc</b>
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