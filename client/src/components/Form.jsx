export default function Form({ assessment }) {
  return (
    <div>
      <h1>{assessment.name}</h1>
      <div>
        {assessment.questions?.map((q) => (
          <div key={q.id}>
            <p>{q.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
