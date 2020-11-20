import React from 'react';
import {BrowserRouter as Router} from'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Nav/>

        <Content/>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
