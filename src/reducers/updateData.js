import store from './store';


export function UpdateLoginInformation (response){
    store.dispatch({
        type: "LOGIN_DATA",
        payload: response.data
    });
}