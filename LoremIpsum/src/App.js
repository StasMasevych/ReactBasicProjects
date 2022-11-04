import React, { useState } from 'react';
import data from './data';
function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  
  const textSubmitHandler = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0 ) {
      amount = 1
    }
    if (count > 8) {
      amount = 8
      
    }
    setText(data.slice(0,amount))
  }
  
  return (
    <section className="section-center">
      <h3>Generate lorem ipsum</h3>
      <form onSubmit={textSubmitHandler} className="lorem-form">
        <label htmlFor="amount">
          paragraphs:
        </label>
        <input onChange={(e) => setCount(e.target.value)} type="number" name="amount" id="amount" value={count}/>
        <button className="btn" type="submit">generate</button>
      </form>
      <article className="lorem-text">
        {text.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>
        })}
      </article>
    </section>
    )
}

export default App;
