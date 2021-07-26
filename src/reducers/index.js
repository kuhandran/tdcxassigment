/*
Date: 24/07/2021
Developer : Kuhandran
Purpose: 
- Update the login payload and call the action constant
*/

import { LOGIN_DATA } from '../actions';
const initialState = {
    Login: null
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_DATA:
            return {
                Login: action.payload
            };
        default:
            return state;
    }
    
}
export default reducer;