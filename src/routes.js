import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Accommodation from './pages/Accommodation/Accommodation';
import Error from './pages/Error/Error';

export default function AppRoutes() {
    return (
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/accommodation/:id" element={<Accommodation />} />
           <Route path="/error" element={<Error />} />
           <Route path="*" element={<Error />} />
        </Routes>
    )
}