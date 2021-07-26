import { Root } from './routes/root/index'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducers/store';

/*
Date: 24/07/2021
Developer : Kuhandran
Purpose: 
- Root js is for the naviagation to intialized 
- store is redux store some session information
*/

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Provider store={store}>
          <Root />
        </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
