import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/Hero';
import Placement from './Components/Placement';
import LandingSection from './Components/Landing';
import ResultSection from './Components/Result';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Notes from './Components/Notes';
import UserDetails from './Components/User'; // Import UserDetails

function App() {
  const [details, setDetails] = useState(() => {
    const storedDetails = sessionStorage.getItem("userDetails");
    return storedDetails ? JSON.parse(storedDetails) : UserDetails;
  });

  useEffect(() => {
    sessionStorage.setItem("userDetails", JSON.stringify(details));
  }, [details]);

    return (
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <HeroSection />
                            <Placement />
                            <LandingSection />
                            <ResultSection details={details} />
                        </> 
                    } />
                    <Route path="/Admin" element={<Form details={details} setDetails={setDetails} />} /> {/* Pass details and setDetails */}
                    <Route path="/form" element={<Form details={details} setDetails={setDetails}  />} />
                    <Route path="/notes" element={<Notes />} />
                </Routes>
                <Footer />
            </div>
    );
}

export default App;