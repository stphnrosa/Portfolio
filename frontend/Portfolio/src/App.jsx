import {Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx'
import Navbar from './components/Navbar/Navbar.jsx'

export default function App () {
  return (
    <>
    <Navbar />
{/*   
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    */}
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>

  );
}
