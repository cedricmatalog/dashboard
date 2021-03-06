// get the highest id for existing users or default to 1 if users is empty
export const generateId = (state) =>
  state.users.length !== 0 ? state.users.sort((a, b) => a.id - b.id)[state.users.length - 1].id + 1 : 1;

// delete city from object to match existing shape of users and remove redundacy { city: 'sample', address: { city : 'sample' } }
export const formatUserData = (payload) => {
  delete payload['city'];
  return payload;
};
