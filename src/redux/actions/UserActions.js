import axios from 'axios';
import constants from '../constants/UserConstants.js';
      
        // ACTIONS
export const registerUser = (user) => ({
    type: constants.CREATEUSER,
    user
});
export const loginUser = logged =>({
    type: constants.LOGINUSER,
    logged
})





        // UTILS
export const registerUserUtil = (user) => (dispatch) => {
    axios.post('/api/v1/users', user)
    .then(user=>dispatch(registerUser(user.data)))
} 
export const loginUserUtil = (user) => (dispatch) => {
    axios.post('/api/v1/users/login', user)
    .then(({data})=>dispatch(loginUser(data)))
    .catch(err=>alert('Ingresaste mal el usuario o la contraseña!'))
}