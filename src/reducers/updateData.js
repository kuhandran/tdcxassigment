import store from './store';

/*
Date: 24/07/2021
Developer : Kuhandran
Purpose: 
- update Login information and update store props
*/


export function UpdateLoginInformation (response){
    store.dispatch({
        type: "LOGIN_DATA",
        payload: response.data
    });
}