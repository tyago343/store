import axios from 'axios';
import constants from '../constants/UserConstants.js';
      
        // ACTIONS
export const registerUser = (user) => ({
    type: constants.CREATEUSER,
    user
});







        // UTILS
export const registerUserUtil = (user) => (dispatch) => {
    axios.post('/api/v1/users', user)
    .then(user=>dispatch(registerUser(user.data)))
} 