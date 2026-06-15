import React from 'react'
import Hero from "./Hero";
import HighLights from "./HighLights";
import Testimonials from './Testimonials';
import About from './About';
export default function Home() {
  return (
    <div>
        <Hero />
        <HighLights />
        <Testimonials />
        <About />
    </div>
  )
}
