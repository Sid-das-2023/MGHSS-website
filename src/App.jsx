import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/Body';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        {/* <Route path="/about" element={<AboutUs />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
