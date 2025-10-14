import BentoGrid from "../ui/BentoGrid"
import Hero from "../ui/Hero"
import NavBar from "../ui/NavBar"
import AboutSection from "../ui/AboutSection"
export default function LandingPage() {
    return(
        <>
            <NavBar/>
            <Hero/>
            <BentoGrid/>
            <AboutSection/>
        </>
    )
}