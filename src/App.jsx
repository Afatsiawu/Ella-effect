import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import './App.css';

// Components
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Portfolio from './pages/Portfolio/Portfolio';
import Blog from './pages/Blog/Blog';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import FAQ from './pages/FAQ/FAQ';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
