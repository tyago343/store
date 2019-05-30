import constants from '../constants/UserConstants.js';
const initialState = {};
export default (state = initialState, action) => {
    switch(action.type){
        case constants.CREATEUSER:
            return Object.assign({}, state, action.user);
        default:
            return state;
    }
}