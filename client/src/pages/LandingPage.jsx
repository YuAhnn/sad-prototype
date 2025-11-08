import BentoGrid from "../components/ui/BentoGrid"
import Hero from "../components/ui/Hero"
import NavBar from "../components/ui/NavBar"
import AboutSection from "../components/ui/AboutSection"
import Footer from "../components/ui/Footer"
import Shadow from '../components/background/Shadow'
import ShadowBottom from '../components/background/ShadowBottom'

export default function LandingPage() {
    return(
        <>
        <NavBar />
          <Shadow component={<Hero 
            text1="Guiding Your Emotional" 
            text2="Wellness Journey" 
            description="Compass delivers support and emotional guidance for your well-being" 
            label="Begin Assessment" 
            link="/assessment" 
            />} 
          />
          <BentoGrid />
          <AboutSection /> 
          <ShadowBottom component={<Hero 
          text1="Let's start your" 
          text2="Wellness Journey" 
          description="Come explore a safe space made for you well-being"  
          label="Get Started" 
          link="/assessment"
            />} 
          /> 
        <Footer />
        </>
    )
}