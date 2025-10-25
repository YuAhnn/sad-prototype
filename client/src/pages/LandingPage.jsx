import BentoGrid from "../ui/BentoGrid"
import Hero from "../ui/Hero"
import NavBar from "../ui/NavBar"
import AboutSection from "../ui/AboutSection"
import SecondHero from "../ui/SecondHero"
import Footer from "../ui/Footer"
import Shadow from '../components/Shadow'
import ShadowBottom from '../components/ShadowBottom'

export default function LandingPage() {
    return(
        <>
        <NavBar />
          <Shadow component={<Hero />} />
          <BentoGrid />
          <AboutSection />
          <ShadowBottom component={<SecondHero />} />
        <Footer />
        </>
    )
}