import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/Hero';
import Placement from './Components/Placement';
import LandingSection from './Components/Landing';
import ResultSection from './Components/Result';
import Footer from './Components/Footer';

function App() {
  return (
      <div className="App ">
        <Navbar />
        <HeroSection />
        <Placement />
        <LandingSection />
        <ResultSection />
        <Footer />
      </div>
  );
}

export default App;
