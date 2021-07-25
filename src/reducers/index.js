import { LOGIN_DATA } from '../actions';
const initialState = {
    Login: 5
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