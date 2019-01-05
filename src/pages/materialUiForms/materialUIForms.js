import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});
class MaterialUIForms extends Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };
  constructor(props){
    super(props);
    this.state = { 
    }
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const formData = [
      {
        'label':'Enter bank Name',
        'id':1
      },
      {
        'label':'Enter bank code',
        'id':2
      },
      {
        'label':'Enter bank country',
        'id':3
      },
      {
        'label':'Enter bank address',
        'id':4
      }
    ]
    return (
      <div>
        <h3>
          hi material ui forms
        </h3>
        {formData.map((key) => {
          return <TextField
          id={key.id}
          label={key.label}
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        })}
        
      </div>
    )
  }
}
MaterialUIForms.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MaterialUIForms);