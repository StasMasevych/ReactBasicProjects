import React, { useState } from 'react';

const Tour = (props) => {
  const {id, image, info, price, name, removeTour} = props;

  const [readMore, setReadMore] = useState(false)
  

  const readMoreHandler = () => {
    setReadMore(!readMore)
  }

  //removeTourHandler (App) passed to removeTour props (Tours) then passed to removeTour props (Tour), and here to call function we need either handler or anonymus function (onClick={() => removeTour(id)})
  //If we have function wich we call inside the component where we call we can make just reference - check example with calling fetch by clicking the button 'Refresh'

  const removeTourButtonHadler = () => {
    removeTour(id)
  }

  

  return (
    <article className="single-tour">
      <img src={image} alt={name}/>
      <section>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{readMore ? info :`${info.substring(0, 200)}...`
          
          }
          <button onClick={readMoreHandler}>{readMore ? 'Show less' : 'Read more'}</button>
        </p>
        <button onClick={removeTourButtonHadler} className="delete-btn">not interested</button>
      </section>
    </article>
  )
};

export default Tour;
