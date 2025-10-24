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
        <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
            <NavBar/>
            <div>
                <Shadow component={<Hero/>}/>
                <BentoGrid/>
                <AboutSection/>
                <ShadowBottom component={<SecondHero/>}/>
            </div>
            <Footer/>
        </div>
        </>
    )
}