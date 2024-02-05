import Button from './components/Button/Button'
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='App-header space-y-6'>
          <h1 className='text-center text-2xl font-bold text-white'> Welcome to the Park Management web application!</h1>
          <div>
            <Link to="/login"> 
              <Button >Sign in to my account</Button>
            </Link>
          </div>
      </header>
    </div>
  );
}

export default App;
