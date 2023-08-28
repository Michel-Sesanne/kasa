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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accomodation" element={<Accomodation />} />
          <Route path="*" element={<Error />} />          
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
