import logo from './logo.svg';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card className="Login-cards">
          <Card.Body>
            <Card.Title className="Login-cards-title" >Login</Card.Title>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control className="Login-cards-Text" type="text" placeholder="id" />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Control className="Login-cards-Text" type="text" placeholder="name" />
              </Form.Group>
              
              <Button variant="primary" className="Login-cards-Submit" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </header>
    </div>
  );
}

export default App;
