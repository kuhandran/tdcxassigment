
/*
Date: 24/07/2021
Developer : Kuhandran
Purpose: 
- Basic redux is for store login details
- composeWithDevTools is for testing purposes
*/

import { createStore } from 'redux';
import reducer from './index';
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(reducer,composeWithDevTools());

export default store;