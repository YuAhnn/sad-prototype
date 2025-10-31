import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchToolByToolId } from "../firebase/db";
import Loading from "../components/ui/Loading";
import Error from "../components/ui/Error";
import Form from "../components/Form/Form";

export default function FormPages() {
  const { toolId } = useParams();
  const [assessment, setAssessment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchDataForm = async () => {
      try {
        const data = await fetchToolByToolId(toolId);
        setAssessment(data);

        console.log(toolId);
        console.log("DATA: ", data);

      } catch (error) {
        console.error("ERROR: ", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchDataForm();

  }, [toolId]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return <Form assessment={assessment} />;
}
