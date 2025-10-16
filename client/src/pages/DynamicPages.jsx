import { Suspense, lazy} from "react"
import { useParams } from "react-router-dom"
import Error from "../components/Error"

export default function DynamicPages() {

    const { toolId } = useParams()

    const assessmentComponents = {
        "depression": lazy(() => import('../Instruments/Depression'))
    }

    const Assessment = assessmentComponents[toolId]

    if (!Assessment) {
        return <Error/>
    }

    return(
       <Suspense fallback={<div>Loading assessment...</div>}>
         <Assessment/>
       </Suspense>
    )
}