import React from 'react'
import NavbarSection from '../components/NavbarSection'
import HeroSection from '../components/HeroSection'
import Content from '../components/Content'
import GallerySection from '../components/GallerySection'
import HoverSection from '../components/HoverSection'
import FeatureSection from '../components/FeatureSection'
import PricingSection from '../components/PricingSection'
import TeamSection from '../components/TeamSection'
import TestimonalSection from '../components/TestimonalSection'
import ContactSection from '../components/ContactSection'
import FooterSection from '../components/FooterSection'

function LandingPage({change,theme}) {
  return (

    <div><NavbarSection change={change} theme={theme}/>
     <HeroSection/>
     <Content/>
     <GallerySection/>
     <HoverSection/>
     <FeatureSection/>
     <PricingSection/>
     <TeamSection/>
     <TestimonalSection/>
     <ContactSection/>
     <FooterSection/>
     </div>
  )
}

export default LandingPage