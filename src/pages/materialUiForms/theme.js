import { createMuiTheme, withTheme} from '@material-ui/core/styles';
import color from '@material-ui/core/colors/teal';
import { red } from '@material-ui/core/colors';
const getMuiTheme =  createMuiTheme({
    overrides: {
      MuiGrid:{
        spacing:{
          margin:0
        },
        container:{
          marginTop:10,
        },
        item:{
          marginTop:10
        }
      }
    }
});

export default getMuiTheme;