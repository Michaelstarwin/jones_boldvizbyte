import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/layout/Layout';
import LoadingScreen from './components/ui/LoadingScreen';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import OurWork from './pages/OurWork';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Effectively removed the simulation timer


  return (
    <AuthProvider>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" onComplete={() => setLoading(false)} />
        ) : (
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="services/:id" element={<ServiceDetail />} />
              <Route path="our-work" element={<OurWork />} />
              <Route path="careers" element={<Careers />} />
              <Route path="contact" element={<Contact />} />
              <Route path="privacy-policy" element={<Privacy />} />
              <Route path="terms-conditions" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        )}
      </AnimatePresence>
    </AuthProvider>
  );
}

export default App;
