import React, { useState } from 'react';
import data from './data';
import Question from './Question';
function App() {

  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => (
              <Question key={question.id} title={question.title} info={question.info} id={question.id}/>
            ))}
        </section>
      </div>
    </main>
  )
}

export default App;
