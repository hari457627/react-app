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
import './countryRestriction.css';
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

class CountryRestriction extends Component {
  constructor(props){
    super(props);
    this.state = { 
    }
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent className="card_header_content">
              <Grid container spacing={24}>
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
            <Grid container spacing={24} className="bank_details">
              <Grid item xs={4} className="bank_details_section">
                <p><small>Unique Ref No</small></p>
                <b>A123456</b>
              </Grid>
              <Grid item xs={4} className="bank_details_section">
                <p><small>Service Provider Code</small></p>
                <b>UAE</b>
              </Grid>
              <Grid item xs={4} className="bank_details_section">
                <p><small>Ccy Code</small></p>
                <b>INR</b>
              </Grid>
              <Grid item xs={4} className="bank_details_section">
                <p><small>Instrument Type</small></p>
                <b>Swift</b>
              </Grid>
              <Grid item xs={4} className="bank_details_section">
                <p><small>Customer Type</small></p>
                <b>LoremIpsum</b>
              </Grid>
              <Grid item xs={4} className="bank_details_section">
                <p><small>Beneficiary Type</small></p>
                <b>LoremIpsum</b>
              </Grid>
              <Grid item xs={4} className="bank_details_section">
                <p><small>Destination Country</small></p>
                <b>Qatar</b>
              </Grid>
              <Grid item xs={4} className="bank_details_section">
                <p><small>Delivery Option</small></p>
                <b>LoremIpsum</b>
              </Grid>
              <Grid item xs={4} className="bank_details_section">
                <p><small>Process Status</small></p>
                <b>Active</b>
              </Grid>
            </Grid>
          </div>
        </Card>
      </div>
    )
  }
}
CountryRestriction.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CountryRestriction);