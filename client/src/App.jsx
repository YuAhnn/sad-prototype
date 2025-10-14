import { Routes, Route } from "react-router-dom"

import LandingPage from './pages/LandingPage'
import ArticlePage from './pages/ArticlePage'
import AssessmentPage from "./pages/AssessmentPage"
import AssessmentDynaPage from "./pages/AssessmentDynaPage"
import ReferralPage from "./pages/ReferralPage"
import AboutPage from "./pages/AboutPage"
import ErrorPage from "./pages/ErrorPage"

export default function App() {
  return(
    <>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/articles" element={<ArticlePage/>}/>
      <Route path="/assessment" element={<AssessmentPage/>}/>
      <Route path="/assessment/:toolId" element={<AssessmentDynaPage/>}/>
      <Route path="/referral" element={<ReferralPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </>
  )
}