import { Routes, Route } from "react-router-dom"

import LandingPage from './pages/LandingPage'
import ArticlePage from './pages/ArticlePage'
import AssessmentPage from "./pages/AssessmentPage"
import DynamicPages from "./pages/DynamicPages"
import ReferralPage from "./pages/ReferralPage"
import AboutPage from "./pages/AboutPage"
import Error from "./components/Error"

export default function App() {
  return(
    <>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/articles" element={<ArticlePage/>}/>
      <Route path="/assessment" element={<AssessmentPage/>}/>
      <Route path="/assessment/:toolId" element={<DynamicPages/>}/>
      <Route path="/referral" element={<ReferralPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    </>
  )
}