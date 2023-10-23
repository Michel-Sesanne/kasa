import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Accommodation from './pages/Accommodation/Accommodation';
import Error from './pages/Error/Error';

export default function AppRoutes() {
    return (
        <Routes>
           <Route path="/kasa" element={<Home />} />
           <Route path="/kasa/about" element={<About />} />
           <Route path="/kasa/accommodation/:id" element={<Accommodation />} />
           <Route path="/kasa/error" element={<Error />} />
        </Routes>
    )
}