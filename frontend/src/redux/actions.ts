export const SET_USER_ID = 'SET_USER_ID';

export const setUserIdAction = (userId: number) => ({
  type: SET_USER_ID,
  payload: userId,
});
