import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Head/Navbar';
import Container from './Container/Container';
import Footer from './Footer/Footer';

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Container />
      <h1 className="text-2xl font-semibold my-4">Welcome to My App</h1>
      <p className="text-lg">This is the main content of the app.</p>
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

