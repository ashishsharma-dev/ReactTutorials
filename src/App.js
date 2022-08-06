import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import TextForm from './TextForm';
import './style.css';

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TextForm  header="Enter the text below" />
    </>
  );
}
