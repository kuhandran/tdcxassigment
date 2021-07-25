import { Root } from './routes/root/index'
import './App.css';
import { BrowserRouter } from 'react-router-dom';



function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Root />
      </div>
    </BrowserRouter>

  );
}

export default App;
