export default function ResultPage({ interpretation}) {
  return (
    <main>
      <h1 className="text-black">Result: {interpretation}</h1>
      {/* {feedback ? <p>AI Feedback: {feedback}</p> : <p>Loading feedback...</p>} */}
    </main>
  )
}
