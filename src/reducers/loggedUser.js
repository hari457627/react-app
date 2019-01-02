export default function(state=null, action){
  switch(action.type) {
    case 'LOGGED_USER':
     return action.payload;
    break;
    
  }
  return state;  
}