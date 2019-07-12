import constants from '../constants/UserConstants.js';
const initialState = {};
export default (state = initialState, action) => {
    switch(action.type){
        case constants.CREATEUSER:
            return Object.assign({}, state, action.user);
        case constants.LOGINUSER:
            return Object.assign({}, state, { logged:action.logged })
        default:
            return state;
    }
}