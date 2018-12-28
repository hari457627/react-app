export const selectUser = (user) => {
  console.log('you clicked on ', user.email);
  return {
    type : 'USER_CLICKED',
    payload : user
  }
}