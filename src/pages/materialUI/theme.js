import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  overrides:{
    MuiTableCell:{
      head:{
          fontSize:15,
          fontWeight:1000
      },
      body:{
        fontSize:15,
        fontWeight:1000
    },
    },
  }
});
export default theme;