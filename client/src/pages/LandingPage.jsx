import BentoGrid from "../components/ui/BentoGrid"
import Hero from "../components/ui/Hero"
import NavBar from "../components/ui/NavBar"
import AboutSection from "../components/ui/AboutSection"
import SecondHero from "../components/ui/SecondHero"
import Footer from "../components/ui/Footer"
import Shadow from '../components/background/Shadow'
import ShadowBottom from '../components/background/ShadowBottom'

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