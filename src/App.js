import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Accomodation from './pages/Accomodation/Accomodation'
import Error from './pages/Error/Error';
import { ListeLogementsProvider } from './components/ListeLogements'

function App() {
  return (
    <ListeLogementsProvider>
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
    </ListeLogementsProvider>
  );
}

export default App;
