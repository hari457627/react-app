import  {combineReducers} from 'redux';
import userReducer from './userReducer';
import activeUser from './loggedUser';
const allReducers = combineReducers({
  users : userReducer,
  activeUser : activeUser
});

export default allReducers;