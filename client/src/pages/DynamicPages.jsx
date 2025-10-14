import { Suspense, lazy} from "react"
import { useParams } from "react-router-dom"

export default function AssessmentDynaPage() {

    const { toolId } = useParams()

    const assessmentComponents = {
        "depression": lazy(() => import('../Instruments/Depression'))
    }

    const Assessment = assessmentComponents[toolId]

    if (!Assessment) {
        return <div>Assessment not found</div>
    }

    return(
       <Suspense fallback={<div>Loading assessment...</div>}>
         <Assessment/>
       </Suspense>
    )
}