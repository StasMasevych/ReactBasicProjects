import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (props) => {
  const {title, info} = props;

  const [readMore, setReadMore] = useState(false);

  const readMoreHandler = () => {
    setReadMore(!readMore)
  }

  return (
        <article className="question">
          <header>
            <h4>{title}</h4>
            <button onClick={readMoreHandler} className="btn">
              {readMore ? <AiOutlineMinus/> : <AiOutlinePlus/>}
            </button>
          </header>
          {readMore ? <p>{info}</p> : null}
        </article>
    
  )
};

export default Question;
