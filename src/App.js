import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import './style.css';

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="center">
        <h2>Stackblitz!</h2>
      </div>
    </>
  );
}
