import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Accomodation from './pages/Accomodation/Accomodation.jsx'
import Error from './pages/Error/Error';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/accomodation" component={Accomodation} />
          <Route path="*" component={Error} />          
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
