import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Publications from './pages/Publications';
import Youtube from './pages/Youtube';
import Teaching from './pages/Teaching';
import Gallary from './pages/Gallary';
import Contact from './pages/Contact';
import FooterCom from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications/>} />
          <Route path="/youtube" element={<Youtube/>} />
          <Route path="/teaching" element={<Teaching/>} />
          <Route path="/gallary" element={<Gallary/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <FooterCom/>
    </Router>
  );
}

export default App;
