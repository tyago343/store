import axios from 'axios';
import constants from '../constants/UserConstants.js';
      
        // ACTIONS
export const registerUser = (user) => ({
    type: constants.CREATEUSER,
    action: user
});







        // UTILS
export const registerUserUtil = (user) => (dispatch) => {
    console.log(user)
    axios.post('/api/v1/users', user)
    .then(user=>dispatch(registerUser(user)))
} 