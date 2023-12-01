
import Navbar from "./Components/Navbar/navbar"
import HeroSection from './Components/HeroSection/heroSection'
import AboutSection from './Components/AboutSection/aboutSection'
import LawSection from './Components/LawSection/lawSection'
import TestimonialSection from './Components/TestimonialSection/testimonialSection'
import OurTeamSection from './Components/OurTeamSection/OurTeamSection'
// import FaqSection from './components/FaqSection/FaqSection'
// import Newsletter from './components/Newsletter/Newsletter'
// import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <LawSection />
      <TestimonialSection />
      <OurTeamSection />
      {/* <FaqSection />
      <Newsletter />
      <Footer /> */}
    </>
  )
}

export default App