import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import './draweeBank.css';
function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    boxshadow:'none',
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

class DreaweeBankDetails extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default" className="headerTabs">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab className="tabLinks" label="Item One" />
            <Tab className="tabLinks" label="Item Two" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer className="tabContent" dir={theme.direction}>
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
          </TabContainer>
          <TabContainer className="tabContent" dir={theme.direction}>
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
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

DreaweeBankDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(DreaweeBankDetails);