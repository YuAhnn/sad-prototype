import NavBar from '../ui/NavBar'
import { Link } from 'react-router-dom'

export  default function AssessmentPage(){
    return(
        <>
        <NavBar/>
        <h1>Assessment</h1>
        <Link to="/assessment/depression">MOOD</Link>
        </>
    )
}