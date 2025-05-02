import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/Body';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        {/* <Route path="/about" element={<AboutUs />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
