import { Root } from './routes/root/index'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducers/store';



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
